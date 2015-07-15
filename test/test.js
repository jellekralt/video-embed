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

describe('#embed()', function(){
    it('convert simple vevo.com url', function(){
        return assert.equal(embed('http://www.vevo.com/watch/striking-matches/Hanging-On-A-Lie/USUV71500275'), '<iframe src="//cache.vevo.com/assets/html/embed.html?video=USUV71500275" frameborder="0" allowfullscreen></iframe>');
    })
})

describe('#embed()', function(){
    it('convert complex vevo.com url', function(){
        return assert.equal(embed('http://www.vevo.com/watch/casey-james/Fall-Apart/GBE431400015?syndicationid=bb8a16ab-1279-4f17-969b-1dba5eb60eda&shortlink=w3E4Yy&country=US&referralurl=http:%2F%2Fsmarturl.it%2Fcjfallapartvideo'), '<iframe src="//cache.vevo.com/assets/html/embed.html?video=GBE431400015" frameborder="0" allowfullscreen></iframe>');
    })
})
