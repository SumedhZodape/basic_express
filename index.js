const express = require('express');
const doctorRouter = require('./doctors.router.js')

const app = express()



// to handle doctor requests
app.use("/doctor", doctorRouter)

// http://localhost:8000/doctor/getdoctors


// main page api - to get all the students
app.get("/getstudents", (req, res)=>{
    res.send({message:"Students fetched!"})
})


// http://localhost:8000/getstudents


// to create server
app.listen(8000, ()=>{
    console.log("SERVER IS RUNNING")
})