const express= require("express")
const Router=express.Router()
Router.post("/adminlogin",(req,res)=>{
    res.end("Posted data succesfully")
})

module.exports=Router