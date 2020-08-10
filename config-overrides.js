const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');

// Adds legacy decorator support to the Webpack configuration.
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
	addDecoratorsLegacy()
);
