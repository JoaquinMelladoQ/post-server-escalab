const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const { create, read, update, list, delete } = require("../controllers/comment");

// endpoints-routes
router.post("/post", authCheck, adminCheck, create)
router.get("/posts", list);
router.get("/post/:slug", read);
router.put("/post/:slug", authCheck, adminCheck, update);
router.delete("/post/:slug", authCheck, adminCheck, delete);

module.exports = router;
