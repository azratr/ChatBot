const mongoose = require('mongoose');
const DB = process.env.DATABASE;
const colors = require('colors');


mongoose.connect(DB,{
    useUnifiedTopology : true,
    useNewUrlParser : true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})