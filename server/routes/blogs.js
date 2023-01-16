const express = require("express");
const Router = express.Router();
const Blog = require("../models/Blog");
// Fetching all the blogs
Router.get("/fetchblogs", async (req, res) => {
  console.log("fetching data");
   Blog.find({},()=>{if (err){ 
    throw err
  }
  else{
   console.log(post);
   res.end(post);
  }
 });
});

// adding a blog
Router.post('/addblog',(req,res)=>{
  console.log(req.body)
 if( !Blog.find(req.body)==null){
  let newPost=new Blog(req.body)
  newPost.save()
  res.end("Blog added succesfully")
 }
 else{
  res.end(Blog.find(req.body))
 }
})
module.exports = Router;
