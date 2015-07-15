
var template = function(type, url) {
    switch(type) {
        case 'youtube':
            return '<iframe src="'+url+'" frameborder="0" allowfullscreen></iframe>';

        case 'vimeo':
            return '<iframe src="'+url+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

        case 'vevo':
            return '<iframe src="'+url+'" frameborder="0" allowfullscreen></iframe>';
    }
};

var embed = function(link) {
    var pattern, match, position;
    var patterns = [
        {regex: /youtu\.be\/([\w\-.]+)/, type: 'youtube', url: '//www.youtube.com/embed/%1'},
        {regex: /youtube\.com(.+)v=([^&]+)/, type: 'youtube', url: '//www.youtube.com/embed/%2'},
        {regex: /vimeo\.com\/([0-9]+)/, type: 'vimeo', url: '//player.vimeo.com/video/%1'},
        {regex: /vimeo\.com\/(.*)\/([0-9]+)/, type: 'vimeo', url: '//player.vimeo.com/video/%2'},
        {regex: /vevo\.com.*\/(\w+)/, type: 'vevo', url: '//cache.vevo.com/assets/html/embed.html?video=%1'}
    ];

    for(var i=0;i<patterns.length;i++) {
        pattern = patterns[i];

        if(match = link.match(pattern.regex)) {
            position = pattern.url.match(/%([0-9]+)/)[1];
            return template(pattern.type, pattern.url.replace(/%([0-9]+)/, match[position]));
        }
    }
};

module.exports = exports = embed;