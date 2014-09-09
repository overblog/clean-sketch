# clean-sketch

> Cleanup [Sketch](http://bohemiancoding.com/sketch/) SVG files

## Install

```sh
$ npm install --save-dev clean-sketch
```

## Usage

```js
var cleanSketch = require('clean-sketch');
var fs = require('fs');

// Cleanup a Sketch exported SVG
var svg = cleanSketch(fs.readFileSync('icon.svg', 'utf-8'));
```

## API

### cleanSketch(doc)

Removes Sketch namespaces and metadata.

#### doc

Type: `String`

## License

MIT © Overblog
