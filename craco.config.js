var path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
