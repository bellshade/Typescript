module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/plugin-proposal-decorators', {legacy: true},
    '@babel/preset-typescript',
  ],
};
