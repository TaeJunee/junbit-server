"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeVolumeRankModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const minuteCandle_module_1 = require("../minuteCandle/minuteCandle.module");
const tradeVolumeRank1H_entity_1 = require("../../entities/token/tradeVolumeRank1H.entity");
const minute_candle_schema_1 = require("../../schemas/minute-candle.schema");
const tradeVolumeRank1H_service_1 = require("./tradeVolumeRank1H.service");
const minuteCandle_service_1 = require("../minuteCandle/minuteCandle.service");
const upbit_1 = require("../../utils/upbit");
let TradeVolumeRankModule = class TradeVolumeRankModule {
};
TradeVolumeRankModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tradeVolumeRank1H_entity_1.TokenTradeVolumeRank]),
            mongoose_1.MongooseModule.forFeature([
                { name: minute_candle_schema_1.MinuteCandle.name, schema: minute_candle_schema_1.MinuteCandleSchema },
            ]),
            minuteCandle_module_1.MinuteCandleModule,
        ],
        controllers: [],
        providers: [tradeVolumeRank1H_service_1.TradeVolumeRankService, minuteCandle_service_1.MinuteCandleService, upbit_1.Upbit],
    })
], TradeVolumeRankModule);
exports.TradeVolumeRankModule = TradeVolumeRankModule;
//# sourceMappingURL=tradeVolumeRank1H.module.js.map