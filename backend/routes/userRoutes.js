const express = require("express");
const router = express.Router();
const {
  verifyLoginCredentials,
  createUser,
  getUser,
} = require("../controllers/userController");
const {
  addCartItem,
  getUserCart,
  updateUserCartItem,
} = require("../controllers/cartController");

router.route("/email=:email/password=:password").get((req, res) => {
  verifyLoginCredentials(req, res, req.params.email, req.params.password);
});
router.route("/").post(createUser);
router
  .route("/email=:userEmail")
  .post((req, res) => {
    addCartItem(req, res, req.params.userEmail);
  })
  .get((req, res) => {
    getUser(req, res, req.params.userEmail);
  })
  .patch((req, res) => {
    updateUserCartItem(req, res, req.params.userEmail);
  });
router.route("/email=:userEmail/user-cart").get((req, res) => {
  getUserCart(req, res, req.params.userEmail);
});

module.exports = router;
