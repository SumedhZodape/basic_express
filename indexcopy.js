const express = require('express');

const app = express();




// how to create middleware
const checkUser = (req, res, next) =>{

    let isValid = true;

    if(isValid == true){
        next()
    }else{
        res.send({message:"Invalid User"})
    }

}


// app.use(checkUser())



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


// post api
app.post("/addproduct", (req, res)=>{
    console.log(req.body);
    res.send({message:"Product added!"})
})


app.listen(8000, ()=>{
    console.log("SERVER IS RUNNING...")
})