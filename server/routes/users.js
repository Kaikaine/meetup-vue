const express = require("express");
const router = express.Router();

const UsersCtrl = require("../controllers/users");
router.post("/register", UsersCtrl.register);

router.get("", UsersCtrl.getUsers);

module.exports = router;
