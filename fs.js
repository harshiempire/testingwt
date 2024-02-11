const fs = require("fs")

fs.writeFile("file_created_by_fs.txt","HI bro you are created by the fs module in nodejs",(err)=>{
    if(err) console.log(err)
    console.log("Written to a file")
})

fs.readFile("file_created_by_fs.txt","utf-8",(err,data)=>{
    if(err) console.log(err)
    console.log(data)
})