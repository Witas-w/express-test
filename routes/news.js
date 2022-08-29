const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET home page. */
router.get('/', (req, res) => {

    const search = req.query.search || '';
    const data = News
        .find({ title: new RegExp(search.trim(), 'i') })
        .sort({ created: -1 });

    data.exec((err, data) => {
        res.render('news', { title: 'News', data, search });
    })


});

module.exports = router;