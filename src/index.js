const express = require("express");
const path = require("path");
const morgan = require("morgan");
const engine = require("express-handlebars").engine;
const app = express();
const port = 3000;
const routes = require("./routes/index.js");
const { setDefaultResultOrder } = require("dns");

app.use(express.static(path.join(__dirname, "public")));

// middleWare handle
app.use(
    express.urlencoded({
        extended: true,
    }),
); //=> body server rendering
app.use(express.json()); // handle Fetch,XMLHTTPS
//HTTP logger
// app.use(morgan('combined'))

// engine express-handleabars
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

routes(app);

app.listen(port, () => {
    console.log("http://localhost:" + `${port}`);
});
