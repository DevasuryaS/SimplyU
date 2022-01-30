const express = require('express')
const exphbs = require('express-handlebars')
const app = express();


app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.get('/', (req, res) => {
    res.render('first');
})

app.get('/first', (req, res) => {
    res.render('first');
})

app.get('/login', (req, res) => {
    res.render("login");
})

app.get('/signup', (req, res) => {
    res.render("signup");
})

app.get('/home', (req, res) => {
    res.render("home");
})

app.listen(7000, () => console.log("server started"))