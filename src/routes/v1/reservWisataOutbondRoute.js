const express = require("express");
const router = express.Router();
const reservRoute = require("../../controllers/reservOutbondWisataController");
const { authJWT } = require("../../middlewares/auth");
const {
  createReservWisataOutbondValidator,
  getOneReservWisataOutbondValidator,
  deleteOneReservWisataOutbondValidator,
  updateOneReservWisataOutbondValidator,
} = require("./validator/reservWisataOutbondValidator");

router
  .route("/")
  .get(authJWT, reservRoute.getAllReservWisataOutbond)
  .post(
    createReservWisataOutbondValidator,
    reservRoute.createReservWisataOutbond
  );
router
  .route("/:id")
  .get(
    authJWT,
    getOneReservWisataOutbondValidator,
    reservRoute.getOneReservWisataOutbond
  )
  .delete(
    authJWT,
    deleteOneReservWisataOutbondValidator,
    reservRoute.deleteOneReservWisataOutbond
  )
  .put(
    authJWT,
    updateOneReservWisataOutbondValidator,
    reservRoute.updateOneReservWisataOutbond
  );

module.exports = router;
