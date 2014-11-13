'use strict';
var test = require('ava');
var dmp = require('./');

test(function (t) {
    t.assert(dmp().diff_main("ruan yu", "ruan ya").length === 3);
});
