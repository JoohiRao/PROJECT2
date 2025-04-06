const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{required:true,type:String},
    role:{
        type:String,
        enum:["buyer","seller","admin"],
        default:"buyer"
    },
    address:String,
    contact:String,
    profilePic:String
},  {
    timestamps:true
})


module.exports=mongoose.model("User",userSchema)
