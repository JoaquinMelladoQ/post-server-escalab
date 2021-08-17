const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const { create, read, update, list } = require("../controllers/comment");

router.post("/post/comment", authCheck, adminCheck, create);
router.get("/post/comments", list);
router.get("/post/comment/:slug", read);
router.put("/post/comment/:slug", authCheck, adminCheck, update);
router.delete("/post/comment/:slug", authCheck, adminCheck);

module.exports = router;
