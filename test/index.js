'use strict';

var should = require('chai').should();
var myntcore = require('../');

describe('#versionGuard', function() {
  it('global._myntcore should be defined', function() {
    should.equal(global._myntcore, myntcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      myntcore.versionGuard('version');
    }).should.throw('More than one instance of myntcore');
  });
});
