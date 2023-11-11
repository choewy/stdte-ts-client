var path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@hook': path.resolve(__dirname, 'src/hook'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@layout': path.resolve(__dirname, 'src/layout.tsx'),
      '@router': path.resolve(__dirname, 'src/router.tsx'),
      '@app': path.resolve(__dirname, 'src/app.tsx'),
    },
  },
};
