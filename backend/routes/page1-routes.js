const express = require("express");
const router = express.Router();
const {
  createPage1Data,
  getAllPage1Data,
  deletePage1Data,
} = require("../controller/page1-controller");
// http://localhost:5000/api/v1/page1 => get, post
router.route("/page1").get(getAllPage1Data).post(createPage1Data);
router.route("/page1/:id").delete(deletePage1Data);
module.exports = router;
