const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getBlogFeed', (req, res) => {
  const feedparser = require('feedparser-promised');
  const httpOptions = {
    uri: 'https://paulopensourceblog.wordpress.com/feed/',
    timeout: 3000,
    gzip: true,
  };
  feedparser.parse(httpOptions).then((feeds) => {
    res.json(feeds);
  });
});

// Handles any request that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);
