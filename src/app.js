const express = require("express");

const PORT = 3000;
const server = express();
const bodyParser = require("body-parser");
server.use(bodyParser());

// const studentRoutes = require("./routes/student");

// const isOwner = (req, res, next) => {
//   const isOwner = false;
//   if (isOwner) {
//     next();
//   }
//   res.send({ error: "Not owner" });
// };

// server.use("/student", studentRoutes);
// server.use("/teacher", teacherRoutes)
// server.use('/general' , generalRoutes);
// server.post("/signup", (req, res, next) => {
//   const { name, email, password } = req.body;
//   res.send({ message: "signup successfull" });
// });

// server.post("/login", (req, res, next) => {
//   const { email, password } = req.body;
//   const myEmail = "abcd@gmail.com";
//   const myPassword = "password";
//   if (email != myEmail) {
//     res.send({ message: "Please Signup First" });
//   }
//   if (password != myPassword) {
//     res.send({ message: "Wrong Credentials" });
//   }

//   res.send({ message: "Logged in successfull" });
// });

server.listen(PORT, () => {
  console.log("server started");
});

// middleware
// routes
// post -> body-parser
