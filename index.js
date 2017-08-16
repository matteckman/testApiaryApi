/**
 * INSTANTIATE VARIABLES
 */

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

/**
 * MIDDLEWARE
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * ROUTES
 */

function getQuestions(req,res){
	res.json({
        "question": "Favourite programming language?",
        "published_at": "2015-08-05T08:40:51.620Z",
        "choices": [
            {
                "choice": "Swift",
                "votes": 2048
            }, {
                "choice": "Python",
                "votes": 1024
            }, {
                "choice": "Objective-C",
                "votes": 512
            }, {
                "choice": "Ruby",
                "votes": 256
            }
        ]
    });
}

function postQuestions(req,res){
	console.log('Request body',req.body);

	// do response
	res.json({
        "question": "Favourite programming language?",
        "published_at": "2015-08-05T08:40:51.620Z",
        "choices": [
            {
                "choice": "Swift",
                "votes": 0
            }, {
                "choice": "Python",
                "votes": 0
            }, {
                "choice": "Objective-C",
                "votes": 0
            }, {
                "choice": "Ruby",
                "votes": 0
            }
        ]
    });
}

app.route('/questions')
	.get(getQuestions)
	.post(postQuestions);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

/**
 * START SERVER
 */

// app.listen(port);
module.exports = app.listen(3000);

console.log('test Apiary API (with Mocha/Chai/Sinon) started on port ' + port);