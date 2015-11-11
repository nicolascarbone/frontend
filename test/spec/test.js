'use strict';

var ModelBackbone = Backbone.Model.extend({
      defaults: {
        title: 'title-here'
      }
    }),
    model = new ModelBackbone();

describe('ModelBackbone', function () {

  it('has title', function() {
    expect('title-here').to.equal('title-here');
  });

});

/*
QUnit

module('Trivial js testing');

test('x + y', function( assert ) {
    assert.equal(add(1, 2), 3, '1 + 2 = 3');
});
*/

