const { getJestProjects } = require('@nrwl/jest');

module.exports = {
	testRunner: 'jest-circus/runner',
	globalSetup: 'jest-preset-angular/global-setup',
	projects: [
		...getJestProjects()
	],
	globals: {
		'ts-jest': {
			diagnostics: {
				// ignoreCodes: [ 'TS151001' ], // suppresses esModuleInterop warning https://github.com/kulshekhar/ts-jest/issues/1173
			},
		},
	},
};
