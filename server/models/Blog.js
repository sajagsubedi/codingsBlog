const mongoose=require("mongoose") 
const { Schema } = mongoose;

const BlogsSchema = new Schema({
    Title:{
        type: String,
        required: true
    },
    SubTitle:{
        type:String
    },
    Description:{
        type: String,
        required: true, 
    },
    imgUrl:{
        type: String,
    },
    publishedAt:{
        type: Date,
        default: Date.now
    },
    urlToBlog:{
        type:String,
    }
  });

  module.exports= mongoose. model('Blog', BlogsSchema);