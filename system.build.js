var Builder = require('systemjs-builder');
var builder = new Builder();

var routes = [
  'app/lazy.module.ngfactory'
];

builder.loadConfig('./system.config.js')
  .then(() => {
    return builder.bundle('app - [app/**/*]', 'lib/vendor.js', {minify: true, mangle: true, rollup: true})
      .then(() => builder.bundle('app - lib/vendor.js', 'lib/main.js', {minify: true, mangle: true, rollup: true}))
  });
