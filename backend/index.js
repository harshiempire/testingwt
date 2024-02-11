const express = require("express");
const students = require("./students");
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile("D:/kmit notes/21BD1A0521/testingwt/frontend/index.html");
})

// app.get("/api", (req, res) => {
//   res.send({ message: "API is Working" });
// });
// app.get("/api/students", (req, res) => {
//   res.json(students);
// });
// //POST Method Requires POSTMAN/TUNDER
// app.post("/api/test", (req, res) => {
//   res.json("POST Request");
// });
// //Push the Data in JSON format in Tunder Client like
// /*
// {
// "first_name": "John",
// "last_name": "Doe",
// "email": "johndoe@kmit.in"
// }
// */
// app.post("/api/students", (req, res) => {
//   if (!req.body.email) {
//     //email is mandatory
//     res.status(400);
//     res.json({ error: "email is Required..." });
//   }
//   const user = {
//     id: students.length + 1,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//   };
//   students.push(user);
//   res.json(user);
// });
// //PUT Data used for Update the Value:

// app.put("/api/students/:id", (req, res) => {
//   let id = req.params.id;
//   let first_name = req.body.first_name;
//   let last_name = req.body.last_name;
//   let email = req.body.email;
//   let index = students.findIndex((students) => {
//     return students.id == Number.parseInt(id);
//   });
//   if (index >= 0) {
//     const stu = students[index];
//     stu.first_name = first_name;
//     stu.last_name = last_name;
//     stu.email = email;
//   } else {
//     res.status(404);
//     res.end();
//   }
//   console.log(id);
//   res.json(id);
// });
// app.delete("/api/students/:id", (req, res) => {
//   let id = req.params.id;
//   const index = students.findIndex((students) => {
//     return students.id == Number.parseInt(id);
//   });
//   if (index >= 0) {
//     let stu = students[index];
//     students.splice(index, 1); //1 referece 1 object d elete
//     res.json(stu);
//   } else {
//     res.status(404);
//   }
// });
const port = 1234;
app.listen(port, () => {
  console.log(`App Running in port: ${port}`);
});
