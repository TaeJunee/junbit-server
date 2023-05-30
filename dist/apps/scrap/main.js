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
const scrap_service_1 = __webpack_require__(17);
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
const datetime_1 = __webpack_require__(15);
const lodash_1 = __webpack_require__(16);
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
        const tokens = await this.upbit.getAllTokens();
        const krwTokens = tokens.filter((value) => 'KRW' === value.market.split('_')[0]);
        try {
            for (var _d = true, krwTokens_1 = __asyncValues(krwTokens), krwTokens_1_1; krwTokens_1_1 = await krwTokens_1.next(), _a = krwTokens_1_1.done, !_a;) {
                _c = krwTokens_1_1.value;
                _d = false;
                try {
                    const token = _c;
                    const start = Date.now();
                    try {
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
                    }
                    catch (_e) {
                        continue;
                    }
                    finally {
                        const now = Date.now();
                        if (i % 10 === 0 && now - start < 1000) {
                            await (0, sleep_1.sleep)(1200 - (now - start));
                        }
                        if (i === 115 && now - start < 1000) {
                            await (0, sleep_1.sleep)(1200 - (now - start));
                        }
                        i++;
                    }
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
        const tokens = await this.upbit.getAllTokens();
        const krwTokens = tokens.filter((value) => 'KRW' === value.market.split('-')[0]);
        console.log(krwTokens);
        return;
        try {
            for (var _d = true, krwTokens_2 = __asyncValues(krwTokens), krwTokens_2_1; krwTokens_2_1 = await krwTokens_2.next(), _a = krwTokens_2_1.done, !_a;) {
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
    async getAllTokens() {
        const response = await axios_1.default.get(`${this.BASE_URL}/market/all?isDetails=false`, this.options);
        return response.data;
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
/* 16 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 17 */
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
        this.minuteCandleService.calculateSum(1, 'ㅗ몸');
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