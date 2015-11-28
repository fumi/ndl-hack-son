
(function() {
  'use strict';

  module.exports = {
    options: {
      config: '.jscsrc',
      esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
      verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
      requireCurlyBraces: [ ],
      fix:true,
    },
    src:{
      src: 'src/**/*.js',
    },
    grunt:{
      src: 'config/**/*.js',
    },
  };
})();
