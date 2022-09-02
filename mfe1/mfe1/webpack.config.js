const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe1',
  exposes: {
    './Module': './mfe1/src/app/flights/flights.module.ts',
  },
});
