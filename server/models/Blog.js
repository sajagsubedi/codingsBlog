const mongoose=require("mongoose") 
const Schema = mongoose.Schema;

const BlogsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    subTitle:String,
    description:{
        type: String,
        required: true, 
    },
    imgUrl:String,
    publishedAt:{
        type: Date,
        default: Date.now
    },
    urlToBlog:String
  });

  module.exports= mongoose. model('Blog', BlogsSchema);