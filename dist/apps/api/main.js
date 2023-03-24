/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/api.controller.ts":
/*!****************************************!*\
  !*** ./apps/api/src/api.controller.ts ***!
  \****************************************/
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
exports.ApiController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_service_1 = __webpack_require__(/*! ./api.service */ "./apps/api/src/api.service.ts");
let ApiController = class ApiController {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getHello() {
        return this.apiService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ApiController.prototype, "getHello", null);
ApiController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof api_service_1.ApiService !== "undefined" && api_service_1.ApiService) === "function" ? _a : Object])
], ApiController);
exports.ApiController = ApiController;


/***/ }),

/***/ "./apps/api/src/api.module.ts":
/*!************************************!*\
  !*** ./apps/api/src/api.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const database_module_1 = __webpack_require__(/*! @lib/config/database/database.module */ "./libs/config/src/database/database.module.ts");
const tradeVolumeRank_module_1 = __webpack_require__(/*! ./tradeVolumeRank/tradeVolumeRank.module */ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.module.ts");
const tradePriceRank_module_1 = __webpack_require__(/*! ./tradePriceRank/tradePriceRank.module */ "./apps/api/src/tradePriceRank/tradePriceRank.module.ts");
const chart_module_1 = __webpack_require__(/*! ./chart/chart.module */ "./apps/api/src/chart/chart.module.ts");
const api_controller_1 = __webpack_require__(/*! ./api.controller */ "./apps/api/src/api.controller.ts");
const api_service_1 = __webpack_require__(/*! ./api.service */ "./apps/api/src/api.service.ts");
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            database_module_1.DatabaseModule,
            tradeVolumeRank_module_1.TradeVolumeRankModule,
            tradePriceRank_module_1.TradePriceRankModule,
            chart_module_1.ChartModule,
        ],
        controllers: [api_controller_1.ApiController],
        providers: [api_service_1.ApiService],
    })
], ApiModule);
exports.ApiModule = ApiModule;


/***/ }),

/***/ "./apps/api/src/api.service.ts":
/*!*************************************!*\
  !*** ./apps/api/src/api.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ApiService = class ApiService {
    getHello() {
        return 'Hello World!';
    }
};
ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);
exports.ApiService = ApiService;


/***/ }),

/***/ "./apps/api/src/chart/chart.controller.ts":
/*!************************************************!*\
  !*** ./apps/api/src/chart/chart.controller.ts ***!
  \************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chart_service_1 = __webpack_require__(/*! ./chart.service */ "./apps/api/src/chart/chart.service.ts");
let ChartController = class ChartController {
    constructor(chartService) {
        this.chartService = chartService;
    }
    findTokenVolumeRankByDatetime(market, hours, datetime) {
        return this.chartService.findTokenVolumeRankByDatetime(market, +hours, datetime);
    }
    findTokenPriceRankByDatetime(market, hours, datetime) {
        return this.chartService.findTokenPriceRankByDatetime(market, +hours, datetime);
    }
};
__decorate([
    (0, common_1.Get)('chart/volume'),
    __param(0, (0, common_1.Query)('market')),
    __param(1, (0, common_1.Query)('unit')),
    __param(2, (0, common_1.Query)('datetime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ChartController.prototype, "findTokenVolumeRankByDatetime", null);
__decorate([
    (0, common_1.Get)('chart/price'),
    __param(0, (0, common_1.Query)('market')),
    __param(1, (0, common_1.Query)('unit')),
    __param(2, (0, common_1.Query)('datetime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ChartController.prototype, "findTokenPriceRankByDatetime", null);
ChartController = __decorate([
    (0, common_1.Controller)('token'),
    __metadata("design:paramtypes", [typeof (_a = typeof chart_service_1.ChartService !== "undefined" && chart_service_1.ChartService) === "function" ? _a : Object])
], ChartController);
exports.ChartController = ChartController;


/***/ }),

/***/ "./apps/api/src/chart/chart.module.ts":
/*!********************************************!*\
  !*** ./apps/api/src/chart/chart.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const tradeRank_schema_1 = __webpack_require__(/*! @lib/schemas/tradeRank.schema */ "./libs/schemas/src/tradeRank.schema.ts");
const chart_controller_1 = __webpack_require__(/*! ./chart.controller */ "./apps/api/src/chart/chart.controller.ts");
const chart_service_1 = __webpack_require__(/*! ./chart.service */ "./apps/api/src/chart/chart.service.ts");
let ChartModule = class ChartModule {
};
ChartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: tradeRank_schema_1.TradeRank.name, schema: tradeRank_schema_1.TradeRankSchema },
            ]),
        ],
        controllers: [chart_controller_1.ChartController],
        providers: [chart_service_1.ChartService],
    })
], ChartModule);
exports.ChartModule = ChartModule;


/***/ }),

/***/ "./apps/api/src/chart/chart.service.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/chart/chart.service.ts ***!
  \*********************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const tradeRank_schema_1 = __webpack_require__(/*! @lib/schemas/tradeRank.schema */ "./libs/schemas/src/tradeRank.schema.ts");
const datetime_1 = __webpack_require__(/*! @lib/utils/datetime */ "./libs/utils/src/datetime.ts");
let ChartService = class ChartService {
    constructor(tradeRankModel) {
        this.tradeRankModel = tradeRankModel;
    }
    async findTokenVolumeRankByDatetime(market, hours, datetime) {
        const dateArray = [];
        const { year, month, date, hour } = (0, datetime_1.resolveDatetime)(datetime);
        for (let i = 0; i < 24 * hours + 1; i += hours) {
            const tempDate = new Date(year, month, date, hour - i).toISOString();
            dateArray.push(tempDate);
        }
        const data = await this.tradeRankModel
            .find({
            market,
            unit: hours,
            datetime: { $in: dateArray },
        }, {
            _id: 0,
            unit: 1,
            market: 1,
            datetime: 1,
            volumeSum: 1,
            volumeSumRank: 1,
            volumeDiffRateRank: 1,
        })
            .sort({ datetime: -1 })
            .limit(24)
            .exec();
        return { payload: data };
    }
    async findTokenPriceRankByDatetime(market, hours, datetime) {
        const dateArray = [];
        const { year, month, date, hour } = (0, datetime_1.resolveDatetime)(datetime);
        for (let i = 0; i < 24 * hours + 1; i += hours) {
            const tempDate = new Date(year, month, date, hour - i).toISOString();
            dateArray.push(tempDate);
        }
        const data = await this.tradeRankModel
            .find({
            market,
            unit: hours,
            datetime: { $in: dateArray },
        }, {
            _id: 0,
            unit: 1,
            market: 1,
            datetime: 1,
            priceSum: 1,
            priceSumRank: 1,
            priceDiffRank: 1,
            priceDiffRateRank: 1,
        })
            .sort({ datetime: -1 })
            .limit(24)
            .exec();
        return { payload: data };
    }
};
ChartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tradeRank_schema_1.TradeRank.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ChartService);
exports.ChartService = ChartService;


/***/ }),

/***/ "./apps/api/src/tradePriceRank/tradePriceRank.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/tradePriceRank/tradePriceRank.controller.ts ***!
  \******************************************************************/
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
exports.TradePriceRankController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tradePriceRank_service_1 = __webpack_require__(/*! ./tradePriceRank.service */ "./apps/api/src/tradePriceRank/tradePriceRank.service.ts");
let TradePriceRankController = class TradePriceRankController {
    constructor(tradePriceRankService) {
        this.tradePriceRankService = tradePriceRankService;
    }
    findRankByDatetime(hours, datetime) {
        return this.tradePriceRankService.findRankByDatetime(hours, datetime);
    }
};
__decorate([
    (0, common_1.Get)('trade-price-rank'),
    __param(0, (0, common_1.Query)('unit')),
    __param(1, (0, common_1.Query)('datetime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TradePriceRankController.prototype, "findRankByDatetime", null);
TradePriceRankController = __decorate([
    (0, common_1.Controller)('token'),
    __metadata("design:paramtypes", [typeof (_a = typeof tradePriceRank_service_1.TradePriceRankService !== "undefined" && tradePriceRank_service_1.TradePriceRankService) === "function" ? _a : Object])
], TradePriceRankController);
exports.TradePriceRankController = TradePriceRankController;


/***/ }),

/***/ "./apps/api/src/tradePriceRank/tradePriceRank.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/tradePriceRank/tradePriceRank.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradePriceRankModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const tradeRank_schema_1 = __webpack_require__(/*! @lib/schemas/tradeRank.schema */ "./libs/schemas/src/tradeRank.schema.ts");
const tradePriceRank_controller_1 = __webpack_require__(/*! ./tradePriceRank.controller */ "./apps/api/src/tradePriceRank/tradePriceRank.controller.ts");
const tradePriceRank_service_1 = __webpack_require__(/*! ./tradePriceRank.service */ "./apps/api/src/tradePriceRank/tradePriceRank.service.ts");
let TradePriceRankModule = class TradePriceRankModule {
};
TradePriceRankModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: tradeRank_schema_1.TradeRank.name, schema: tradeRank_schema_1.TradeRankSchema },
            ]),
        ],
        controllers: [tradePriceRank_controller_1.TradePriceRankController],
        providers: [tradePriceRank_service_1.TradePriceRankService],
    })
], TradePriceRankModule);
exports.TradePriceRankModule = TradePriceRankModule;


/***/ }),

/***/ "./apps/api/src/tradePriceRank/tradePriceRank.service.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/tradePriceRank/tradePriceRank.service.ts ***!
  \***************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradePriceRankService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const tradeRank_schema_1 = __webpack_require__(/*! @lib/schemas/tradeRank.schema */ "./libs/schemas/src/tradeRank.schema.ts");
let TradePriceRankService = class TradePriceRankService {
    constructor(tradeRankModel) {
        this.tradeRankModel = tradeRankModel;
    }
    async findRankByDatetime(hours, datetime) {
        const data = await this.tradeRankModel
            .find({ unit: hours, datetime }, {
            _id: 0,
            unit: 1,
            market: 1,
            datetime: 1,
            priceDiff: 1,
            priceDiffRate: 1,
            priceDiffRank: 1,
            priceDiffRateRank: 1,
            prevPriceDiffRank: 1,
            prevPriceDiffRateRank: 1,
            prevDayPriceDiffRank: 1,
            prevDayPriceDiffRateRank: 1,
        })
            .exec();
        return { payload: data };
    }
};
TradePriceRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tradeRank_schema_1.TradeRank.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TradePriceRankService);
exports.TradePriceRankService = TradePriceRankService;


/***/ }),

/***/ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/tradeVolumeRank/tradeVolumeRank.controller.ts ***!
  \********************************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeVolumeRankController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tradeVolumeRank_service_1 = __webpack_require__(/*! ./tradeVolumeRank.service */ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.service.ts");
let TradeVolumeRankController = class TradeVolumeRankController {
    constructor(tradeVolumeRankService) {
        this.tradeVolumeRankService = tradeVolumeRankService;
    }
    findRankByDatetime(hours, datetime) {
        return this.tradeVolumeRankService.findRankByDatetime(hours, datetime);
    }
};
__decorate([
    (0, common_1.Get)('trade-volume-rank'),
    __param(0, (0, common_1.Query)('unit')),
    __param(1, (0, common_1.Query)('datetime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof HoursType !== "undefined" && HoursType) === "function" ? _b : Object, typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TradeVolumeRankController.prototype, "findRankByDatetime", null);
TradeVolumeRankController = __decorate([
    (0, common_1.Controller)('token'),
    __metadata("design:paramtypes", [typeof (_a = typeof tradeVolumeRank_service_1.TradeVolumeRankService !== "undefined" && tradeVolumeRank_service_1.TradeVolumeRankService) === "function" ? _a : Object])
], TradeVolumeRankController);
exports.TradeVolumeRankController = TradeVolumeRankController;


/***/ }),

/***/ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.module.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/tradeVolumeRank/tradeVolumeRank.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeVolumeRankModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const tradeRank_schema_1 = __webpack_require__(/*! @lib/schemas/tradeRank.schema */ "./libs/schemas/src/tradeRank.schema.ts");
const tradeVolumeRank_controller_1 = __webpack_require__(/*! ./tradeVolumeRank.controller */ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.controller.ts");
const tradeVolumeRank_service_1 = __webpack_require__(/*! ./tradeVolumeRank.service */ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.service.ts");
let TradeVolumeRankModule = class TradeVolumeRankModule {
};
TradeVolumeRankModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: tradeRank_schema_1.TradeRank.name, schema: tradeRank_schema_1.TradeRankSchema },
            ]),
        ],
        controllers: [tradeVolumeRank_controller_1.TradeVolumeRankController],
        providers: [tradeVolumeRank_service_1.TradeVolumeRankService],
    })
], TradeVolumeRankModule);
exports.TradeVolumeRankModule = TradeVolumeRankModule;


/***/ }),

/***/ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/tradeVolumeRank/tradeVolumeRank.service.ts ***!
  \*****************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeVolumeRankService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const tradeRank_schema_1 = __webpack_require__(/*! @lib/schemas/tradeRank.schema */ "./libs/schemas/src/tradeRank.schema.ts");
let TradeVolumeRankService = class TradeVolumeRankService {
    constructor(tradeRankModel) {
        this.tradeRankModel = tradeRankModel;
    }
    async findRankByDatetime(hours, datetime) {
        const data = await this.tradeRankModel
            .find({ unit: hours, datetime }, {
            _id: 0,
            unit: 1,
            market: 1,
            datetime: 1,
            volumeDiff: 1,
            volumeDiffRate: 1,
            volumeDiffRateRank: 1,
            prevVolumeDiffRank: 1,
            prevVolumeDiffRateRank: 1,
            prevDayVolumeDiffRank: 1,
            prevDayVolumeDiffRateRank: 1,
        })
            .exec();
        return { payload: data };
    }
};
TradeVolumeRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tradeRank_schema_1.TradeRank.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TradeVolumeRankService);
exports.TradeVolumeRankService = TradeVolumeRankService;


/***/ }),

/***/ "./libs/config/src/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./libs/config/src/database/database.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
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

/***/ "./libs/schemas/src/tradeRank.schema.ts":
/*!**********************************************!*\
  !*** ./libs/schemas/src/tradeRank.schema.ts ***!
  \**********************************************/
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
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
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

/***/ "./libs/utils/src/datetime.ts":
/*!************************************!*\
  !*** ./libs/utils/src/datetime.ts ***!
  \************************************/
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

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
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
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const api_module_1 = __webpack_require__(/*! ./api.module */ "./apps/api/src/api.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_module_1.ApiModule);
    app.enableCors();
    await app.listen(process.env.API_SERVER_PORT);
}
bootstrap();

})();

/******/ })()
;