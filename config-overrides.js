const { override, addBabelPresets,
  addLessLoader, addWebpackPlugin,
  fixBabelImports, addBabelPlugin
} = require('customize-cra')
const merge = require('lodash/merge')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const themes = require("./src/config/themes");
const path = require('path')
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
  addBabelPlugin("emotion"),
  addWebpackPlugin(themePlugin),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': "#8d6bae",
      '@secondary-color': "#5AE6DC",
      '@success-color': '#06b87c;',
      '@font-family': 'Lato;',
      '@normal-color': 'rgb(114, 114, 114);',
      '@link-color': 'rgb(74, 144, 226);',
      '@font-size-base': '15px;',
      '@heading-color': 'rgba(0, 0, 0, .85);',
      '@text-color': 'rgb(114, 114, 114);',
      '@text-color-secondary ': 'rgba(0, 0, 0, .45);',
      '@disabled-color ': 'rgba(0, 0, 0, .25);',
      '@border-radius-base': '4px;',
      '@border-color-base': 'rgb(231, 231, 231);',
      '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15);'
    }
  })
)
module.exports = (config, env) => {
  const baseConfig = antdConfigFunc(config, env)
  return merge({}, baseConfig, { output: { publicPath: process.env.PUBLIC_URL } })
}
