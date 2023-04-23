const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
//initializations   
const app = express();
app.use(morgan('dev'));

//settings-Handelbars
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars.js"),
  })
);
app.set("view engine", ".hbs");

//Routes "ruta de inicio"
app.use(require("./router"));
//pantallas

//publicos, codigo que el navegador puede ver
app.use(express.static(path.join(__dirname, 'public')));


//settings
app.set('port', process.env.PORT || 5000);
//Star server
app.listen(app.get('port'), () => {
  console.log('Server en el puerto', app.get('port'));
});




