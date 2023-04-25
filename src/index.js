const express = require('express');
const path = require('path')
const morgan = require('morgan');
const engine = require('express-handlebars').engine
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"public")))

//HTTP logger
app.use(morgan('combined'))

// engine express-handleabars
app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/home-page',(req,res)=>{
  res.render('homePage')
})

app.listen(port,()=>{
    console.log("http://localhost:"+`${port}`)
});