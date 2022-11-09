const mongoose = require('mongoose');

const dburl = process.env.DATABASE;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose
.connect(dburl ,connectionParams)
.then(() =>{
    console.log("connection Successful");
})
.catch((err) => {
    console.log("not connected");
});