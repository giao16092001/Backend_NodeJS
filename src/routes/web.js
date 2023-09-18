const express = require("express");
const router = express.Router();
const { getHomepage, getabc } = require("../controllers/homeController");
// router.Method("route", handler);

//Khai bao route
router.get("/", getHomepage);
router.get("/abc", getabc);

module.exports = router;
