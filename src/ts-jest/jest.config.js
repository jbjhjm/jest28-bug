module.exports = {
	displayName: 'test',
	preset: '../../jest.preset.js',
	setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.json',
			stringifyContentPathRegex: '\\.(html|svg)$',
		},
	},
	transform: {
		'^.+\\.(ts|html)$': 'ts-jest',
	},
	transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
