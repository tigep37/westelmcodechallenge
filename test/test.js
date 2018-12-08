const express   = require("express"),
    chai        = require('chai'),
    expect      = require('chai').expect,
    chaiHttp    = require('chai-http');

chai.use(chaiHttp);

describe('GET /', function() {
    it('should return 200 ok status', function(done) { // <= Pass in done callback
      chai.request('http://localhost:3000')
      .get('/')
      .end(function(err, res) {
        if(err) return done(err);
        expect(res).to.have.status(200);
        done();                               // <= Call done to signal callback end
      });
    });
});

describe('GET /', function() {
    it('should return html', function(done) { // <= Pass in done callback
      chai.request('http://localhost:3000')
      .get('/')
      .end(function(err, res) {
          if(err) return done(err);
          expect(res).to.be.html;
        done();                               // <= Call done to signal callback end
      });
    });
});
