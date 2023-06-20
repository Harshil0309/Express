const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/postExam", isLoggedIn, (req, res, next) => {});

router.get("/getExam", isLoggedIn, (req, res, next) => {});

router.get("/applyForMakeup", isLoggedIn, (req, res, next) => {});

module.exports = router;
