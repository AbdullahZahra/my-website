const express = require('express');
const path = require('path');
const routes = require('./routes'); // Automatically loads index.js from routes folder

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies (for the admin form)
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in routes/index.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});