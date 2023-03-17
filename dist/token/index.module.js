"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const minuteCandle_module_1 = require("./minuteCandle/minuteCandle.module");
const ticker_module_1 = require("./ticker/ticker.module");
const tradeVolumeRank1H_module_1 = require("./tradeVolumeRank/tradeVolumeRank1H.module");
const index_service_1 = require("./index.service");
const tradeVolumeRank1H_service_1 = require("./tradeVolumeRank/tradeVolumeRank1H.service");
const tradeVolumeRank1H_entity_1 = require("../entities/token/tradeVolumeRank1H.entity");
const index_controller_1 = require("./index.controller");
let TokenModule = class TokenModule {
};
TokenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tradeVolumeRank1H_entity_1.TokenTradeVolumeRank]),
            minuteCandle_module_1.MinuteCandleModule,
            ticker_module_1.TickerModule,
            tradeVolumeRank1H_module_1.TradeVolumeRankModule,
        ],
        controllers: [index_controller_1.TokenController],
        providers: [index_service_1.TokenService, tradeVolumeRank1H_service_1.TradeVolumeRankService],
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=index.module.js.map