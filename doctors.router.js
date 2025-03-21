const express = require('express')

const router = express.Router();



// to get all the doctors
router.get("/getdoctors", (req, res)=>{
    res.send({message:"Doctors fetched!"})
})



module.exports = router;