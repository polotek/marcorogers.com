var path = require('path');

module.exports = function(app, config, restify) {
  app.get(/^\/blog\/.+/, restify.serveStatic({
    directory: path.join(__dirname, config.oldArchiveDir)
  }));
}
