const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/api/reddit', async (req, res) => {
  const { subreddit, limit } = req.query;
  const url = `https://www.reddit.com/r/${subreddit}/top.json?limit=${limit}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
"" 
