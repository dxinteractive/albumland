const path = require('path');

module.exports = {
  webpack: {
    alias: {
      react: path.resolve(__dirname, '../../node_modules/react'),
    },
    configure: (webpackConfig, { env, paths }) => {
        webpackConfig.module.rules[1].oneOf[2].include = [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, '../albumland-ui/src')
        ];
        return webpackConfig;
    }
  }
};
