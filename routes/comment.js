const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const { create, read, update, list, remove } = require("../controllers/comment");

router.post("/:slug/comment", create);
router.get("/:slug/comments", list);
router.get("/:slug/comment/:slug", read);
router.put("/:slug/comment/:slug", update);
router.delete("/:slug/comment/:slug", remove);

module.exports = router;
