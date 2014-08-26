var embed = require('../');
var assert = require('assert');

describe('#embed()', function(){
    it('convert youtube.com url', function(){
        return assert.equal(embed('https://www.youtube.com/watch?v=oHg5SJYRHA0'), '<iframe src="//www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allowfullscreen></iframe>');
    })
})

describe('#embed()', function(){
    it('convert youtu.be url', function(){
        return assert.equal(embed('http://youtu.be/oHg5SJYRHA0'), '<iframe src="//www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allowfullscreen></iframe>');
    })
})

describe('#embed()', function(){
    it('convert vimeo.com url', function(){
        return assert.equal(embed('http://vimeo.com/2619976'), '<iframe src="//player.vimeo.com/video/2619976" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    })
})
