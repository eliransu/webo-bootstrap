const { override, addBabelPresets,
  addLessLoader, addWebpackPlugin,
  fixBabelImports, addBabelPlugin
} = require('customize-cra');
const merge = require('lodash/merge');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const path = require('path');
const themes = require("./src/config/themes");

const themeVariables = Object.keys(
  Object.values(themes).reduce((acc, curr) => ({ ...acc, ...curr }), {})
);

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/styles'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  mainLessFile: path.join(__dirname, './src/styles/index.less'),
  themeVariables,
  indexFileName: 'index.html',
  generateOnce: false,
  publicPath: "",
};

const themePlugin = new AntDesignThemePlugin(options);

const antdConfigFunc = override(
  ...addBabelPresets('@babel/preset-env', '@babel/preset-react'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addWebpackPlugin(themePlugin),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
    }
  })
);
module.exports = (config, env) => {
  // const baseConfig = antdConfigFunc(config, env);
  return config;
};
