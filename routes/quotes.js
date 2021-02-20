const express = require("express");
const router = express.Router();
const quote_controller = require("../controllers/quote.controller");

router.get("/all", quote_controller.getCachedKeys);
router.get("/flush", quote_controller.flushCache);
router.post("/add/:key", quote_controller.getQuote);
router.get("/get/:key", quote_controller.getQuote);
router.post("/delete/:key", quote_controller.removeKey);
router.patch("/update/:key", quote_controller.updateCachedKey);

module.exports = router;
