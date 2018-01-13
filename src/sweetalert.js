/*
 * This makes sure that we can use the global
 * cral() function, instead of cral.default()
 * See: https://github.com/webpack/webpack/issues/3929
 */

if (typeof window !== 'undefined') {
  require('./sweetalert.css');
}

require('./polyfills');

var cral = require('./core').default;

module.exports = cral;
