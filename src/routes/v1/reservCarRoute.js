const express = require("express");
const router = express.Router();
const reservCarController = require("../../controllers/reservCarController");
const { authJWT } = require("../../middlewares/auth");
const {
  createNewReservCarValidator,
  getOneReservCarValidator,
  deleteOneReservCarValidator,
} = require("./validator/reservCarvalidator");

router
  .route("/")
  .get(reservCarController.getAllReservCar)
  .post(
    authJWT,
    createNewReservCarValidator,
    reservCarController.createNewReservCar
  );
router
  .route("/:id")
  .get(authJWT, getOneReservCarValidator, reservCarController.getOneReservCar)
  .delete(
    authJWT,
    deleteOneReservCarValidator,
    reservCarController.deleteOneReservCar
  );

module.exports = router;
