const newsRoute = require('./news.js')
const site = require('./site.js')
function routes(app) {
    
    app.use('/news',newsRoute);
    app.use('/',site);
    
}

module.exports = routes