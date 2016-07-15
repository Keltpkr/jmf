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
        var actual = new Date('1972-12-25');
        var expected = new Date(res.body.birthdate);
        actual.getTime().should.equal(expected.getTime());
        done();
      });
    });
  });
  describe('Add one user', function() {
    it('should send parameters to : /user_add POST', function(done) {
        chai.request(server)
            .post('/user_add')
            .field('firstname', 'Jean')
            .field('lastname', 'Dujardin')
            .field('birthdate', '1965-06-05')
            .field('country_id',1)
            .set('content-type', 'application/x-www-form-urlencoded')
            //.send({firstname: 'Jean',lastname: 'Dujardin',birthdate: '1965-06-05',country_id:1})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });
    it('should get user with id 3', function(done) {
        chai.request(server)
            .post('/user_add')
            .field('firstname', 'Jean')
            .field('lastname', 'Dujardin')
            .field('birthdate', '1965-06-05')
            .field('country_id',1)
            .set('content-type', 'application/x-www-form-urlencoded')
            .end(function(err, res) {
              chai.request(server)
              .get('/user/3')
              .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('firstname');
                res.body.firstname.should.equal('Jean');
                res.body.should.have.property('lastname');
                res.body.lastname.should.equal('Dujardin');
                res.body.should.have.property('birthdate');
                var actual = new Date('1965-06-05');
                var expected = new Date(res.body.birthdate);
                actual.getTime().should.equal(expected.getTime());
                done();
              });
            });
    });
  });
  describe('delete one user', function() {
    it('should have one user left', function(done) {
      chai.request(server)
      .get('/user_del/1')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        done();
      });
    });
  });
  describe('update user 1', function() {
    it('should have firstname set to \'Christian\' ', function(done) {
      chai.request(server)
      .post('/user_update/1')
      .field('firstname', 'Christian')
      .field('lastname', 'Babin')
      .field('birthdate', '1972-06-05')
      .field('country_id',1)
      .set('content-type', 'application/x-www-form-urlencoded')
      .end(function(err, res) {
        chai.request(server)
        .get('/user/1')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('firstname');
          res.body.firstname.should.equal('Christian');
          res.body.should.have.property('lastname');
          res.body.lastname.should.equal('Babin');
          res.body.should.have.property('birthdate');
          var actual = new Date('1972-06-05');
          var expected = new Date(res.body.birthdate);
          actual.getTime().should.equal(expected.getTime());
          done();
        });
      });
    });
  });
});