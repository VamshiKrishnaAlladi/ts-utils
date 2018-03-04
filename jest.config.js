module.exports = {
    "collectCoverage": true,
    "globals": {
        "ts-jest": {
            "tsConfigFile": "./ts-jest.tsconfig.json"
        }
    },
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
};