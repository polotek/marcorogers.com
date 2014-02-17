module.exports = function(app, config, restify) {
  // 10-10-2011/a-quick-rant-on-web-development-and-elegant-solutions.html
  // app.get(/blog\/^d{2}-d{2}-d{4}\/([a-zA-Z]_-)+/, restify.serveStatic({
  app.get(/.+/, restify.serveStatic({
    directory: __dirname + '/' + config.oldArchiveDir
  }));
}
