"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./../errors");
function mandate(paramName) {
    throw new errors_1.MissingMandatoryParamError(paramName);
}
exports.mandate = mandate;
