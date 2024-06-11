const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const course=require("./models/course")
const {coursesmodel}=require("./models/course")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://annajose:annajose01@cluster0.d4hgr.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/",(req,res)=>{
    let input=req.body
    let course=new coursesmodel(input)
    course.save()
    console.log(course)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
coursesmodel.find().then(
    (data)=>{
        res.json(data)
    }
).catch((error)=>{
    res.json(error)
})
})

app.listen(8081,()=>{
    console.log("server started")
})