console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      $('.more-details-button').on('click', event => {
  	    $(event.currentTarget).closest('.product-details').next()
      });  
    };


    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch, 'Did you chain next onto closest to target the .shoe-details element?');
  });
});
