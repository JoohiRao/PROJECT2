const mongoose=require("mongoose")


const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongoDB atlas")
    }

    catch(err){
        console.log("error")
    }
}

module.exports=connectDB