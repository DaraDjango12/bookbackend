require("dotenv").config()
const express=require("express")
const app=express();
require("colors")
const DbConnect=require("./config/db")

const port=process.env.PORT ||5000;
DbConnect()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Django, your serve dey run on port ${port} and Db is connected`.bgGreen )

    })
})
.catch((err)=>{
    console.log(err.message)
})