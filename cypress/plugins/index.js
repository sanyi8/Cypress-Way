const registerRequireHook = require('cypress-require-hook');
const installBrowserExtensions = require('cypress-browser-extension-plugin').installBrowserExtensions;
const cypressCrossOrigin = require('cypress-cross-origin');
module.exports = (on, config) => {
  registerRequireHook(on);
  installBrowserExtensions(config);
  cypressCrossOrigin(on);
  return config;
};