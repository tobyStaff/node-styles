var express = require( 'express' );
var router = express.Router();
var fs = require( 'fs' );

/* GET home page. */
router.get('/', function(req, res, next) {

	var regex = /(?:#\w+\s+)?\.[\w-]+(?:\s+\w+\s*\.\w+|\s+\w+)?/ig;

	fs.readFile( './styles-input/base/base.css', 'utf-8', function( err, data ) {

		console.log( data.match( regex ) );

		res.render('index', { title: 'Styles List', data: data.match( regex ) });
	});


	


});

module.exports = router;
