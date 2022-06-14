
const path = require('path');

const express = require('express');
const app = express();

const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('hbs', expressHbs());

app.set('view engine', 'hbs');
app.set('views', 'views');
const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');
// 中间件

app.use(bodyParser.urlencoded({ extended: false })); // 是否处理非标准的请求
// 让文件不被中间件处理
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  console.log(req.body)
  res.status(404).render('404', { pageTitle: '页面走丢了' })
})

app.listen(3000);