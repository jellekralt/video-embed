video-embed [![Build Status](https://travis-ci.org/jellekralt/video-embed.svg?branch=v0.1.0)](https://travis-ci.org/jellekralt/video-embed)
===========

This module generates video embed code for services like YouTube and Vimeo.
In short, it converts this:

```
https://www.youtube.com/watch?v=oHg5SJYRHA0
```

To this:

```html
<iframe src="//www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allowfullscreen></iframe>
```

## Usage
```javascript
var videoEmbed = require('video-embed');

var embedHTML = videoEmbed('https://www.youtube.com/watch?v=oHg5SJYRHA0');

console.log(embedHTML);
// <iframe src="//www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allowfullscreen></iframe> 
```

## Video website support
The module currently supports the following video websites:

### YouTube
The module supports the following YouTube link formats
* https://www.youtube.com/watch?v=oHg5SJYRHA0
* http://youtu.be/oHg5SJYRHA0

### Vimeo
The module supports the following Vimeo link formats
* http://vimeo.com/2619976

### Other websites
If you'd like other video websites to be supported you are more than welcome to submit a pull request or an issue requesting a site :smiley:

## Licence
MIT: http://jellekralt.mit-license.org/
