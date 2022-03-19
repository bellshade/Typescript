module.exports = {
  plugins: [
    [require('@babel/plugin-proposal-decorators').default, { legacy: true }]
  ],
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
