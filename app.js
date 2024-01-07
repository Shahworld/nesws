const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Node.js homepage!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
