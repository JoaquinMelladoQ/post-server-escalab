const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const { create, read, update, list, remove } = require("../controllers/post");

router.post("/post", create);
router.get("/posts", list);
router.get("/post/:slug", read);
router.put("/post/:slug", update);
router.delete("/post/:slug", remove);

module.exports = router;
