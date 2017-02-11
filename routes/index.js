var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*

Home page route - GET

SIGNUP - GET
SIGNUP - POST
SIGNIN - GET
SIGNIN - POST

LIST OF ALL POLLS - GET
LIST OF MY POLLS - GET
INDIVIDUAL POLL - GET
INDIVIDUAL POLL - POST
CREATE NEW POLL - GET
CREATE NEW POLL - POST
EDIT POLL - GET
EDIT POLL - PUT/PATCH
EDIT POLL (ADD NEW OPTION) - PUT/PATCH
DELETE POLL - DELETE

*/
