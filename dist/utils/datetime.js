"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDatetime = void 0;
const convertDatetime = (datetime) => {
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const date = datetime.getDate();
    const hour = datetime.getHours();
    return {
        year, month, date, hour
    };
};
exports.convertDatetime = convertDatetime;
//# sourceMappingURL=datetime.js.map