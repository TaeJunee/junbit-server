"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minuteCandleProviders = void 0;
const token_entity_1 = require("../../entities/token.entity");
const token_repository_1 = require("../../repositories/token.repository");
const typeorm_1 = require("@nestjs/typeorm");
exports.minuteCandleProviders = [
    {
        provide: (0, typeorm_1.getRepositoryToken)(token_entity_1.Token),
        useFactory: (dataSource) => dataSource.getRepository(token_entity_1.Token).extend(token_repository_1.CustomTokenRepository),
        inject: [(0, typeorm_1.getDataSourceToken)()],
    },
];
//# sourceMappingURL=minuteCandle.provider.js.map