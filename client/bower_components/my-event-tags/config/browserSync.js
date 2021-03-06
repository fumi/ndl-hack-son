(function() {
  'use strict';

  //var historyApiFallback = require('connect-history-api-fallback');
  //var proxyMiddleware = require('http-proxy-middleware');
  //var proxy = proxyMiddleware('/api', {target: 'http://localhost:8000/'});

  module.exports = {
    options: {
      notify: true,
      background: false,
    },
    demo: {
      bsFiles: {
        src: [
          '**/*.{html,js,css}',
        ],
      },
      options: {
        server: {
          baseDir: ['demo', '.tmp/src', 'node_modules', 'bower_components'],
        },
        watchTask: true,
      },
    },
  };
})();
