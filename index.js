const express = require("express")
const mongoose = require("mongoose")
//const Post = require("./Post")
//import express from "express"

const PORT = 3000

const DB_URL = "mongodb+srv://milamin:cfif0067@cluster0.qzjsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express()

app.use(express.json())


app.post("/", async (req, res) => {
    //const{author, title} = req.body
    const post = await Post.create({})
    res.status(200).json("server working..." + post)
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
       app.listen(PORT, () => console.log("starting server..." + " - " + PORT))
    } catch(e){
        console.log(e)
    }
}

startApp()
