var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Questions', function() {

  it('should list ALL questions on /questions GET', function(done){
  	chai.request(server)
	.get('/questions')
	.end(function(err,res){

		res.should.have.status(200);

		done(); 
	});
  });

  it('should add a SINGLE question on /questions POST', function(done){


  	done();
  });

});