const express = require('express');
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/", controller.index);
router.post("/api/login", controller.login);
router.get("/api/set_session_user", controller.setSessionUser)




module.exports = router;
