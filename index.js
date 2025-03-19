const express = require('express');

const app = express();



// first api
app.get("/getusers", (req, res)=>{
    res.send({
        name:"Samir",
        age:25
    })
})

// to get singleuser 
app.get("/getusers/:id/:name", (req, res)=>{
    console.log(req.params.id)
    res.send({
        message:"ABCD"
    })
})


app.listen(8000, ()=>{
    console.log("SERVER IS RUNNING...")
})