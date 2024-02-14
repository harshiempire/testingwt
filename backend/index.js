const express = require("express");
const students = require("./students");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("/Users/harshithalle/testingfolderwt/frontend/index.html");
});

app.get("/api", (req, res) => {
  res.send({ message: "API is Working" });
});
app.get("/api/students", (req, res) => {
  res.json(students);
});
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
app.post("/api/students", (req, res) => {
  if (!req.body.email) {
    //email is mandatory
    res.status(400);
    res.json({ error: "email is Required..." });
  }
  const user = {
    id: students.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };
  students.push(user);
  res.json(user);
});
// //PUT Data used for Update the Value:

app.put("/api/students/:id", (req, res) => {
  let id = req.params.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let index = students.findIndex((students) => {
    return students.id == Number.parseInt(id);
  });
  if (index >= 0) {
    const stu = students[index];
    stu.first_name = first_name;
    stu.last_name = last_name;
    stu.email = email;
  } else {
    res.status(404);
    res.end();
  }
  console.log(id);
  res.json(id);
});

app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id;

  if (id >= 0) {
    const st = students[id];
    students.splice(id, 1);
    console.log(st);
    res.json(st);
  } else {
    res.status(404);
    res.end();
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`App Running in port: ${port}`);
});
