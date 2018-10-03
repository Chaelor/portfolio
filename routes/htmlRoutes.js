var db = require("../models");

module.exports = function(app) {
  
  app.get("/", (req, res) => {
    res.render("index", {
      title: "JJ's Portfolio",
      css: ["header.css", "footer.css", "utility.css", "index.css", "media-queries.css"],
      js: ["index.js", "utility.js"]
    })
  });

  app.get("/guestbook", function(req, res) {
    res.render("guestbook", {
      title: "JJ's Portfolio",
      css: [ "header.css", "footer.css", "utility.css", "guestbook.css", "media-queries.css"],
      js: ["guestbook.js", "utility.js"]
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
