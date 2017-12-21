"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.name = 'BaseError';
        // The next statement is used to fix an issue with TypeScript.
        // Reference: https://github.com/Microsoft/TypeScript/issues/13965
        _this.__proto__ = _newTarget.prototype;
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
