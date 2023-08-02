const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//get || donar list
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);
//get hospital list
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);
//get Org list
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

//===============================================
//delete donar
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
//export
module.exports = router;
