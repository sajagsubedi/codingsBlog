const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
// Fetching all the blogs
router.get("/fetchblogs", async (req, res) => {
  console.log("fetching data");
   Blog.find({})
.then(data=>res.json(data))
 });

// adding a blog
// router.post('/addblog',(req,res)=>{
//   console.log(req.body)
//  if( !Blog.find(req.body)==null){
//   let newPost=new Blog(req.body)
//   newPost.save()
//   res.end("Blog added succesfully")
//  }
//  else{
//   res.end(Blog.find(req.body))
//  }
// })
module.exports = router;
