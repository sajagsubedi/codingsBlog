const express=require("express")
const Blogs=require("../models/Blog")
const Router=express.Router()
Router.get('/fetchblogs' , async (req, res) => {
   try {
        console.log("fetching data");
         const blogs = await Blogs.find({});
         res.json(blogs)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error in Blogs.find");
    }
})

module.exports=Router