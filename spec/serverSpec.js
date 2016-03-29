var request = require('supertest');
var expect = require('expect');
var app = require("../index.js");

describe("Server Test", function(){
  it("index should be served", function(done){
    request(app)
      .get('/')
      .set('Accept', 'text/HTML')
      .expect(200)
      .expect( function(res){
        expect(res.text).toContain("Hello QuoteBoard.");
      })
      .end(done);
  });

  it("style ", function(done){
    request(app)
      .get('/style.css')
      .set('Accept', 'text/HTML')
      .expect(200)
      .end(done);
  });

});

 
