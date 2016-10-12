System.config({
  //use typescript for compilation
  transpiler: "typescript",
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    "npm:": "node_modules/",
  },
  //map tells the System loader where to look for things
  map: {

    "app": "./lib",
    "@angular": "npm:@angular",
    "rxjs": "npm:rxjs",
    "typescript": "npm:typescript/lib/typescript.js",
    "core-js": "npm:core-js"
  },
  //packages defines our app package
  packages: {
    app: {
      main: "./main.aot.js",
      defaultExtension: "js"
    },
    "app": {
      "main": "./main.aot.js",
      "map": {
        "./lazy.ngfactory.js": "./ngfactory/src/lazy.module.ngfactory.js"
      },
      defaultExtension: "js"
    },
    "@angular/core": {
      main: "index.js",
      defaultExtension: "js"
    },
    "@angular/common": {
      main: "index.js",
      defaultExtension: "js"
    },
    "@angular/compiler": {
      main: "index.js",
      defaultExtension: "js"
    },
    "@angular/platform-browser": {
      main: "index.js",
      defaultExtension: "js"
    },
    "@angular/platform-browser-dynamic": {
      main: "index.js",
      defaultExtension: "js"
    },
    "@angular/router": {
      main: "index.js",
      defaultExtension: "js"
    },
    "@angular/forms": {
      main: "index.js",
      defaultExtension: "js"
    },
    "@angular/http": {
      main: "index.js",
      defaultExtension: "js"
    },
    "rxjs": {
      defaultExtension: "js"
    },
    "core-js": {
      defaultExtension: "js"
    }
  }
});
