const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "pod1Ui",
    publicPath: "auto", // Or "http://localhost:6001/" when served directly during development
    scriptType: 'text/javascript' // Required for Angular 13+ if target is ES2020+
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true // Necessary for type: 'module' remotes
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        name: "pod1Ui",
        filename: "remoteEntry.js",
        exposes: {
            './Pod1UiModule': './src/app/pod1-ui/pod1-ui.module.ts',
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          // Add other shared dependencies if any
          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
