const mongoose= require("mongoose")
const mongoURl = "mongodb+srv://<codingsblog>:<codingsblog>@cluster0.qmoi5b1.mongodb.net/?retryWrites=true&w=majority"

// connectng to database
const connectToMongo = ()=>{
    mongoose.connect(mongoURl, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}


// exports
module.exports=connectToMongo