const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bye from Node.js app!');
});

app.get("/status", (req, res) => {
    res.sendFile(__dirname + "/example.json");
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});