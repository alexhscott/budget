const path = require("path");
const express = require("express");
const homeRoutes = require("./controllers/home-routes");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});



const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(homeRoutes);

app.listen(PORT, () => console.log("Now listening" + PORT));