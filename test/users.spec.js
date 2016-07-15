process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var knexfile = require('../knexfile.js');


var knex = require('knex')(knexfile[process.env.NODE_ENV]);

var should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
    knex.migrate.rollback(process.env.NODE_ENV)
    .then(function() {
      knex.migrate.latest(process.env.NODE_ENV)
      .then(function() {
        return knex.seed.run(process.env.NODE_ENV)
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  describe('Get all users', function() {
    it('should get all users', function(done) {
      chai.request(server)
      .get('/users')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('array');
        res.body.length.should.equal(2);
        res.body[0].should.have.property('firstname');
        res.body[0].firstname.should.equal('Gérald');
        res.body[0].should.have.property('lastname');
        res.body[0].lastname.should.equal('Babin');
        res.body[0].should.have.property('birthdate');
        var actual = new Date('1972-12-25 00:00:00');
        var expected = new Date(res.body[0].birthdate);
        actual.getTime().should.equal(expected.getTime());
        done();
      });
    });
  });
  describe('Get one user', function() {
    it('should get user with id 1', function(done) {
      chai.request(server)
      .get('/user/1')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('firstname');
        res.body.firstname.should.equal('Gérald');
        res.body.should.have.property('lastname');
        res.body.lastname.should.equal('Babin');
        res.body.should.have.property('birthdate');
        var actual = new Date('1972-12-25 00:00:00');
        var expected = new Date(res.body.birthdate);
        actual.getTime().should.equal(expected.getTime());
        done();
      });
    });
  });
});