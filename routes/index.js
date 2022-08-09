var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Bayer Free State Government' });
});

router.get('/government', (req, res, next) => {

})

router.get('/MP/:id', (req, res, next) => {

})

router.get('/templates/:name', (req, res, next) => {
  res.render(`templates/${req.params.name}`, {title: 'Bayer Free State templates'})
})

module.exports = router;
