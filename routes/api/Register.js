const router = require("express").Router();
const registerController = require("../../controllers/registerController");



router.route("/")
    .get(registerController.findAll)
    .post(registerController.create);

    router
        .route("/:id")
        .get(registerController.findById)
        .put(registerController.update)
        .delete(registerController.remove);
 


    module.exports = router;