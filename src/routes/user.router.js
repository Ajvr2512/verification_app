const {
  getAll,
  create,
  getOne,
  remove,
  update,
  verifyCode,
  login,
  getLoggedUser,
  resetPasswordEmail,
  resetPassword,
} = require("../controllers/user.controller");
const express = require("express");
const verifyJWT = require("../utils/verifyJWT");

const routerUser = express.Router();

routerUser.route("/").get(verifyJWT, getAll).post(create);

routerUser.route("/login").post(login);

routerUser.route("/me").get(verifyJWT, getLoggedUser);

routerUser.route("/reset_password").post(resetPasswordEmail);

routerUser.route("/reset_password/:code").post(resetPassword);

routerUser.route("/verify/:code").get(verifyCode);

routerUser
  .route("/:id")
  .get(verifyJWT, getOne)
  .delete(verifyJWT,remove)
  .put(verifyJWT, update);

module.exports = routerUser;
