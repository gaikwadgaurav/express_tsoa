"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
describe('capitalizeString', () => {
    it('should capitalize the first letter of a string', () => {
        const result = (0, helpers_1.capitalizeString)('test');
        expect(result).toBe('Test');
    });
    it('should handle empty string', () => {
        const result = (0, helpers_1.capitalizeString)('');
        expect(result).toBe('');
    });
});
