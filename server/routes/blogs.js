const express=require("express")
const Router=express.Router()
const Blog=require("../models/Blog")
Router.get('/fetchblogs' , async (req, res) => {
   try {
    Blog.find({});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error in Blogs.find");
    }
})

module.exports=Router