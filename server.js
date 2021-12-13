const express = require('express');
const path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './')));

// assign port to PORT variable
const PORT = 3001;

// spin up server and console.log PORT
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
