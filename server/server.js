
const express = require('express');

const cors= require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors({origin: true}));
// const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
const User = require('./models/schema');
const { application } = require('express');
app.use(require('./router/route'));
const PORT = process.env.PORT;

// song links
const songRoute = require("./router/songs");
app.use("/api/songs/", songRoute);

app.listen(PORT , ()=>{
    console.log(`server running at port ${PORT}`);
})