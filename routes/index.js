const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const auth = require("../middleware/auth"); // Import the middleware

// Public routes
router.get("/", articleController.getHome);
router.get("/article/:id", articleController.getArticle);

// Auth routes
router.get("/login", articleController.getLogin);
router.post("/login", articleController.postLogin);
router.post("/logout", articleController.logout);

// Protected Admin Routes (Notice the 'auth' middleware injected in the middle)
router.get("/admin", auth, articleController.getAdmin);
router.post("/admin/new-article", auth, articleController.createArticle);
router.get("/admin/edit/:id", auth, articleController.getEditForm);
router.post("/admin/edit/:id", auth, articleController.updateArticle);
router.post("/admin/delete/:id", auth, articleController.deleteArticle);

module.exports = router;
