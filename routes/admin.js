const path = require('path');
const rootDir = require('../utils/path');

const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product',(req, res, next) => {
  res.render('add-product', {pageTitle: '添加产品', path: '/admin/add-product'})
})

router.post('/product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
})

exports.routes = router;
exports.products = products;
