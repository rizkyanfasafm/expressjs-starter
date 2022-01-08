const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

// EJS Configuration
app.set('view engine', 'ejs');
app.set('views', 'views');

// Handlebars Configuration
// app.engine('handlebars', expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout'
// }));
// app.set('view engine', 'handlebars');
// app.set('views', 'views');

// Pug Configuration
// app.set('view engine', 'pug');
// app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { application } = require('express');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

    res.render('404', {
        pageTitle: '404 Page Not Found'
    });
})

app.listen(3000);