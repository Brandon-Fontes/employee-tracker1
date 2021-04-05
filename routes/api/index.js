const router = require("express").Router();
const registerRoutes = require("./Register");
const salaryRoutes = require("./Salary");

router.use("/register", registerRoutes);
router.use("/salary", salaryRoutes);


module.exports = router;
