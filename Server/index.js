const express = require('express');
require('dotenv').config(); // Corrected with parentheses
const cors = require('cors');
const app = express();
const dbconnect = require('./Config/dbconnect');
// Use the correct app object
app.use(express.json());
app.use(cors({
    credentials: true // Corrected property name
}));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

dbconnect.DbConnection();

app.get('/', (req, res) => {
    res.send("hey there");
});
