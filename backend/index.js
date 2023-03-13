const timeStamp = require('./timeStamp');
const express = require('express');
const app = express();
const cors = require('cors');
var user = {};

app.use(cors());
app.use(express.json());

app.post('/api/user',(req,res)=>{
    user.name = req.body.name;
    res.send("ยินดีต้อนรับ..." + user.name);
    console.log(timeStamp() + ": user is " + req.body.name);
})

app.post('/api/note',(req,res)=>{
    res.send("บันทึกของ " + user.name);
})


app.listen(5000,()=>{
    console.log("server run port 5000");
})