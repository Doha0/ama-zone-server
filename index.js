const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Ama-zone server is running");
})

app.listen(port, () => {
    console.log(`Ama-zone server is running on port: ${port}`);
})