const express = require('express');
const app =express();
const cors=require('cors');
const path = require('path');
require('dotenv').load();

const PORT= 5001;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


const giphy = require('./routes/giphy');

app.use('/giphy', giphy);


module.exports = app;
