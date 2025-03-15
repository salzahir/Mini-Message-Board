
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

const messageRouter = require('./routes/messageRouter');
app.use('/', messageRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, 'public');
app.use(express.static(assetPath));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});