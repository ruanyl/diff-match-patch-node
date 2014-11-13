diff-match-patch
========
[![NPM version](https://badge.fury.io/js/diff-match-patch-node.svg)](http://badge.fury.io/js/diff-match-patch-node)

node wrap of google-diff-match-patch

## Installation

This module is installed via npm:

``` bash
$ npm install diff-match-patch-node
```

## Example Usage

``` js
var diffMatchPatch = require('diff-match-patch-node');

diffMatchPatch().diff_main('test A B', 'test B B');
// => [ [ 0, 'test ' ], [ -1, 'A' ], [ 1, 'B' ], [ 0, ' B' ] ]
```
