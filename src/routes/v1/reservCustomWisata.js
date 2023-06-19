const express = require("express");
const router = express.Router();
const reservRoute = require("../../controllers/reservCustomWisataController");
const { authJWT } = require("../../middlewares/auth");
const {
  createReservWisataCustomValidation,
  getOneReservWisataCustomValidation,
  deleteOneReservWisataCustomValidation,
} = require("./validator/reservWisataCustomValidator");

router
  .route("/")
  .get(authJWT, reservRoute.getAllreservCustomWisata)
  .post(
    createReservWisataCustomValidation,
    reservRoute.createreservCustomWisata
  );

router
  .route("/:id")
  .get(
    getOneReservWisataCustomValidation,
    authJWT,
    reservRoute.getOnereservCustomWisata
  )
  .delete(
    deleteOneReservWisataCustomValidation,
    authJWT,
    reservRoute.deleteOnereservCustomWisata
  )
  .put(authJWT, reservRoute.updateReservCustomWisata);

module.exports = router;
