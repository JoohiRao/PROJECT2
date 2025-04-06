const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const connectDB=require("./config/db")
const authRoutes = require("./routes/authRoutes");

const http=require("http")
const socketio=require("socket.io")
const app=express()
dotenv.config()

connectDB()
app.use(cors())
app.use(express.json())

const server=http.createServer(app)

const io=socketio(server,{
    cors:{
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST'],
    }
})

app.use("/api/auth", authRoutes);
app.get("/",(req,res)=>{
    res.send("hey")
})
const port=process.env.PORT || 5000
server.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

