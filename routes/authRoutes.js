const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");

router.post("/", login);        // POST /login
router.post("/register", register);  // POST /login/register

module.exports = router;
