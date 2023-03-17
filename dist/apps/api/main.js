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

/***/ "./apps/api/src/minuteCandle/minuteCandle.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/minuteCandle/minuteCandle.service.ts ***!
  \***********************************************************/
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
exports.MinuteCandleService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const minuteCandle_schema_1 = __webpack_require__(/*! @lib/schemas/minuteCandle.schema */ "./libs/schemas/src/minuteCandle.schema.ts");
let MinuteCandleService = class MinuteCandleService {
    constructor(minuteCandleModel) {
        this.minuteCandleModel = minuteCandleModel;
    }
};
MinuteCandleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(minuteCandle_schema_1.MinuteCandle.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], MinuteCandleService);
exports.MinuteCandleService = MinuteCandleService;


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradePriceRankController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tradePriceRank_service_1 = __webpack_require__(/*! ./tradePriceRank.service */ "./apps/api/src/tradePriceRank/tradePriceRank.service.ts");
let TradePriceRankController = class TradePriceRankController {
    constructor(tradePriceRankService) {
        this.tradePriceRankService = tradePriceRankService;
    }
    findAllByDatetime(hours, datetime) {
        return this.tradePriceRankService.findAllByDatetime(hours, datetime);
    }
};
__decorate([
    (0, common_1.Get)('trade-price-rank'),
    __param(0, (0, common_1.Query)('unit')),
    __param(1, (0, common_1.Query)('datetime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof HoursType !== "undefined" && HoursType) === "function" ? _b : Object, typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TradePriceRankController.prototype, "findAllByDatetime", null);
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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tradePriceRank_controller_1 = __webpack_require__(/*! ./tradePriceRank.controller */ "./apps/api/src/tradePriceRank/tradePriceRank.controller.ts");
const tradePriceRank_entity_1 = __webpack_require__(/*! @lib/entities/token/tradePriceRank.entity */ "./libs/entities/src/token/tradePriceRank.entity.ts");
const tradePriceRank_service_1 = __webpack_require__(/*! ./tradePriceRank.service */ "./apps/api/src/tradePriceRank/tradePriceRank.service.ts");
let TradePriceRankModule = class TradePriceRankModule {
};
TradePriceRankModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tradePriceRank_entity_1.TokenTradePriceRank])],
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradePriceRankService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const minuteCandle_service_1 = __webpack_require__(/*! ../minuteCandle/minuteCandle.service */ "./apps/api/src/minuteCandle/minuteCandle.service.ts");
let TradePriceRankService = class TradePriceRankService {
    constructor(minuteCandleService) {
        this.minuteCandleService = minuteCandleService;
    }
    async findAllByDatetime(hours, datetime) {
        return;
    }
};
TradePriceRankService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof minuteCandle_service_1.MinuteCandleService !== "undefined" && minuteCandle_service_1.MinuteCandleService) === "function" ? _a : Object])
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
    findAllByDatetime(hours, datetime) {
        return this.tradeVolumeRankService.findAllByDatetime(datetime, hours);
    }
};
__decorate([
    (0, common_1.Get)('trade-volume-rank'),
    __param(0, (0, common_1.Query)('unit')),
    __param(1, (0, common_1.Query)('datetime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof HoursType !== "undefined" && HoursType) === "function" ? _b : Object, typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TradeVolumeRankController.prototype, "findAllByDatetime", null);
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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tradeVolumeRank_controller_1 = __webpack_require__(/*! ./tradeVolumeRank.controller */ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.controller.ts");
const tradeVolumeRank_entity_1 = __webpack_require__(/*! @lib/entities/token/tradeVolumeRank.entity */ "./libs/entities/src/token/tradeVolumeRank.entity.ts");
const tradeVolumeRank_service_1 = __webpack_require__(/*! ./tradeVolumeRank.service */ "./apps/api/src/tradeVolumeRank/tradeVolumeRank.service.ts");
let TradeVolumeRankModule = class TradeVolumeRankModule {
};
TradeVolumeRankModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tradeVolumeRank_entity_1.TokenTradeVolumeRank])],
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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const tradeVolumeRank_entity_1 = __webpack_require__(/*! @lib/entities/token/tradeVolumeRank.entity */ "./libs/entities/src/token/tradeVolumeRank.entity.ts");
let TradeVolumeRankService = class TradeVolumeRankService {
    constructor(tokenTradeVolumeRankRepsitory) {
        this.tokenTradeVolumeRankRepsitory = tokenTradeVolumeRankRepsitory;
    }
    async findAllByDatetime(datetime, hours) {
        this.tokenTradeVolumeRankRepsitory.metadata.tablePath = `trade_volume_rank_${hours}h`;
        const data = await this.tokenTradeVolumeRankRepsitory.find({
            select: {
                diffRateRank: true,
                prevDiffRateRank: true,
                prevDayDiffRateRank: true,
                market: true,
                volumeDiff: true,
                volumeDiffRate: true,
                datetime: true,
            },
            where: { datetime: datetime },
            order: { diffRateRank: 'asc' },
        });
        return { payload: data };
    }
};
TradeVolumeRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tradeVolumeRank_entity_1.TokenTradeVolumeRank)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_naming_strategies_1 = __webpack_require__(/*! typeorm-naming-strategies */ "typeorm-naming-strategies");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const tradeVolumeRank_entity_1 = __webpack_require__(/*! ../../../entities/src/token/tradeVolumeRank.entity */ "./libs/entities/src/token/tradeVolumeRank.entity.ts");
const tradePriceRank_entity_1 = __webpack_require__(/*! @lib/entities/token/tradePriceRank.entity */ "./libs/entities/src/token/tradePriceRank.entity.ts");
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

/***/ "./libs/entities/src/token/tradePriceRank.entity.ts":
/*!**********************************************************!*\
  !*** ./libs/entities/src/token/tradePriceRank.entity.ts ***!
  \**********************************************************/
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
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
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

/***/ "./libs/entities/src/token/tradeVolumeRank.entity.ts":
/*!***********************************************************!*\
  !*** ./libs/entities/src/token/tradeVolumeRank.entity.ts ***!
  \***********************************************************/
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
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
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

/***/ "./libs/schemas/src/minuteCandle.schema.ts":
/*!*************************************************!*\
  !*** ./libs/schemas/src/minuteCandle.schema.ts ***!
  \*************************************************/
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
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
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

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "typeorm-naming-strategies":
/*!********************************************!*\
  !*** external "typeorm-naming-strategies" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("typeorm-naming-strategies");

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