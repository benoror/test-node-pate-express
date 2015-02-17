var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		xml: '<data><row id="28"><object>Knife</object><bread type="Bretzel"><count unit="pc">42</count></bread></row></data>',
		xpath: '/*/*'
	});
});

module.exports = router;
