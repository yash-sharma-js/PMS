const express = require('express');
require('dotenv').config(); // Corrected with parentheses
const cors = require('cors');
const app = express();
const dbconnect = require('./Config/dbconnect');
// Use the correct app object

// middlewares
app.use(express.json());
app.use(cors({
    credentials: true // Corrected property name
}));

//Connection
const PORT = process.env.PORT || 8080;
dbconnect.DbConnection();

// Routesg
app.get('/', (req, res) => {
    res.send("hey there");
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});