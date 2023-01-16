const mongoose= require("mongoose")
const mongoURl = "mongodb+srv://<codingsblog>:<codingsblog>@cluster0.qmoi5b1.mongodb.net/?retryWrites=true&w=majority/Blogs"

// connectng to database
const connectToMongo = ()=>{
    mongoose.connect(mongoURl,()=>{
    console.log("Connected to database successfully");
    })
}
// exports
module.exports=connectToMongo