require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {dbConect} = require('./config/mongodb');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/', require('./app/routes'))
dbConect();


app.listen(PORT, () => console.log(`Running on the port`, PORT));