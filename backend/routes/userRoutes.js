const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/userController");
const { addCartItem } = require("../controllers/cartController");

router.route("/email=:email/password=:password").get((req, res) => {
  getUser(req, res, req.params.email, req.params.password);
});
router.route("/").post(createUser);
router.route("/email=:userEmail").post((req, res) => {
  addCartItem(req, res, req.params.userEmail);
});

module.exports = router;
