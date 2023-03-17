"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinuteCandleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const minute_candle_schema_1 = require("../../schemas/minute-candle.schema");
const upbit_1 = require("../../utils/upbit");
const sleep_1 = require("../../utils/sleep");
const tokens_1 = require("../../config/upbit/tokens");
const datetime_1 = require("../../utils/datetime");
let MinuteCandleService = class MinuteCandleService {
    constructor(minuteCandleModel, upbit) {
        this.minuteCandleModel = minuteCandleModel;
        this.upbit = upbit;
    }
    create(unit, count) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Saving MinuteCandles`);
            for (let i = 1; i < tokens_1.krwTokens.length + 1; i++) {
                const start = Date.now();
                const responses = yield this.upbit.getMinuteCandle(unit, tokens_1.krwTokens[i - 1].market, count);
                for (let j = responses.length - 1; j > 0; j--) {
                    const utcDate = new Date(`${responses[j].candle_date_time_utc}.000Z`);
                    const kstDate = new Date(`${responses[j].candle_date_time_kst}.000Z`);
                    const matchData = yield this.minuteCandleModel.findOne({
                        market: responses[j].market,
                        timestamp: responses[j].timestamp,
                    });
                    if (matchData) {
                    }
                    else {
                        const tokenCandle = new this.minuteCandleModel(responses[j]);
                        tokenCandle.candle_date_time_utc = utcDate;
                        tokenCandle.candle_date_time_kst = kstDate;
                        yield tokenCandle.save();
                    }
                }
                const now = Date.now();
                if (i % 10 == 0 && now - start < 1000) {
                    yield (0, sleep_1.sleep)(1100 - (now - start));
                }
            }
            console.log('Done');
        });
    }
    delete(unit) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Deleteing MinuteCandles');
            for (let i = 1; i < tokens_1.krwTokens.length + 1; i++) {
                const start = Date.now();
                const utcDate = yield this.upbit.getMinuteCandle(unit, tokens_1.krwTokens[i - 1].market, 1);
                const date = new Date(`${utcDate[0].candle_date_time_utc}.000Z`);
                const newDate = new Date(date.setDate(date.getDate() - 5));
                yield this.minuteCandleModel.deleteMany({
                    market: tokens_1.krwTokens[i - 1].market,
                    candle_date_time_utc: { $lt: newDate },
                });
                const now = Date.now();
                if (i % 10 == 0 && now - start < 1000) {
                    yield (0, sleep_1.sleep)(1100 - (now - start));
                }
            }
            console.log('Done');
        });
    }
    find(hours, baseTime, loop = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (loop) {
                let array = [];
                for (let value of tokens_1.krwTokens) {
                    const obj = {};
                    const data = yield this.minuteCandleModel
                        .find({ market: value.market, candle_date_time_utc: { $lte: baseTime } }, { _id: 0, __v: 0 })
                        .sort({ candle_date_time_utc: -1 })
                        .limit(hours * 2);
                    const volumeSum = data
                        .slice(0, data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_volume, 0);
                    const prevVolumeSum = data
                        .slice(data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_volume, 0);
                    obj.market = data[0].market;
                    obj.volumeDiff = volumeSum - prevVolumeSum;
                    obj.volumeDiffRate = obj.volumeDiff / prevVolumeSum;
                    obj.datetime = baseTime;
                    array.push(obj);
                }
                return array;
            }
            else {
                const { year, month, date, hour } = (0, datetime_1.convertDatetime)(baseTime);
                const datetimeLimit = new Date(year, month, date, hour - hours * 2);
                const data = yield this.minuteCandleModel.find({ candle_date_time_utc: { $lte: baseTime, $gt: datetimeLimit } }, { _id: 0, __v: 0 });
                return data;
            }
        });
    }
};
MinuteCandleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(minute_candle_schema_1.MinuteCandle.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        upbit_1.Upbit])
], MinuteCandleService);
exports.MinuteCandleService = MinuteCandleService;
//# sourceMappingURL=minuteCandle.service.js.map