/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrapModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const database_module_1 = __webpack_require__(5);
const minuteCandle_module_1 = __webpack_require__(7);
const scrap_service_1 = __webpack_require__(18);
const minuteCandle_service_1 = __webpack_require__(8);
const upbit_1 = __webpack_require__(12);
let ScrapModule = class ScrapModule {
};
ScrapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            database_module_1.DatabaseModule,
            minuteCandle_module_1.MinuteCandleModule,
        ],
        providers: [scrap_service_1.ScrapService, minuteCandle_service_1.MinuteCandleService, upbit_1.Upbit],
    })
], ScrapModule);
exports.ScrapModule = ScrapModule;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(6);
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                    dbName: process.env.NODE_ENV === 'development'
                        ? 'junbit-dev'
                        : process.env.NODE_ENV === 'production'
                            ? 'junbit-prod'
                            : 'junbit-local',
                }),
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinuteCandleModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(6);
const minuteCandle_service_1 = __webpack_require__(8);
const minuteCandle_schema_1 = __webpack_require__(10);
const tradeRank_schema_1 = __webpack_require__(11);
const upbit_1 = __webpack_require__(12);
let MinuteCandleModule = class MinuteCandleModule {
};
MinuteCandleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: minuteCandle_schema_1.MinuteCandle.name, schema: minuteCandle_schema_1.MinuteCandleSchema },
                { name: tradeRank_schema_1.TradeRank.name, schema: tradeRank_schema_1.TradeRankSchema },
            ]),
        ],
        providers: [minuteCandle_service_1.MinuteCandleService, upbit_1.Upbit],
        exports: [minuteCandle_service_1.MinuteCandleService, mongoose_1.MongooseModule],
    })
], MinuteCandleModule);
exports.MinuteCandleModule = MinuteCandleModule;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinuteCandleService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(6);
const mongoose_2 = __webpack_require__(9);
const minuteCandle_schema_1 = __webpack_require__(10);
const tradeRank_schema_1 = __webpack_require__(11);
const upbit_1 = __webpack_require__(12);
const sleep_1 = __webpack_require__(14);
const tokens_1 = __webpack_require__(15);
const datetime_1 = __webpack_require__(16);
const lodash_1 = __webpack_require__(17);
let MinuteCandleService = class MinuteCandleService {
    constructor(minuteCandleModel, tradeRankModel, upbit) {
        this.minuteCandleModel = minuteCandleModel;
        this.tradeRankModel = tradeRankModel;
        this.upbit = upbit;
    }
    async create(unit, to) {
        var _a, e_1, _b, _c;
        let i = 1;
        const array = [];
        try {
            for (var _d = true, krwTokens_1 = __asyncValues(tokens_1.krwTokens), krwTokens_1_1; krwTokens_1_1 = await krwTokens_1.next(), _a = krwTokens_1_1.done, !_a;) {
                _c = krwTokens_1_1.value;
                _d = false;
                try {
                    const token = _c;
                    const start = Date.now();
                    console.log(token.korean_name);
                    const response = await this.upbit.getMinuteCandle(unit, token.market, to);
                    const exist = await this.minuteCandleModel.findOne({
                        timestamp: response[0].timestamp,
                    });
                    if (exist) {
                        return;
                    }
                    const obj = {};
                    const res = response[0];
                    obj['market'] = res.market;
                    obj['candle_date_time_utc'] = `${res.candle_date_time_utc}.000Z`;
                    obj['timestamp'] = res.timestamp;
                    obj['candle_acc_trade_price'] = res.candle_acc_trade_price;
                    obj['candle_acc_trade_volume'] = res.candle_acc_trade_volume;
                    obj['unit'] = res.unit;
                    array.push(obj);
                    const now = Date.now();
                    if (i % 10 === 0 && now - start < 1000) {
                        await (0, sleep_1.sleep)(1200 - (now - start));
                    }
                    if (i === 115 && now - start < 1000) {
                        await (0, sleep_1.sleep)(1200 - (now - start));
                    }
                    i++;
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = krwTokens_1.return)) await _b.call(krwTokens_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            await this.minuteCandleModel.insertMany(array);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async delete(datetime) {
        console.log('Deleteing MinuteCandles');
        const { year, month, date, hour } = (0, datetime_1.resolveDatetime)(datetime);
        const baseTime = new Date(year, month, date - 25, hour).toISOString();
        await this.minuteCandleModel.deleteMany({
            candle_date_time_utc: { $lt: baseTime },
        });
        await this.tradeRankModel.deleteMany({
            datetime: { $lt: baseTime },
        });
        console.log('Done');
    }
    async findByMarketAndDatetime(market, hours, datetime) {
        const result = await this.minuteCandleModel
            .find({
            market,
            candle_date_time_utc: { $lte: datetime },
        }, { _id: 0, __v: 0 })
            .sort({ candle_date_time_utc: -1 })
            .limit(hours * 2);
        if (result.length < hours * 2) {
            return;
        }
        return result;
    }
    async calculateSum(hours, datetime) {
        var _a, e_2, _b, _c;
        const array = [];
        try {
            for (var _d = true, krwTokens_2 = __asyncValues(tokens_1.krwTokens), krwTokens_2_1; krwTokens_2_1 = await krwTokens_2.next(), _a = krwTokens_2_1.done, !_a;) {
                _c = krwTokens_2_1.value;
                _d = false;
                try {
                    const value = _c;
                    const data = await this.findByMarketAndDatetime(value.market, hours, datetime);
                    if (!data) {
                        return;
                    }
                    const obj = {
                        market: data[0].market,
                        datetime: data[0].candle_date_time_utc,
                    };
                    const volumeSum = data
                        .slice(0, data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_volume, 0);
                    const prevVolumeSum = data
                        .slice(data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_volume, 0);
                    const volumeDiff = volumeSum - prevVolumeSum;
                    const priceSum = data
                        .slice(0, data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_price, 0);
                    const prevPriceSum = data
                        .slice(data.length / 2)
                        .reduce((accumulator, object) => accumulator + object.candle_acc_trade_price, 0);
                    const priceDiff = priceSum - prevPriceSum;
                    obj[`volumeSum${hours}H`] = volumeSum;
                    obj[`volumeDiff${hours}H`] = volumeDiff;
                    obj[`volumeDiffRate${hours}H`] = volumeDiff / prevVolumeSum;
                    obj[`priceSum${hours}H`] = priceSum;
                    obj[`priceDiff${hours}H`] = priceDiff;
                    obj[`priceDiffRate${hours}H`] = priceDiff / prevPriceSum;
                    array.push(obj);
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = krwTokens_2.return)) await _b.call(krwTokens_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return array;
    }
    async saveRankData(hours, datetime) {
        var _a, e_3, _b, _c;
        console.log('SAVING RANK DATA UNIT::: ', hours, 'DATETIME::: ', datetime);
        const { year, month, date, hour } = (0, datetime_1.resolveDatetime)(datetime);
        const newDatetime = new Date(year, month, date, hour).toISOString();
        const prevTime = new Date(year, month, date, hour - hours).toISOString();
        const prevDay = new Date(year, month, date - 1, hour).toISOString();
        const data = await this.calculateSum(hours, newDatetime);
        if (!data) {
            return;
        }
        const array = [];
        const sortedDataByVolumeSum = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`volumeSum${hours}H`] - a[`volumeSum${hours}H`]);
        const sortedDataByVolumeDiffRate = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`volumeDiffRate${hours}H`] - a[`volumeDiffRate${hours}H`]);
        const sortedDataByPriceSum = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`priceSum${hours}H`] - a[`priceSum${hours}H`]);
        const sortedDataByPriceDiff = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`priceDiff${hours}H`] - a[`priceDiff${hours}H`]);
        const sortedDataByPriceDiffRate = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`priceDiffRate${hours}H`] - a[`priceDiffRate${hours}H`]);
        try {
            for (var _d = true, data_1 = __asyncValues(data), data_1_1; data_1_1 = await data_1.next(), _a = data_1_1.done, !_a;) {
                _c = data_1_1.value;
                _d = false;
                try {
                    const item = _c;
                    const exist = await this.tradeRankModel.findOne({
                        market: item.market,
                        datetime: item.datetime,
                        unit: hours,
                    });
                    if (exist) {
                    }
                    else {
                        const obj = {};
                        const prevData = await this.tradeRankModel.findOne({
                            market: item.market,
                            datetime: prevTime,
                            unit: hours,
                        });
                        const prevDayData = await this.tradeRankModel.findOne({
                            market: item.market,
                            datetime: prevDay,
                            unit: hours,
                        });
                        obj['market'] = item.market;
                        obj['volumeSum'] = item[`volumeSum${hours}H`];
                        obj['priceSum'] = item[`priceSum${hours}H`];
                        obj['volumeDiff'] = item[`volumeDiff${hours}H`];
                        obj['priceDiff'] = item[`priceDiff${hours}H`];
                        obj['volumeDiffRate'] = item[`volumeDiffRate${hours}H`];
                        obj['priceDiffRate'] = item[`priceDiffRate${hours}H`];
                        obj['volumeSumRank'] =
                            sortedDataByVolumeSum.findIndex((value) => value.market === item.market) + 1;
                        obj['volumeDiffRateRank'] =
                            sortedDataByVolumeDiffRate.findIndex((value) => value.market === item.market) + 1;
                        obj['priceSumRank'] =
                            sortedDataByPriceSum.findIndex((value) => value.market === item.market) + 1;
                        obj['priceDiffRank'] =
                            sortedDataByPriceDiff.findIndex((value) => value.market === item.market) + 1;
                        obj['priceDiffRateRank'] =
                            sortedDataByPriceDiffRate.findIndex((value) => value.market === item.market) + 1;
                        obj['prevVolumeDiffRateRank'] = prevData
                            ? prevData.volumeDiffRateRank
                            : null;
                        obj['prevDayVolumeDiffRateRank'] = prevDayData
                            ? prevDayData.volumeDiffRateRank
                            : null;
                        obj['prevPriceDiffRank'] = prevData ? prevData.priceDiffRank : null;
                        obj['prevDayPriceDiffRank'] = prevDayData
                            ? prevDayData.priceDiffRank
                            : null;
                        obj['prevPriceDiffRateRank'] = prevData
                            ? prevData.priceDiffRateRank
                            : null;
                        obj['prevDayPriceDiffRateRank'] = prevDayData
                            ? prevDayData.priceDiffRateRank
                            : null;
                        obj['unit'] = hours;
                        obj['datetime'] = item.datetime;
                        array.push(obj);
                    }
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = data_1.return)) await _b.call(data_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            await this.tradeRankModel.insertMany(array);
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
MinuteCandleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(minuteCandle_schema_1.MinuteCandle.name)),
    __param(1, (0, mongoose_1.InjectModel)(tradeRank_schema_1.TradeRank.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof upbit_1.Upbit !== "undefined" && upbit_1.Upbit) === "function" ? _c : Object])
], MinuteCandleService);
exports.MinuteCandleService = MinuteCandleService;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinuteCandleSchema = exports.MinuteCandle = void 0;
const mongoose_1 = __webpack_require__(6);
let MinuteCandle = class MinuteCandle {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MinuteCandle.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MinuteCandle.prototype, "candle_date_time_utc", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MinuteCandle.prototype, "timestamp", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "candle_acc_trade_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "candle_acc_trade_volume", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MinuteCandle.prototype, "unit", void 0);
MinuteCandle = __decorate([
    (0, mongoose_1.Schema)()
], MinuteCandle);
exports.MinuteCandle = MinuteCandle;
exports.MinuteCandleSchema = mongoose_1.SchemaFactory.createForClass(MinuteCandle);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeRankSchema = exports.TradeRank = void 0;
const mongoose_1 = __webpack_require__(6);
let TradeRank = class TradeRank {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TradeRank.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "volumeSum", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "priceSum", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "volumeSumRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "priceSumRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "volumeDiff", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "priceDiff", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "priceDiffRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "volumeDiffRate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "priceDiffRate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "volumeDiffRateRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "priceDiffRateRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "prevVolumeDiffRateRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "prevDayVolumeDiffRateRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "prevPriceDiffRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "prevDayPriceDiffRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "prevPriceDiffRateRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "prevDayPriceDiffRateRank", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TradeRank.prototype, "datetime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TradeRank.prototype, "unit", void 0);
TradeRank = __decorate([
    (0, mongoose_1.Schema)()
], TradeRank);
exports.TradeRank = TradeRank;
exports.TradeRankSchema = mongoose_1.SchemaFactory.createForClass(TradeRank);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Upbit = void 0;
const axios_1 = __webpack_require__(13);
class Upbit {
    constructor() {
        this.BASE_URL = 'https://api.upbit.com/v1';
        this.options = { method: 'GET', headers: { accept: 'application/json' } };
    }
    async getMinuteCandle(unit, market, to, count = 1) {
        try {
            const response = await axios_1.default.get(`${this.BASE_URL}/candles/minutes/${unit}?market=${market}&to=${to}&count=${count}`, this.options);
            return response.data;
        }
        catch (e) {
            throw Error(e);
        }
    }
    async getTicker(markets) {
        try {
            const response = await axios_1.default.get(`${this.BASE_URL}/ticker?markets=${markets}`, this.options);
            return response.data;
        }
        catch (e) {
            throw Error(e);
        }
    }
}
exports.Upbit = Upbit;


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.sleep = sleep;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.markets = exports.krwTokens = void 0;
exports.krwTokens = [
    {
        market: 'KRW-BTC',
        korean_name: '비트코인',
        english_name: 'Bitcoin',
    },
    {
        market: 'KRW-ETH',
        korean_name: '이더리움',
        english_name: 'Ethereum',
    },
    {
        market: 'KRW-NEO',
        korean_name: '네오',
        english_name: 'NEO',
    },
    {
        market: 'KRW-MTL',
        korean_name: '메탈',
        english_name: 'Metal',
    },
    {
        market: 'KRW-XRP',
        korean_name: '리플',
        english_name: 'Ripple',
    },
    {
        market: 'KRW-ETC',
        korean_name: '이더리움클래식',
        english_name: 'Ethereum Classic',
    },
    {
        market: 'KRW-OMG',
        korean_name: '오미세고',
        english_name: 'OmiseGo',
    },
    {
        market: 'KRW-SNT',
        korean_name: '스테이터스네트워크토큰',
        english_name: 'Status Network Token',
    },
    {
        market: 'KRW-WAVES',
        korean_name: '웨이브',
        english_name: 'Waves',
    },
    {
        market: 'KRW-XEM',
        korean_name: '넴',
        english_name: 'NEM',
    },
    {
        market: 'KRW-QTUM',
        korean_name: '퀀텀',
        english_name: 'Qtum',
    },
    {
        market: 'KRW-LSK',
        korean_name: '리스크',
        english_name: 'Lisk',
    },
    {
        market: 'KRW-STEEM',
        korean_name: '스팀',
        english_name: 'Steem',
    },
    {
        market: 'KRW-XLM',
        korean_name: '스텔라루멘',
        english_name: 'Lumen',
    },
    {
        market: 'KRW-ARDR',
        korean_name: '아더',
        english_name: 'Ardor',
    },
    {
        market: 'KRW-ARK',
        korean_name: '아크',
        english_name: 'Ark',
    },
    {
        market: 'KRW-STORJ',
        korean_name: '스토리지',
        english_name: 'Storj',
    },
    {
        market: 'KRW-GRS',
        korean_name: '그로스톨코인',
        english_name: 'Groestlcoin',
    },
    {
        market: 'KRW-REP',
        korean_name: '어거',
        english_name: 'Augur',
    },
    {
        market: 'KRW-ADA',
        korean_name: '에이다',
        english_name: 'Ada',
    },
    {
        market: 'KRW-SBD',
        korean_name: '스팀달러',
        english_name: 'SteemDollars',
    },
    {
        market: 'KRW-POWR',
        korean_name: '파워렛저',
        english_name: 'Power ledger',
    },
    {
        market: 'KRW-BTG',
        korean_name: '비트코인골드',
        english_name: 'Bitcoin Gold',
    },
    {
        market: 'KRW-ICX',
        korean_name: '아이콘',
        english_name: 'Icon',
    },
    {
        market: 'KRW-EOS',
        korean_name: '이오스',
        english_name: 'EOS',
    },
    {
        market: 'KRW-TRX',
        korean_name: '트론',
        english_name: 'TRON',
    },
    {
        market: 'KRW-SC',
        korean_name: '시아코인',
        english_name: 'Siacoin',
    },
    {
        market: 'KRW-ONT',
        korean_name: '온톨로지',
        english_name: 'Ontology',
    },
    {
        market: 'KRW-ZIL',
        korean_name: '질리카',
        english_name: 'Zilliqa',
    },
    {
        market: 'KRW-POLYX',
        korean_name: '폴리매쉬',
        english_name: 'Polymesh',
    },
    {
        market: 'KRW-ZRX',
        korean_name: '제로엑스',
        english_name: '0x Protocol',
    },
    {
        market: 'KRW-LOOM',
        korean_name: '룸네트워크',
        english_name: 'Loom Network',
    },
    {
        market: 'KRW-BCH',
        korean_name: '비트코인캐시',
        english_name: 'Bitcoin Cash',
    },
    {
        market: 'KRW-BAT',
        korean_name: '베이직어텐션토큰',
        english_name: 'Basic Attention Token',
    },
    {
        market: 'KRW-IOST',
        korean_name: '아이오에스티',
        english_name: 'IOST',
    },
    {
        market: 'KRW-RFR',
        korean_name: '리퍼리움',
        english_name: 'Refereum',
    },
    {
        market: 'KRW-CVC',
        korean_name: '시빅',
        english_name: 'Civic',
    },
    {
        market: 'KRW-IQ',
        korean_name: '아이큐',
        english_name: 'IQ.wiki',
    },
    {
        market: 'KRW-IOTA',
        korean_name: '아이오타',
        english_name: 'IOTA',
    },
    {
        market: 'KRW-HIFI',
        korean_name: '하이파이',
        english_name: 'Hifi Finance',
    },
    {
        market: 'KRW-ONG',
        korean_name: '온톨로지가스',
        english_name: 'ONG',
    },
    {
        market: 'KRW-GAS',
        korean_name: '가스',
        english_name: 'GAS',
    },
    {
        market: 'KRW-UPP',
        korean_name: '센티넬프로토콜',
        english_name: 'Sentinel Protocol',
    },
    {
        market: 'KRW-ELF',
        korean_name: '엘프',
        english_name: 'aelf',
    },
    {
        market: 'KRW-KNC',
        korean_name: '카이버네트워크',
        english_name: 'Kyber Network',
    },
    {
        market: 'KRW-BSV',
        korean_name: '비트코인에스브이',
        english_name: 'Bitcoin SV',
    },
    {
        market: 'KRW-THETA',
        korean_name: '쎄타토큰',
        english_name: 'Theta Token',
    },
    {
        market: 'KRW-QKC',
        korean_name: '쿼크체인',
        english_name: 'QuarkChain',
    },
    {
        market: 'KRW-BTT',
        korean_name: '비트토렌트',
        english_name: 'BitTorrent',
    },
    {
        market: 'KRW-MOC',
        korean_name: '모스코인',
        english_name: 'Moss Coin',
    },
    {
        market: 'KRW-ENJ',
        korean_name: '엔진코인',
        english_name: 'Enjin',
    },
    {
        market: 'KRW-TFUEL',
        korean_name: '쎄타퓨엘',
        english_name: 'Theta Fuel',
    },
    {
        market: 'KRW-MANA',
        korean_name: '디센트럴랜드',
        english_name: 'Decentraland',
    },
    {
        market: 'KRW-ANKR',
        korean_name: '앵커',
        english_name: 'Ankr',
    },
    {
        market: 'KRW-AERGO',
        korean_name: '아르고',
        english_name: 'Aergo',
    },
    {
        market: 'KRW-ATOM',
        korean_name: '코스모스',
        english_name: 'Cosmos',
    },
    {
        market: 'KRW-TT',
        korean_name: '썬더코어',
        english_name: 'ThunderCore',
    },
    {
        market: 'KRW-CRE',
        korean_name: '캐리프로토콜',
        english_name: 'Carry Protocol',
    },
    {
        market: 'KRW-MBL',
        korean_name: '무비블록',
        english_name: 'MovieBloc',
    },
    {
        market: 'KRW-WAXP',
        korean_name: '왁스',
        english_name: 'WAX',
    },
    {
        market: 'KRW-HBAR',
        korean_name: '헤데라',
        english_name: 'Hedera',
    },
    {
        market: 'KRW-MED',
        korean_name: '메디블록',
        english_name: 'MediBloc',
    },
    {
        market: 'KRW-MLK',
        korean_name: '밀크',
        english_name: 'MiL.k',
    },
    {
        market: 'KRW-STPT',
        korean_name: '에스티피',
        english_name: 'Standard Tokenization Protocol',
    },
    {
        market: 'KRW-ORBS',
        korean_name: '오브스',
        english_name: 'Orbs',
    },
    {
        market: 'KRW-VET',
        korean_name: '비체인',
        english_name: 'VeChain',
    },
    {
        market: 'KRW-CHZ',
        korean_name: '칠리즈',
        english_name: 'Chiliz',
    },
    {
        market: 'KRW-STMX',
        korean_name: '스톰엑스',
        english_name: 'StormX',
    },
    {
        market: 'KRW-DKA',
        korean_name: '디카르고',
        english_name: 'dKargo',
    },
    {
        market: 'KRW-HIVE',
        korean_name: '하이브',
        english_name: 'Hive',
    },
    {
        market: 'KRW-KAVA',
        korean_name: '카바',
        english_name: 'Kava',
    },
    {
        market: 'KRW-AHT',
        korean_name: '아하토큰',
        english_name: 'AhaToken',
    },
    {
        market: 'KRW-LINK',
        korean_name: '체인링크',
        english_name: 'Chainlink',
    },
    {
        market: 'KRW-XTZ',
        korean_name: '테조스',
        english_name: 'Tezos',
    },
    {
        market: 'KRW-BORA',
        korean_name: '보라',
        english_name: 'BORA',
    },
    {
        market: 'KRW-JST',
        korean_name: '저스트',
        english_name: 'JUST',
    },
    {
        market: 'KRW-CRO',
        korean_name: '크로노스',
        english_name: 'Cronos',
    },
    {
        market: 'KRW-TON',
        korean_name: '톤',
        english_name: 'TON',
    },
    {
        market: 'KRW-SXP',
        korean_name: '솔라',
        english_name: 'SXP',
    },
    {
        market: 'KRW-HUNT',
        korean_name: '헌트',
        english_name: 'HUNT',
    },
    {
        market: 'KRW-PLA',
        korean_name: '플레이댑',
        english_name: 'PlayDapp',
    },
    {
        market: 'KRW-DOT',
        korean_name: '폴카닷',
        english_name: 'Polkadot',
    },
    {
        market: 'KRW-SRM',
        korean_name: '세럼',
        english_name: 'Serum',
    },
    {
        market: 'KRW-MVL',
        korean_name: '엠블',
        english_name: 'MVL',
    },
    {
        market: 'KRW-STRAX',
        korean_name: '스트라티스',
        english_name: 'Stratis',
    },
    {
        market: 'KRW-AQT',
        korean_name: '알파쿼크',
        english_name: 'Alpha Quark Token',
    },
    {
        market: 'KRW-GLM',
        korean_name: '골렘',
        english_name: 'Golem',
    },
    {
        market: 'KRW-SSX',
        korean_name: '썸씽',
        english_name: 'SOMESING',
    },
    {
        market: 'KRW-META',
        korean_name: '메타디움',
        english_name: 'Metadium',
    },
    {
        market: 'KRW-FCT2',
        korean_name: '피르마체인',
        english_name: 'FirmaChain',
    },
    {
        market: 'KRW-CBK',
        korean_name: '코박토큰',
        english_name: 'Cobak Token',
    },
    {
        market: 'KRW-SAND',
        korean_name: '샌드박스',
        english_name: 'The Sandbox',
    },
    {
        market: 'KRW-HUM',
        korean_name: '휴먼스케이프',
        english_name: 'Humanscape',
    },
    {
        market: 'KRW-DOGE',
        korean_name: '도지코인',
        english_name: 'Dogecoin',
    },
    {
        market: 'KRW-STRK',
        korean_name: '스트라이크',
        english_name: 'Strike',
    },
    {
        market: 'KRW-PUNDIX',
        korean_name: '펀디엑스',
        english_name: 'Pundi X',
    },
    {
        market: 'KRW-FLOW',
        korean_name: '플로우',
        english_name: 'Flow',
    },
    {
        market: 'KRW-DAWN',
        korean_name: '던프로토콜',
        english_name: 'Dawn Protocol',
    },
    {
        market: 'KRW-AXS',
        korean_name: '엑시인피니티',
        english_name: 'Axie Infinity',
    },
    {
        market: 'KRW-STX',
        korean_name: '스택스',
        english_name: 'Stacks',
    },
    {
        market: 'KRW-XEC',
        korean_name: '이캐시',
        english_name: 'eCash',
    },
    {
        market: 'KRW-SOL',
        korean_name: '솔라나',
        english_name: 'Solana',
    },
    {
        market: 'KRW-MATIC',
        korean_name: '폴리곤',
        english_name: 'Polygon',
    },
    {
        market: 'KRW-AAVE',
        korean_name: '에이브',
        english_name: 'Aave',
    },
    {
        market: 'KRW-1INCH',
        korean_name: '1인치네트워크',
        english_name: '1inch Network',
    },
    {
        market: 'KRW-ALGO',
        korean_name: '알고랜드',
        english_name: 'Algorand',
    },
    {
        market: 'KRW-NEAR',
        korean_name: '니어프로토콜',
        english_name: 'NEAR Protocol',
    },
    {
        market: 'KRW-AVAX',
        korean_name: '아발란체',
        english_name: 'Avalanche',
    },
    {
        market: 'KRW-T',
        korean_name: '쓰레스홀드',
        english_name: 'Threshold',
    },
    {
        market: 'KRW-CELO',
        korean_name: '셀로',
        english_name: 'Celo',
    },
    {
        market: 'KRW-GMT',
        korean_name: '스테픈',
        english_name: 'Stepn',
    },
    {
        market: 'KRW-APT',
        korean_name: '앱토스',
        english_name: 'Aptos',
    },
    {
        market: 'KRW-SHIB',
        korean_name: '시바이누',
        english_name: 'Shiba Inu',
    },
    {
        market: 'KRW-MASK',
        korean_name: '마스크네트워크',
        english_name: 'Mask Network',
    },
    {
        market: 'KRW-ARB',
        korean_name: '아비트럼',
        english_name: 'Arbitrum',
    },
];
exports.markets = [
    'KRW-BTC',
    'KRW-ETH',
    'KRW-NEO',
    'KRW-MTL',
    'KRW-XRP',
    'KRW-ETC',
    'KRW-OMG',
    'KRW-SNT',
    'KRW-WAVES',
    'KRW-XEM',
    'KRW-QTUM',
    'KRW-LSK',
    'KRW-STEEM',
    'KRW-XLM',
    'KRW-ARDR',
    'KRW-ARK',
    'KRW-STORJ',
    'KRW-GRS',
    'KRW-REP',
    'KRW-ADA',
    'KRW-SBD',
    'KRW-POWR',
    'KRW-BTG',
    'KRW-ICX',
    'KRW-EOS',
    'KRW-TRX',
    'KRW-SC',
    'KRW-ONT',
    'KRW-ZIL',
    'KRW-POLYX',
    'KRW-ZRX',
    'KRW-LOOM',
    'KRW-BCH',
    'KRW-BAT',
    'KRW-IOST',
    'KRW-RFR',
    'KRW-CVC',
    'KRW-IQ',
    'KRW-IOTA',
    'KRW-HIFI',
    'KRW-ONG',
    'KRW-GAS',
    'KRW-UPP',
    'KRW-ELF',
    'KRW-KNC',
    'KRW-BSV',
    'KRW-THETA',
    'KRW-QKC',
    'KRW-BTT',
    'KRW-MOC',
    'KRW-ENJ',
    'KRW-TFUEL',
    'KRW-MANA',
    'KRW-ANKR',
    'KRW-AERGO',
    'KRW-ATOM',
    'KRW-TT',
    'KRW-CRE',
    'KRW-MBL',
    'KRW-WAXP',
    'KRW-HBAR',
    'KRW-MED',
    'KRW-MLK',
    'KRW-STPT',
    'KRW-ORBS',
    'KRW-VET',
    'KRW-CHZ',
    'KRW-STMX',
    'KRW-DKA',
    'KRW-HIVE',
    'KRW-KAVA',
    'KRW-AHT',
    'KRW-LINK',
    'KRW-XTZ',
    'KRW-BORA',
    'KRW-JST',
    'KRW-CRO',
    'KRW-TON',
    'KRW-SXP',
    'KRW-HUNT',
    'KRW-PLA',
    'KRW-DOT',
    'KRW-SRM',
    'KRW-MVL',
    'KRW-STRAX',
    'KRW-AQT',
    'KRW-GLM',
    'KRW-SSX',
    'KRW-META',
    'KRW-FCT2',
    'KRW-CBK',
    'KRW-SAND',
    'KRW-HUM',
    'KRW-DOGE',
    'KRW-STRK',
    'KRW-PUNDIX',
    'KRW-FLOW',
    'KRW-DAWN',
    'KRW-AXS',
    'KRW-STX',
    'KRW-XEC',
    'KRW-SOL',
    'KRW-MATIC',
    'KRW-AAVE',
    'KRW-1INCH',
    'KRW-ALGO',
    'KRW-NEAR',
    'KRW-AVAX',
    'KRW-T',
    'KRW-CELO',
    'KRW-GMT',
    'KRW-APT',
    'KRW-SHIB',
    'KRW-MASK',
    'KRW-ARB',
];


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveDatetime = void 0;
const resolveDatetime = (datetime) => {
    const baseTime = new Date(datetime);
    const year = baseTime.getFullYear();
    const month = baseTime.getMonth();
    const date = baseTime.getDate();
    const hour = baseTime.getHours();
    return {
        year,
        month,
        date,
        hour,
    };
};
exports.resolveDatetime = resolveDatetime;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrapService = void 0;
const common_1 = __webpack_require__(3);
const minuteCandle_service_1 = __webpack_require__(8);
let ScrapService = class ScrapService {
    constructor(minuteCandleService) {
        this.minuteCandleService = minuteCandleService;
    }
    async onApplicationBootstrap() {
        var _a, e_1, _b, _c;
        const unitList = [1, 2, 4, 8, 12, 24];
        for (let i = 0; i < 24; i++) {
            const date = new Date(2023, 3, 26, 0 + 9 + i);
            const baseTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), -5).toISOString();
            const baseTime2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() - 1).toISOString();
            await this.minuteCandleService.create(60, baseTime);
            try {
                for (var _d = true, unitList_1 = (e_1 = void 0, __asyncValues(unitList)), unitList_1_1; unitList_1_1 = await unitList_1.next(), _a = unitList_1_1.done, !_a;) {
                    _c = unitList_1_1.value;
                    _d = false;
                    try {
                        const unit = _c;
                        await this.minuteCandleService.saveRankData(unit, baseTime2);
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = unitList_1.return)) await _b.call(unitList_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
};
ScrapService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof minuteCandle_service_1.MinuteCandleService !== "undefined" && minuteCandle_service_1.MinuteCandleService) === "function" ? _a : Object])
], ScrapService);
exports.ScrapService = ScrapService;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const scrap_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(scrap_module_1.ScrapModule);
    await app.listen(process.env.SCRAP_SERVER_PORT);
}
bootstrap();

})();

/******/ })()
;