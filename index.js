'use strict';

/**
 * Removes Sketch namespaces and metadata.
 *
 * @param  {String} doc SVG document
 * @return {String}
 */
module.exports = function(doc) {
  var exprs = [
    // Comments
    /<!--.*-->/g,
    // Namespaces
    ns('sketch'),
    ns('xmlns'),
    ns('xml'),
    // Optional tags
    tag('metadata'),
    tag('title'),
    tag('desc'),
    tag('defs'),
    // Invalid fill
    attr('fill'),
  ];

  for (var i = 0; i < exprs.length; i++) {
    doc = doc.replace(exprs[i], '');
  }

  return doc;
};

function tag(name) {
  return RegExp('<' + name + '>(?:.|[\n\r\s])*</' + name + '>', 'gi');
}

function attr(name) {
  return RegExp(name + '="[^"]*"', 'gi');
}

function ns(name) {
  return RegExp(name + ':[^=]+="[^"]*"', 'gi');
}
