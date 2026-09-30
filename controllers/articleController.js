const Article = require("../models/articleModel");
const { marked } = require("marked");
const sanitizeHtml = require("sanitize-html");

module.exports = {
  getHome: async (req, res) => {
    try {
      const articles = await Article.find().sort({ _id: -1 });
      res.render("index", { articles });
    } catch (err) {
      console.error("Crash in getHome:", err); // Logs to terminal
      res.status(500).send(`Error fetching articles: ${err.message}`); // Shows in browser
    }
  },

  getArticle: async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (article) {
        const rawHtml = marked.parse(article.content);
        const cleanHtml = sanitizeHtml(rawHtml, {
          // 1. Allow headings, images, code blocks, and iframes
          allowedTags: sanitizeHtml.defaults.allowedTags.concat([
            "img",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "pre",
            "code",
            "iframe",
          ]),
          // 2. Allow necessary attributes for media and syntax highlighting
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ["src", "alt", "title"],
            iframe: [
              "src",
              "width",
              "height",
              "allow",
              "allowfullscreen",
              "frameborder",
            ],
            code: ["class"],
            pre: ["class"],
          },
          // 3. Security: Only allow iframes from trusted video hosts
          allowedIframeHostnames: ["www.youtube.com", "player.vimeo.com"],
        });
        res.render("article", { article, htmlContent: cleanHtml });
      } else {
        res.status(404).send("Article not found");
      }
    } catch (err) {
      console.error("Crash in getArticle:", err);
      res.status(404).send(`Invalid article ID: ${err.message}`);
    }
  },

  getAdmin: async (req, res) => {
    try {
      const articles = await Article.find().sort({ _id: -1 });
      res.render("admin", { articles });
    } catch (err) {
      console.error("Crash in getAdmin:", err);
      res.status(500).send(`Error loading admin panel: ${err.message}`);
    }
  },

  createArticle: async (req, res) => {
    try {
      const { title, content, language } = req.body;
      const dateLocale = language === "ar" ? "ar-EG" : "en-US";
      const formattedDate = new Intl.DateTimeFormat(dateLocale, {
        month: "long",
        year: "numeric",
      }).format(new Date());

      await Article.create({
        title,
        content,
        language,
        tags: ["New Article"],
        date: formattedDate,
      });

      res.redirect("/admin");
    } catch (err) {
      console.error("Crash in createArticle:", err);
      res.status(500).send(`Error publishing article: ${err.message}`);
    }
  },
};
