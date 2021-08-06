var express = require("express");
const { body } = require("express-validator");
var router = express.Router();
const { signin, signup, signout, genOTP, verifyOTP } = require("../controllers/auth");

router.post("/signin",
[
    body("phone","phone number is required").isNumeric()
],
 signin);
router.post("/signup",
[
    body("phone","phone number is required").isNumeric()
],
 signup);
router.get("/signout", signout);


router.post("/genotp",genOTP);
router.post("/verify",verifyOTP);

module.exports = router;
