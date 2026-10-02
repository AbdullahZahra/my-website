const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/", articleController.getHome);
router.get("/article/:id", articleController.getArticle);
router.get("/admin", articleController.getAdmin);
router.post("/admin/new-article", articleController.createArticle);
router.get("/admin/edit/:id", articleController.getEditForm);
router.post("/admin/edit/:id", articleController.updateArticle);
router.post("/admin/delete/:id", articleController.deleteArticle);

module.exports = router;
