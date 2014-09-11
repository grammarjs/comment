
# grammarjs-comment

![experimental](http://img.shields.io/badge/status-experimental-orange.svg?style=flat)

General comment plugin. Hopefully it's possible to abstract the comment stuff out of most languages most of the way.

## Example

```js
var Grammar = require('grammarjs-grammar');
var comment = require('grammarjs-comment');
var grammar = new Grammar('my-grammar');
grammar.use(comment());
```