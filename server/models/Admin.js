const mongoose=require("mongoose") 
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name:String,
    password:String
}
)
module.exports=mongoose.model("Admin",AdminSchema)