var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Bayer Free State' });
});

// Need to fix these route so it can accept multiple sub-route

router.get('/government', (req, res, next) => {
  res.render(`government/index`, {title: 'Bayer Free State Government'})
});
router.get('/government/:name', (req, res, next) => {
  res.render(`government/${req.params.name}`, {title: req.params.name})
});

router.get('/elections', (req, res, next) => {
  res.render(`elections/index`, {title: 'Bayer Free State Elections'})
});
router.get('/elections/:name', (req, res, next) => {
  res.render(`elections/${req.params.name}`, {title: req.params.name})
});

router.get('/templates/:name', (req, res, next) => {
  res.render(`templates/${req.params.name}`, {title: 'Bayer Free State templates'})
})

module.exports = router;``