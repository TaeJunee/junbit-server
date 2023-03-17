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
const minuteCandle_module_1 = __webpack_require__(12);
const ticker_module_1 = __webpack_require__(23);
const tradeVolumeRank_module_1 = __webpack_require__(26);
const scrap_service_1 = __webpack_require__(28);
const ticker_service_1 = __webpack_require__(24);
const minuteCandle_service_1 = __webpack_require__(13);
const tradeVolumeRank_service_1 = __webpack_require__(27);
const upbit_1 = __webpack_require__(16);
const typeorm_1 = __webpack_require__(6);
const tradeVolumeRank_entity_1 = __webpack_require__(9);
const tradePriceRank_service_1 = __webpack_require__(29);
const tradePriceRank_entity_1 = __webpack_require__(11);
let ScrapModule = class ScrapModule {
};
ScrapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            typeorm_1.TypeOrmModule.forFeature([tradeVolumeRank_entity_1.TokenTradeVolumeRank, tradePriceRank_entity_1.TokenTradePriceRank]),
            database_module_1.DatabaseModule,
            minuteCandle_module_1.MinuteCandleModule,
            ticker_module_1.TickerModule,
            tradeVolumeRank_module_1.TradeVolumeRankModule,
        ],
        providers: [
            scrap_service_1.ScrapService,
            ticker_service_1.TickerService,
            minuteCandle_service_1.MinuteCandleService,
            tradeVolumeRank_service_1.TradeVolumeRankService,
            tradePriceRank_service_1.TradePriceRankService,
            upbit_1.Upbit,
        ],
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
const typeorm_1 = __webpack_require__(6);
const config_1 = __webpack_require__(4);
const typeorm_naming_strategies_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(8);
const tradeVolumeRank_entity_1 = __webpack_require__(9);
const tradePriceRank_entity_1 = __webpack_require__(11);
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'mysql',
                    host: configService.get('MYSQL_HOSTNAME'),
                    port: configService.get('MYSQL_PORT'),
                    username: configService.get('MYSQL_USERNAME'),
                    password: configService.get('MYSQL_PASSWORD'),
                    database: configService.get('MYSQL_DATABASE'),
                    entities: [tradeVolumeRank_entity_1.TokenTradeVolumeRank, tradePriceRank_entity_1.TokenTradePriceRank],
                    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
                    timezone: 'Z',
                    synchronize: true,
                }),
            }),
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

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("typeorm-naming-strategies");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 9 */
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
exports.TokenTradeVolumeRank = void 0;
const typeorm_1 = __webpack_require__(10);
let TokenTradeVolumeRank = class TokenTradeVolumeRank {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "diffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "prevDiffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "prevDayDiffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], TokenTradeVolumeRank.prototype, "market", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "volumeDiff", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], TokenTradeVolumeRank.prototype, "volumeDiffRate", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], TokenTradeVolumeRank.prototype, "datetime", void 0);
TokenTradeVolumeRank = __decorate([
    (0, typeorm_1.Entity)()
], TokenTradeVolumeRank);
exports.TokenTradeVolumeRank = TokenTradeVolumeRank;


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("typeorm");

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenTradePriceRank = void 0;
const typeorm_1 = __webpack_require__(10);
let TokenTradePriceRank = class TokenTradePriceRank {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "diffRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "prevDiffRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "prevDayDiffRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "diffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "prevDiffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "prevDayDiffRateRank", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], TokenTradePriceRank.prototype, "market", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "priceDiff", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], TokenTradePriceRank.prototype, "priceDiffRate", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], TokenTradePriceRank.prototype, "datetime", void 0);
TokenTradePriceRank = __decorate([
    (0, typeorm_1.Entity)()
], TokenTradePriceRank);
exports.TokenTradePriceRank = TokenTradePriceRank;


/***/ }),
/* 12 */
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
const mongoose_1 = __webpack_require__(8);
const minuteCandle_service_1 = __webpack_require__(13);
const minuteCandle_schema_1 = __webpack_require__(15);
const tradeRank_schema_1 = __webpack_require__(21);
const upbit_1 = __webpack_require__(16);
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
/* 13 */
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
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(14);
const minuteCandle_schema_1 = __webpack_require__(15);
const upbit_1 = __webpack_require__(16);
const sleep_1 = __webpack_require__(18);
const tokens_1 = __webpack_require__(19);
const datetime_1 = __webpack_require__(20);
const tradeRank_schema_1 = __webpack_require__(21);
const lodash_1 = __webpack_require__(22);
let MinuteCandleService = class MinuteCandleService {
    constructor(minuteCandleModel, tradeRankModel, upbit) {
        this.minuteCandleModel = minuteCandleModel;
        this.tradeRankModel = tradeRankModel;
        this.upbit = upbit;
    }
    async create(unit, count) {
        var _a, e_1, _b, _c;
        console.log(`Saving MinuteCandles`);
        let i = 1;
        try {
            for (var _d = true, krwTokens_1 = __asyncValues(tokens_1.krwTokens), krwTokens_1_1; krwTokens_1_1 = await krwTokens_1.next(), _a = krwTokens_1_1.done, !_a;) {
                _c = krwTokens_1_1.value;
                _d = false;
                try {
                    let token = _c;
                    const start = Date.now();
                    await this.upbit
                        .getMinuteCandle(unit, token.market, count)
                        .then(async (res) => {
                        var _a, e_2, _b, _c;
                        console.log(res[0].market, res[0].candle_date_time_kst);
                        const reversedResponses = res.reverse();
                        try {
                            for (var _d = true, reversedResponses_1 = __asyncValues(reversedResponses), reversedResponses_1_1; reversedResponses_1_1 = await reversedResponses_1.next(), _a = reversedResponses_1_1.done, !_a;) {
                                _c = reversedResponses_1_1.value;
                                _d = false;
                                try {
                                    let response = _c;
                                    if (reversedResponses.indexOf(response) ===
                                        reversedResponses.length - 1) {
                                    }
                                    else {
                                        await this.minuteCandleModel
                                            .findOne({
                                            market: response.market,
                                            timestamp: response.timestamp,
                                        })
                                            .then(async (res) => {
                                            if (res) {
                                                console.log('있어', res.candle_date_time_utc);
                                            }
                                            else {
                                                const tokenCandle = new this.minuteCandleModel({
                                                    market: response.market,
                                                    candle_date_time_utc: new Date(`${response.candle_date_time_utc}.000Z`),
                                                    timestamp: response.timestamp,
                                                    candle_acc_trade_price: response.candle_acc_trade_price,
                                                    candle_acc_trade_volume: response.candle_acc_trade_volume,
                                                    unit: response.unit
                                                });
                                                await tokenCandle.save();
                                            }
                                        });
                                    }
                                }
                                finally {
                                    _d = true;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (!_d && !_a && (_b = reversedResponses_1.return)) await _b.call(reversedResponses_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    })
                        .then(async () => {
                        const now = Date.now();
                        if (i % 10 === 0 && now - start < 1000) {
                            await (0, sleep_1.sleep)(1200 - (now - start));
                        }
                        i++;
                    });
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
        console.log('DONE');
    }
    async delete(unit) {
        console.log('Deleteing MinuteCandles');
        for (let i = 1; i < tokens_1.krwTokens.length + 1; i++) {
            const start = Date.now();
            const utcDate = await this.upbit.getMinuteCandle(unit, tokens_1.krwTokens[i - 1].market, 1);
            const date = new Date(`${utcDate[0].candle_date_time_utc}.000Z`);
            const newDate = new Date(date.setDate(date.getDate() - 14));
            await this.minuteCandleModel.deleteMany({
                market: tokens_1.krwTokens[i - 1].market,
                candle_date_time_utc: { $lt: newDate },
            });
            const now = Date.now();
            if (i % 10 == 0 && now - start < 1000) {
                await (0, sleep_1.sleep)(1100 - (now - start));
            }
        }
        console.log('Done');
    }
    async findByMarketAndDatetime(market, hours, datetime) {
        return await this.minuteCandleModel
            .find({
            market,
            candle_date_time_utc: { $lte: datetime },
        }, { _id: 0, __v: 0 })
            .sort({ candle_date_time_utc: -1 })
            .limit(hours * 2);
    }
    async calculate(hours, datetime) {
        var _a, e_3, _b, _c;
        let array = [];
        try {
            for (var _d = true, krwTokens_2 = __asyncValues(tokens_1.krwTokens), krwTokens_2_1; krwTokens_2_1 = await krwTokens_2.next(), _a = krwTokens_2_1.done, !_a;) {
                _c = krwTokens_2_1.value;
                _d = false;
                try {
                    let value = _c;
                    const data = await this.findByMarketAndDatetime(value.market, hours, datetime);
                    let obj = { market: data[0].market, datetime: data[0].candle_date_time_utc };
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
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = krwTokens_2.return)) await _b.call(krwTokens_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return array;
    }
    async saveRankData(hours, datetime) {
        var _a, e_4, _b, _c;
        const { year, month, date, hour } = (0, datetime_1.convertDatetime)(datetime);
        const newDatetime = new Date(year, month, date, hour).toISOString();
        const ISONewDatetime = new Date(newDatetime);
        const prevTime = new Date(year, month, date, hour - hours).toISOString();
        const ISOPrevTime = new Date(prevTime);
        const prevDay = new Date(year, month, date - 1, hour).toISOString();
        const ISOPrevDay = new Date(prevDay);
        const exist = await this.tradeRankModel
            .find({
            datetime: ISOPrevTime
        })
            .exec();
        const data = await this.calculate(hours, ISONewDatetime);
        let array = [];
        try {
            for (var _d = true, krwTokens_3 = __asyncValues(tokens_1.krwTokens), krwTokens_3_1; krwTokens_3_1 = await krwTokens_3.next(), _a = krwTokens_3_1.done, !_a;) {
                _c = krwTokens_3_1.value;
                _d = false;
                try {
                    let value = _c;
                    let obj = {};
                    const exist = await this.tradeRankModel
                        .find({
                        market: value.market,
                        datetime: ISOPrevTime
                    })
                        .exec();
                    if (exist) { }
                    else {
                        const prevData = await this.tradeRankModel
                            .findOne({
                            market: value.market, datetime: ISOPrevTime
                        })
                            .exec();
                        const prevDayData = await this.tradeRankModel
                            .findOne({
                            market: value.market, datetime: ISOPrevDay
                        })
                            .exec();
                        const sortedDataByVolumeSum = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`volumeSum${hours}H`] - a[`volumeSum${hours}H`]);
                        const sortedDataByVolumeDiffRate = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`volumeDiffRate${hours}H`] - a[`volumeDiffRate${hours}H`]);
                        const sortedDataByPriceSum = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`priceSum${hours}H`] - a[`priceSum${hours}H`]);
                        const sortedDataByPriceDiff = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`priceDiff${hours}H`] - a[`priceDiff${hours}H`]);
                        const sortedDataByPriceDiffRate = (0, lodash_1.cloneDeep)(data).sort((a, b) => b[`priceDiffRate${hours}H`] - a[`priceDiffRate${hours}H`]);
                        const indexedData = data[data.findIndex(item => item.market = value.market)];
                        obj['market'] = value.market;
                        obj['volumeSum'] = indexedData[`volumeSum${hours}H`];
                        obj['priceSum'] = indexedData[`priceSum${hours}H`];
                        obj['volumeDiff'] = indexedData[`volumeDiff${hours}H`];
                        obj['priceDiff'] = indexedData[`priceDiff${hours}H`];
                        obj['volumeDiffRate'] = indexedData[`volumeDiffRate${hours}H`];
                        obj['priceDiffRate'] = indexedData[`priceDiffRate${hours}H`];
                        obj['volumeSumRank'] = sortedDataByVolumeSum.findIndex(item => item.market === value.market) + 1;
                        obj['volumeDiffRateRank'] = sortedDataByVolumeDiffRate.findIndex(item => item.market === value.market) + 1;
                        obj['priceSumRank'] = sortedDataByPriceSum.findIndex(item => item.market === value.market) + 1;
                        obj['priceDiffRank'] = sortedDataByPriceDiff.findIndex(item => item.market === value.market) + 1;
                        obj['priceDiffRateRank'] = sortedDataByPriceDiffRate.findIndex(item => item.market === value.market) + 1;
                        obj['prevVolumeDiffRateRank'] = prevData ? prevData.volumeDiffRateRank : null;
                        obj['prevDayVolumeDiffRateRank'] = prevDayData ? prevDayData.volumeDiffRateRank : null;
                        obj['prevPriceDiffRank'] = prevData ? prevData.priceDiffRank : null;
                        obj['prevDayPriceDiffRank'] = prevDayData ? prevDayData.priceDiffRank : null;
                        obj['prevPriceDiffRateRank'] = prevData ? prevData.priceDiffRateRank : null;
                        obj['prevDayPriceDiffRateRank'] = prevDayData ? prevDayData.priceDiffRateRank : null;
                        obj['unit'] = hours;
                        obj['datetime'] = ISONewDatetime;
                        array.push(obj);
                    }
                    try {
                        await this.tradeRankModel.insertMany(array);
                    }
                    catch (e) {
                        throw new Error(e);
                    }
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = krwTokens_3.return)) await _b.call(krwTokens_3);
            }
            finally { if (e_4) throw e_4.error; }
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
/* 14 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 15 */
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
exports.MinuteCandleSchema = exports.MinuteCandle = void 0;
const mongoose_1 = __webpack_require__(8);
let MinuteCandle = class MinuteCandle {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MinuteCandle.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
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
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Upbit = void 0;
const axios_1 = __webpack_require__(17);
class Upbit {
    constructor() {
        this.baseURL = 'https://api.upbit.com/v1';
        this.options = { method: 'GET', headers: { accept: 'application/json' } };
    }
    async getMinuteCandle(unit, market, count = 10) {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/candles/minutes/${unit}?market=${market}&count=${count}`, this.options);
            return response.data;
        }
        catch (e) {
            throw Error(e);
        }
    }
    async getTicker(markets) {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/ticker?markets=${markets}`, this.options);
            return response.data;
        }
        catch (e) {
            throw Error(e);
        }
    }
}
exports.Upbit = Upbit;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.sleep = sleep;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.markets = exports.krwTokens = void 0;
exports.krwTokens = [
    {
        market: 'KRW-BTC',
        kr_name: '비트코인',
        en_name: 'bitcoin',
    },
    {
        market: 'KRW-ETH',
        kr_name: '이더리움',
        en_name: 'ethereum',
    },
    {
        market: 'KRW-NEO',
        kr_name: '네오',
        en_name: 'neo',
    },
    {
        market: 'KRW-MTL',
        kr_name: '메탈',
        en_name: 'metal',
    },
    {
        market: 'KRW-XRP',
        kr_name: '리플',
        en_name: 'ripple',
    },
    {
        market: 'KRW-ETC',
        kr_name: '이더리움클래식',
        en_name: 'ethereum_classic',
    },
    {
        market: 'KRW-OMG',
        kr_name: '오미세고',
        en_name: 'omisego',
    },
    {
        market: 'KRW-SNT',
        kr_name: '스테이터스네트워크토큰',
        en_name: 'status_network_token',
    },
    {
        market: 'KRW-WAVES',
        kr_name: '웨이브',
        en_name: 'waves',
    },
    {
        market: 'KRW-XEM',
        kr_name: '넴',
        en_name: 'nem',
    },
    {
        market: 'KRW-QTUM',
        kr_name: '퀀텀',
        en_name: 'qtum',
    },
    {
        market: 'KRW-LSK',
        kr_name: '리스크',
        en_name: 'lisk',
    },
    {
        market: 'KRW-STEEM',
        kr_name: '스팀',
        en_name: 'steem',
    },
    {
        market: 'KRW-XLM',
        kr_name: '스텔라루멘',
        en_name: 'lumen',
    },
    {
        market: 'KRW-ARDR',
        kr_name: '아더',
        en_name: 'ardor',
    },
    {
        market: 'KRW-ARK',
        kr_name: '아크',
        en_name: 'ark',
    },
    {
        market: 'KRW-STORJ',
        kr_name: '스토리지',
        en_name: 'storj',
    },
    {
        market: 'KRW-GRS',
        kr_name: '그로스톨코인',
        en_name: 'groestlcoin',
    },
    {
        market: 'KRW-REP',
        kr_name: '어거',
        en_name: 'augur',
    },
    {
        market: 'KRW-ADA',
        kr_name: '에이다',
        en_name: 'ada',
    },
    {
        market: 'KRW-SBD',
        kr_name: '스팀달러',
        en_name: 'steemdollars',
    },
    {
        market: 'KRW-POWR',
        kr_name: '파워렛저',
        en_name: 'power_ledger',
    },
    {
        market: 'KRW-BTG',
        kr_name: '비트코인골드',
        en_name: 'bitcoin_gold',
    },
    {
        market: 'KRW-ICX',
        kr_name: '아이콘',
        en_name: 'icon',
    },
    {
        market: 'KRW-EOS',
        kr_name: '이오스',
        en_name: 'eos',
    },
    {
        market: 'KRW-TRX',
        kr_name: '트론',
        en_name: 'tron',
    },
    {
        market: 'KRW-SC',
        kr_name: '시아코인',
        en_name: 'siacoin',
    },
    {
        market: 'KRW-ONT',
        kr_name: '온톨로지',
        en_name: 'ontology',
    },
    {
        market: 'KRW-ZIL',
        kr_name: '질리카',
        en_name: 'zilliqa',
    },
    {
        market: 'KRW-POLYX',
        kr_name: '폴리매쉬',
        en_name: 'polymesh',
    },
    {
        market: 'KRW-ZRX',
        kr_name: '제로엑스',
        en_name: '0x_protocol',
    },
    {
        market: 'KRW-LOOM',
        kr_name: '룸네트워크',
        en_name: 'loom_network',
    },
    {
        market: 'KRW-BCH',
        kr_name: '비트코인캐시',
        en_name: 'bitcoin_cash',
    },
    {
        market: 'KRW-BAT',
        kr_name: '베이직어텐션토큰',
        en_name: 'basic_attention_token',
    },
    {
        market: 'KRW-IOST',
        kr_name: '아이오에스티',
        en_name: 'iost',
    },
    {
        market: 'KRW-RFR',
        kr_name: '리퍼리움',
        en_name: 'refereum',
    },
    {
        market: 'KRW-CVC',
        kr_name: '시빅',
        en_name: 'civic',
    },
    {
        market: 'KRW-IQ',
        kr_name: '아이큐',
        en_name: 'iq_wiki',
    },
    {
        market: 'KRW-IOTA',
        kr_name: '아이오타',
        en_name: 'iota',
    },
    {
        market: 'KRW-HIFI',
        kr_name: '하이파이',
        en_name: 'hifi_finance',
    },
    {
        market: 'KRW-ONG',
        kr_name: '온톨로지가스',
        en_name: 'ong',
    },
    {
        market: 'KRW-GAS',
        kr_name: '가스',
        en_name: 'gas',
    },
    {
        market: 'KRW-UPP',
        kr_name: '센티넬프로토콜',
        en_name: 'sentinel_protocol',
    },
    {
        market: 'KRW-ELF',
        kr_name: '엘프',
        en_name: 'aelf',
    },
    {
        market: 'KRW-KNC',
        kr_name: '카이버네트워크',
        en_name: 'kyber_network',
    },
    {
        market: 'KRW-BSV',
        kr_name: '비트코인에스브이',
        en_name: 'bitcoin_sv',
    },
    {
        market: 'KRW-THETA',
        kr_name: '쎄타토큰',
        en_name: 'theta_token',
    },
    {
        market: 'KRW-QKC',
        kr_name: '쿼크체인',
        en_name: 'quarkchain',
    },
    {
        market: 'KRW-BTT',
        kr_name: '비트토렌트',
        en_name: 'bittorrent',
    },
    {
        market: 'KRW-MOC',
        kr_name: '모스코인',
        en_name: 'moss_coin',
    },
    {
        market: 'KRW-ENJ',
        kr_name: '엔진코인',
        en_name: 'enjin',
    },
    {
        market: 'KRW-TFUEL',
        kr_name: '쎄타퓨엘',
        en_name: 'theta_fuel',
    },
    {
        market: 'KRW-MANA',
        kr_name: '디센트럴랜드',
        en_name: 'decentraland',
    },
    {
        market: 'KRW-ANKR',
        kr_name: '앵커',
        en_name: 'ankr',
    },
    {
        market: 'KRW-AERGO',
        kr_name: '아르고',
        en_name: 'aergo',
    },
    {
        market: 'KRW-ATOM',
        kr_name: '코스모스',
        en_name: 'cosmos',
    },
    {
        market: 'KRW-TT',
        kr_name: '썬더코어',
        en_name: 'thundercore',
    },
    {
        market: 'KRW-CRE',
        kr_name: '캐리프로토콜',
        en_name: 'carry_protocol',
    },
    {
        market: 'KRW-MBL',
        kr_name: '무비블록',
        en_name: 'moviebloc',
    },
    {
        market: 'KRW-WAXP',
        kr_name: '왁스',
        en_name: 'wax',
    },
    {
        market: 'KRW-HBAR',
        kr_name: '헤데라',
        en_name: 'hedera',
    },
    {
        market: 'KRW-MED',
        kr_name: '메디블록',
        en_name: 'medibloc',
    },
    {
        market: 'KRW-MLK',
        kr_name: '밀크',
        en_name: 'mil_k',
    },
    {
        market: 'KRW-STPT',
        kr_name: '에스티피',
        en_name: 'standard_tokenization_protocol',
    },
    {
        market: 'KRW-ORBS',
        kr_name: '오브스',
        en_name: 'orbs',
    },
    {
        market: 'KRW-VET',
        kr_name: '비체인',
        en_name: 'vechain',
    },
    {
        market: 'KRW-CHZ',
        kr_name: '칠리즈',
        en_name: 'chiliz',
    },
    {
        market: 'KRW-STMX',
        kr_name: '스톰엑스',
        en_name: 'stormx',
    },
    {
        market: 'KRW-DKA',
        kr_name: '디카르고',
        en_name: 'dkargo',
    },
    {
        market: 'KRW-HIVE',
        kr_name: '하이브',
        en_name: 'hive',
    },
    {
        market: 'KRW-KAVA',
        kr_name: '카바',
        en_name: 'kava',
    },
    {
        market: 'KRW-AHT',
        kr_name: '아하토큰',
        en_name: 'ahatoken',
    },
    {
        market: 'KRW-LINK',
        kr_name: '체인링크',
        en_name: 'chainlink',
    },
    {
        market: 'KRW-XTZ',
        kr_name: '테조스',
        en_name: 'tezos',
    },
    {
        market: 'KRW-BORA',
        kr_name: '보라',
        en_name: 'bora',
    },
    {
        market: 'KRW-JST',
        kr_name: '저스트',
        en_name: 'just',
    },
    {
        market: 'KRW-CRO',
        kr_name: '크로노스',
        en_name: 'cronos',
    },
    {
        market: 'KRW-TON',
        kr_name: '톤',
        en_name: 'ton',
    },
    {
        market: 'KRW-SXP',
        kr_name: '솔라',
        en_name: 'sxp',
    },
    {
        market: 'KRW-HUNT',
        kr_name: '헌트',
        en_name: 'hunt',
    },
    {
        market: 'KRW-PLA',
        kr_name: '플레이댑',
        en_name: 'playdapp',
    },
    {
        market: 'KRW-DOT',
        kr_name: '폴카닷',
        en_name: 'polkadot',
    },
    {
        market: 'KRW-SRM',
        kr_name: '세럼',
        en_name: 'serum',
    },
    {
        market: 'KRW-MVL',
        kr_name: '엠블',
        en_name: 'mvl',
    },
    {
        market: 'KRW-STRAX',
        kr_name: '스트라티스',
        en_name: 'stratis',
    },
    {
        market: 'KRW-AQT',
        kr_name: '알파쿼크',
        en_name: 'alpha_quark_token',
    },
    {
        market: 'KRW-GLM',
        kr_name: '골렘',
        en_name: 'golem',
    },
    {
        market: 'KRW-SSX',
        kr_name: '썸씽',
        en_name: 'somesing',
    },
    {
        market: 'KRW-META',
        kr_name: '메타디움',
        en_name: 'metadium',
    },
    {
        market: 'KRW-FCT2',
        kr_name: '피르마체인',
        en_name: 'firmachain',
    },
    {
        market: 'KRW-CBK',
        kr_name: '코박토큰',
        en_name: 'cobak_token',
    },
    {
        market: 'KRW-SAND',
        kr_name: '샌드박스',
        en_name: 'the_sandbox',
    },
    {
        market: 'KRW-HUM',
        kr_name: '휴먼스케이프',
        en_name: 'humanscape',
    },
    {
        market: 'KRW-DOGE',
        kr_name: '도지코인',
        en_name: 'dogecoin',
    },
    {
        market: 'KRW-STRK',
        kr_name: '스트라이크',
        en_name: 'strike',
    },
    {
        market: 'KRW-PUNDIX',
        kr_name: '펀디엑스',
        en_name: 'pundi_x',
    },
    {
        market: 'KRW-FLOW',
        kr_name: '플로우',
        en_name: 'flow',
    },
    {
        market: 'KRW-DAWN',
        kr_name: '던프로토콜',
        en_name: 'dawn_protocol',
    },
    {
        market: 'KRW-AXS',
        kr_name: '엑시인피니티',
        en_name: 'axie_infinity',
    },
    {
        market: 'KRW-STX',
        kr_name: '스택스',
        en_name: 'stacks',
    },
    {
        market: 'KRW-XEC',
        kr_name: '이캐시',
        en_name: 'ecash',
    },
    {
        market: 'KRW-SOL',
        kr_name: '솔라나',
        en_name: 'solana',
    },
    {
        market: 'KRW-MATIC',
        kr_name: '폴리곤',
        en_name: 'polygon',
    },
    {
        market: 'KRW-NU',
        kr_name: '누사이퍼',
        en_name: 'nucypher',
    },
    {
        market: 'KRW-AAVE',
        kr_name: '에이브',
        en_name: 'aave',
    },
    {
        market: 'KRW-1INCH',
        kr_name: '1인치네트워크',
        en_name: '1inch_network',
    },
    {
        market: 'KRW-ALGO',
        kr_name: '알고랜드',
        en_name: 'algorand',
    },
    {
        market: 'KRW-NEAR',
        kr_name: '니어프로토콜',
        en_name: 'near_protocol',
    },
    {
        market: 'KRW-AVAX',
        kr_name: '아발란체',
        en_name: 'avalanche',
    },
    {
        market: 'KRW-T',
        kr_name: '쓰레스홀드',
        en_name: 'threshold',
    },
    {
        market: 'KRW-CELO',
        kr_name: '셀로',
        en_name: 'celo',
    },
    {
        market: 'KRW-GMT',
        kr_name: '스테픈',
        en_name: 'stepn',
    },
    {
        market: 'KRW-APT',
        kr_name: '앱토스',
        en_name: 'aptos',
    },
    {
        market: 'KRW-SHIB',
        kr_name: '시바이누',
        en_name: 'shiba_inu',
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
    'KRW-NU',
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
];


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertDatetime = void 0;
const convertDatetime = (datetime) => {
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const date = datetime.getDate();
    const hour = datetime.getHours();
    return {
        year,
        month,
        date,
        hour,
    };
};
exports.convertDatetime = convertDatetime;


/***/ }),
/* 21 */
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
exports.TradeRankSchema = exports.TradeRank = void 0;
const mongoose_1 = __webpack_require__(8);
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
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
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
/* 22 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
const ticker_service_1 = __webpack_require__(24);
const ticker_schema_1 = __webpack_require__(25);
const upbit_1 = __webpack_require__(16);
let TickerModule = class TickerModule {
};
TickerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: ticker_schema_1.Ticker.name, schema: ticker_schema_1.TickerSchema }]),
        ],
        providers: [ticker_service_1.TickerService, upbit_1.Upbit],
        exports: [ticker_service_1.TickerService, mongoose_1.MongooseModule],
    })
], TickerModule);
exports.TickerModule = TickerModule;


/***/ }),
/* 24 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(14);
const ticker_schema_1 = __webpack_require__(25);
const upbit_1 = __webpack_require__(16);
const tokens_1 = __webpack_require__(19);
let TickerService = class TickerService {
    constructor(tickerModel, upbit) {
        this.tickerModel = tickerModel;
        this.upbit = upbit;
    }
    async create() {
        const responses = await this.upbit.getTicker(tokens_1.markets.toString());
        const date = new Date();
        const currentTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
        console.log('Saving Tickers...');
        for (let item of responses) {
            const ticker = new this.tickerModel();
            ticker.market = item.market;
            ticker.acc_trade_price_24h = item.acc_trade_price_24h;
            ticker.acc_trade_volume_24h = item.acc_trade_volume_24h;
            ticker.created_at = currentTime;
            await ticker.save();
        }
        console.log('Done');
    }
    async delete() {
        const time = new Date('2023-02-14T07:00:00.000+00:00');
        console.log(time);
        const result = await this.tickerModel.find({ created_at: time });
        console.log(result);
    }
    async find() { }
};
TickerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ticker_schema_1.Ticker.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof upbit_1.Upbit !== "undefined" && upbit_1.Upbit) === "function" ? _b : Object])
], TickerService);
exports.TickerService = TickerService;


/***/ }),
/* 25 */
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
exports.TickerSchema = exports.Ticker = void 0;
const mongoose_1 = __webpack_require__(8);
let Ticker = class Ticker {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ticker.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "acc_trade_price_24h", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "acc_trade_volume_24h", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Ticker.prototype, "created_at", void 0);
Ticker = __decorate([
    (0, mongoose_1.Schema)()
], Ticker);
exports.Ticker = Ticker;
exports.TickerSchema = mongoose_1.SchemaFactory.createForClass(Ticker);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeVolumeRankModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(8);
const minuteCandle_module_1 = __webpack_require__(12);
const tradeVolumeRank_entity_1 = __webpack_require__(9);
const minuteCandle_schema_1 = __webpack_require__(15);
const tradeVolumeRank_service_1 = __webpack_require__(27);
const minuteCandle_service_1 = __webpack_require__(13);
const upbit_1 = __webpack_require__(16);
let TradeVolumeRankModule = class TradeVolumeRankModule {
};
TradeVolumeRankModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tradeVolumeRank_entity_1.TokenTradeVolumeRank]),
            mongoose_1.MongooseModule.forFeature([
                { name: minuteCandle_schema_1.MinuteCandle.name, schema: minuteCandle_schema_1.MinuteCandleSchema },
            ]),
            minuteCandle_module_1.MinuteCandleModule,
        ],
        providers: [tradeVolumeRank_service_1.TradeVolumeRankService, minuteCandle_service_1.MinuteCandleService, upbit_1.Upbit],
    })
], TradeVolumeRankModule);
exports.TradeVolumeRankModule = TradeVolumeRankModule;


/***/ }),
/* 27 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeVolumeRankService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(10);
const tradeVolumeRank_entity_1 = __webpack_require__(9);
const minuteCandle_service_1 = __webpack_require__(13);
const datetime_1 = __webpack_require__(20);
let TradeVolumeRankService = class TradeVolumeRankService {
    constructor(tokenTradeVolumeRankRepsitory, minuteCandleService) {
        this.tokenTradeVolumeRankRepsitory = tokenTradeVolumeRankRepsitory;
        this.minuteCandleService = minuteCandleService;
    }
    async delete(hours, datetime) {
        const { year, month, date, hour } = (0, datetime_1.convertDatetime)(datetime);
        const baseTime = new Date(year, month, date - 7, hour).toISOString();
        const ISOBaseTime = new Date(baseTime);
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        await this.tokenTradeVolumeRankRepsitory
            .createQueryBuilder()
            .delete()
            .from(`trade_volume_rank_${hours}h`)
            .where('datetime < :datetime', { datetime: ISOBaseTime })
            .execute();
    }
    async findRankByDatetime(market, hours, datetime) {
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        return await this.tokenTradeVolumeRankRepsitory.findOne({
            select: { diffRateRank: true },
            where: { market: market, datetime: datetime },
        });
    }
    async findIdByDatetime(market, hours, datetime) {
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        return await this.tokenTradeVolumeRankRepsitory.findOne({
            select: { id: true },
            where: { market: market, datetime: datetime },
        });
    }
};
TradeVolumeRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tradeVolumeRank_entity_1.TokenTradeVolumeRank)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof minuteCandle_service_1.MinuteCandleService !== "undefined" && minuteCandle_service_1.MinuteCandleService) === "function" ? _b : Object])
], TradeVolumeRankService);
exports.TradeVolumeRankService = TradeVolumeRankService;


/***/ }),
/* 28 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrapService = void 0;
const common_1 = __webpack_require__(3);
const minuteCandle_service_1 = __webpack_require__(13);
const tradeVolumeRank_service_1 = __webpack_require__(27);
const ticker_service_1 = __webpack_require__(24);
const tradePriceRank_service_1 = __webpack_require__(29);
let ScrapService = class ScrapService {
    constructor(tickerService, minuteCandleService, tradeVolumeRankService, tradePriceRankService) {
        this.tickerService = tickerService;
        this.minuteCandleService = minuteCandleService;
        this.tradeVolumeRankService = tradeVolumeRankService;
        this.tradePriceRankService = tradePriceRankService;
    }
    async onApplicationBootstrap() {
        console.log('start');
        for (let i = 68; i < 69; i++) {
            const baseTime = new Date(2023, 2, 15, i + 1 + 9);
            console.log(baseTime);
            await this.minuteCandleService.saveRankData(1, baseTime);
            await this.minuteCandleService.saveRankData(2, baseTime);
            await this.minuteCandleService.saveRankData(4, baseTime);
            await this.minuteCandleService.saveRankData(8, baseTime);
            await this.minuteCandleService.saveRankData(12, baseTime);
            await this.minuteCandleService.saveRankData(24, baseTime);
        }
        console.log('done');
    }
};
ScrapService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof ticker_service_1.TickerService !== "undefined" && ticker_service_1.TickerService) === "function" ? _a : Object, typeof (_b = typeof minuteCandle_service_1.MinuteCandleService !== "undefined" && minuteCandle_service_1.MinuteCandleService) === "function" ? _b : Object, typeof (_c = typeof tradeVolumeRank_service_1.TradeVolumeRankService !== "undefined" && tradeVolumeRank_service_1.TradeVolumeRankService) === "function" ? _c : Object, typeof (_d = typeof tradePriceRank_service_1.TradePriceRankService !== "undefined" && tradePriceRank_service_1.TradePriceRankService) === "function" ? _d : Object])
], ScrapService);
exports.ScrapService = ScrapService;


/***/ }),
/* 29 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradePriceRankService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(10);
const tradePriceRank_entity_1 = __webpack_require__(11);
const minuteCandle_service_1 = __webpack_require__(13);
const datetime_1 = __webpack_require__(20);
let TradePriceRankService = class TradePriceRankService {
    constructor(tokenTradePriceRankRepsitory, minuteCandleService) {
        this.tokenTradePriceRankRepsitory = tokenTradePriceRankRepsitory;
        this.minuteCandleService = minuteCandleService;
    }
    async delete(hours, datetime) {
        const { year, month, date, hour } = (0, datetime_1.convertDatetime)(datetime);
        const baseTime = new Date(year, month, date - 7, hour).toISOString();
        const ISOBaseTime = new Date(baseTime);
        this.tokenTradePriceRankRepsitory.metadata.tablePath = `trade_price_rank_${hours}h`;
        await this.tokenTradePriceRankRepsitory
            .createQueryBuilder()
            .delete()
            .from(`trade_price_rank_${hours}h`)
            .where('datetime < :datetime', { datetime: ISOBaseTime })
            .execute();
    }
    async findRankByDatetime(market, hours, datetime, type) {
        this.tokenTradePriceRankRepsitory.metadata.tablePath = `trade_price_rank_${hours}h`;
        if (type === 'DIFF_RATE') {
            return (await this.tokenTradePriceRankRepsitory.findOne({
                select: { diffRateRank: true },
                where: { market: market, datetime: datetime },
            }));
        }
        else if (type === 'DIFF') {
            return (await this.tokenTradePriceRankRepsitory.findOne({
                select: { diffRank: true },
                where: { market: market, datetime: datetime },
            }));
        }
    }
    async findIdByDatetime(market, hours, datetime) {
        this.tokenTradePriceRankRepsitory.metadata.tablePath = `trade_price_rank_${hours}h`;
        return await this.tokenTradePriceRankRepsitory.findOne({
            select: { id: true },
            where: { market: market, datetime: datetime },
        });
    }
};
TradePriceRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tradePriceRank_entity_1.TokenTradePriceRank)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof minuteCandle_service_1.MinuteCandleService !== "undefined" && minuteCandle_service_1.MinuteCandleService) === "function" ? _b : Object])
], TradePriceRankService);
exports.TradePriceRankService = TradePriceRankService;


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