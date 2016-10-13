var Builder = require('systemjs-builder');
var builder = new Builder();
var fs = require('fs');
var path = require('path')

var options = {
  minify: true,
  mangle: true,
  rollup: true
}

const root = 'app'

const routes = [
  './lazy.module',
  './feature/feature.module',
  './feature/lazy-feature.module'

]

function writeConfigFile(config){
  const generatedConfigFile = `
   //generated file, do not edit
   System.config(${ JSON.stringify(config)})
  `
  fs.writeFile('./system.config.ngfactory.js', generatedConfigFile)
}

builder.loadConfig('./system.config.js')
  .then(() => {
    let bundles = {}
    const outDir = 'release/'
    const rootPath = `${outDir}/${root}.js`

    return builder.bundle(root, rootPath, options)
      .then(rootBundle => {
        bundles[rootPath] = rootBundle.modules;
        return Promise.all(routes.map(route => {
          const routePath = path.join(root, route)
          const bundlePath = path.join(outDir, route + '.js');
          return builder.bundle(`${routePath + '.ngfactory.js'} - ${rootPath}`, bundlePath, options)
            .then(bundle => {
              bundles[bundlePath] = bundle.modules;
            });
        })).catch(err => {
          console.log(err)
        })
      })
      .then(() => {
        console.log(writeConfigFile({
          bundles: bundles
        }))
      })

  });
