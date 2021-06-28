// Dependencies
const express = require ("express");
const cors = require("cors");

// Json
const projects = require("./projects.json");
const about = require("./about.json");

// Create Express App
const app = express();

// Middleware
app.use(cors());

// Routes

// --- Home ---
app.get('/', (req, res) => {
    res.send("Hello World");
});

// --- Project ---
app.get('/projects', (req, res) => {
    res.json(projects);
});

// --- About ---
app.get('/about', (req, res) => {
    res.json(about);
});
console.log('update');

// Listen
const PORT = process.env.PORT || 4000;
app.listen(PORT), () => console.log(`Listen to port on:${PORT}`)