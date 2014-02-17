var restify = require('restify')
  , config = require('./config.json')
  , oldBlogArchive = require('./old_blog_archive');

var app = restify.createServer(config.serverOpts);

// routes
oldBlogArchive(app, config, restify);

app.listen(config.listenOpts.port, function() {
  console.log('Listening at ' + app.name + ':' + config.listenOpts.port);
});
