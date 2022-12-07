const nxPreset = require('@nrwl/jest/preset').default;

const enableReport = !!process.env.JEST_REPORT;

module.exports = {
	...nxPreset,
	testEnvironment: "jsdom",
	setupFilesAfterEnv: [],
	testMatch: [
		'**/+(*.)+(spec|test).[tj]s?(x)',
	],
	coveragePathIgnorePatterns: ['/coverage/', '/dist/', '/node_modules/'],
	globals: {
		'VERSION':'jest-0.0',
		'TIMESTAMP':0,
		'IS_PRODUCTION':false,
		'IS_SSR':false,
	},
	transform: {
		'^.+\\.(ts|html)$': 'ts-jest',
	},
	coverageDirectory:'/coverage',
	globalSetup: 'jest-preset-angular/global-setup',
	resolver: '@nrwl/jest/plugins/resolver',
	moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
	collectCoverage: true,
	coverageReporters: [
		'html', 
		'text',
		'json'
	],
	outputFile:'dist/test-results/summary.json',
	reporters:[
		'default',
		[
			'jest-junit',
			{
				suiteName: 'jest tests',
				outputDirectory: 'dist/test-results',
				// uniqueOutputName: 'true',
				classNameTemplate: '{classname}-{title}',
				titleTemplate: '{classname}-{title}',
				ancestorSeparator: ' › ',
				usePathForSuiteName: 'true',
			},
		],
	],
	maxWorkers: 3,
	moduleDirectories: [
		"tools/testing/global_stubs",
		"node_modules"
	],
	//   moduleNameMapper:{
	// 	'__configuration__':"<rootDir>/tools/testing/emptymodule.js"
	//   }
};

if(enableReport) {
	module.exports.reporters.push(
		[
			"jest-html-reporter",
			{
				append:true,
				includeFailureMsg:true,
				outputPath:'dist/test-results/report.html',
				pageTitle:process.argv[3]
				// multipleReportsUnitePath: 'dist/test-results/summary'
			}
		]
	)
}