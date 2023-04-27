class NewsController {
    index(req, res) {
        res.render("news");
    }
    show(req, res) {
        res.send("<h1>:SLUG</h1>");
    }
}

module.exports = new NewsController();
