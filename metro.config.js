const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'mjs'],
    assetExts: [...(defaultConfig.resolver.assetExts || []), 'glb', 'gltf'],
  },
};

const mergedConfig = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    ...customConfig.resolver,
    sourceExts: customConfig.resolver.sourceExts,
    assetExts: customConfig.resolver.assetExts,
  },
};

module.exports = mergedConfig;
