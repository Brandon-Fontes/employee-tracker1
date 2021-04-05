const router = require("express").Router();
const salaryController = require("../../controllers/salaryController");


router.route("/")
    .get(salaryController.findAll)
    .post(salaryController.create);

router
        .route("/:id")
        .get(salaryController.findById)
        .put(salaryController.update)
        .delete(salaryController.remove);


    module.exports = router;