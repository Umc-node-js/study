const userController = require("../controllers/UserController");
const router = require("express").Router();

// UserController의 getUsers의 함수 호출
// api/user/ 
router.route("/")
    .get(userController.getUsers)
    .post(userController.insertUser);

router.route("/:userIdx")
    .delete(userController.deleteUser)
    .put(userController.modifyUser);

module.exports = router;