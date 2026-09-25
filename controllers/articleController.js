const Article = require('../models/articleModel');

module.exports = {
    getHome: (req, res) => {
        const articles = Article.getAll();
        res.render('index', { articles });
    },

    getArticle: (req, res) => {
        const article = Article.getById(req.params.id);
        if (article) {
            res.render('article', { article });
        } else {
            res.status(404).send('Article not found');
        }
    },

    getAdmin: (req, res) => {
        const articles = Article.getAll();
        res.render('admin', { articles });
    },

    createArticle: (req, res) => {
        const { title, content, language } = req.body;
        Article.add(title, content, language);
        res.redirect('/admin');
    }
};