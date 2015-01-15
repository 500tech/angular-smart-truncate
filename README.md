# angular-smart-truncate

String truncation, which lets you see the beginning and the ending of a truncated string.


## Install

Install via bower:

```bash
bower install --save angular-smart-truncate
```

Add to index.html:

```html
<script type="text/javascript" src="bower_components/angular-smart-truncate/dist/angular-smart-truncate.js"></script>
```

Inject ``'500tech.smart-truncate'`` into your main module:

```javascript
angular.module('App', [
  // ... other dependencies
  '500tech.smart-truncate'
])
```

## Usage

```{{ "/Users/John Appleseed/Desktop/file.jpg" | truncate:20 }}```

will be transformed to:

``` /Users/Jo...file.jpg ```


## License

MIT Licensed

Copyright (c) 2014, [500Tech](http://500tech.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sub-license, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
