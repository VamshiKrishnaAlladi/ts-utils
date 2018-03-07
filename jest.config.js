module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    globals: {
        'ts-jest': {
            tsConfigFile: './ts-jest.tsconfig.json',
        },
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
