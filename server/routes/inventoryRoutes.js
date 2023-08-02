const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//add inventory || post
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);
//get recent blood record

router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);
//get hospitals blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITALS RECORD
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET ORG PROFILES

router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);

router.get(
  "/get-orgnaisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);
module.exports = router;
