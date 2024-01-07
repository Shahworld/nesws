const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  // Redirect all incoming requests to the maintenance page
  res.redirect('/maintenance');
});

app.get('/maintenance', (req, res) => {
  res.sendFile('maintenance.html'.join(__dirname, 'maintenance.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



