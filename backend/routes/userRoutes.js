const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/userController");
const { addCartItem } = require("../controllers/cartController");

router.route("/").get(getUser)
router.route("/").post(createUser);
router.route("/:userID").post((req, res) => {
  addCartItem(req, res, req.params.userID);
});

module.exports = router;
