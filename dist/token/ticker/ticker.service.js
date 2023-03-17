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
exports.TickerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ticker_schema_1 = require("../../schemas/ticker.schema");
const upbit_1 = require("../../utils/upbit");
const tokens_1 = require("../../config/upbit/tokens");
let TickerService = class TickerService {
    constructor(tickerModel, upbit) {
        this.tickerModel = tickerModel;
        this.upbit = upbit;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = yield this.upbit.getTicker(tokens_1.markets.toString());
            const date = new Date();
            const currentTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
            console.log('Saving Tickers...');
            for (let item of responses) {
                const ticker = new this.tickerModel();
                ticker.market = item.market;
                ticker.acc_trade_price_24h = item.acc_trade_price_24h;
                ticker.acc_trade_volume_24h = item.acc_trade_volume_24h;
                ticker.created_at = currentTime;
                yield ticker.save();
            }
            console.log('Done');
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            const time = new Date('2023-02-14T07:00:00.000+00:00');
            console.log(time);
            const result = yield this.tickerModel.find({ created_at: time });
            console.log(result);
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
};
TickerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ticker_schema_1.Ticker.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        upbit_1.Upbit])
], TickerService);
exports.TickerService = TickerService;
//# sourceMappingURL=ticker.service.js.map