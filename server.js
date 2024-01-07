const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware for redirection
app.use((req, res, next) => {
  // Check if the site is under maintenance
  const indexMode = true; // Set to true during maintenance

  if (indexMode) {
    // Redirect to the maintenance page
    return res.redirect('/index');
  }

  // Continue to the next middleware if not in maintenance mode
  next();
});

// Serve the maintenance page
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle other routes when not in maintenance mode
app.get('/', (req, res) => {
  res.send('Your main app content');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

