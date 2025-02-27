"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = void 0;
const logRequest = (req, res, next) => {
    console.log(req.method + " " + req.originalUrl);
    next();
};
exports.logRequest = logRequest;
//# sourceMappingURL=log.js.map