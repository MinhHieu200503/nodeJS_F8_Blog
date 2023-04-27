const news = require("./news");
const site = require("./site");
function routes(app) {
    // [GET] /news
    app.use("/news", news);
    // [GET] /
    app.use("/", site);
}

module.exports = routes;
