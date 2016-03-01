# a-contains
Returns true if the value is present in the list

## Install

```sh
$ npm install --save a-contains
```

## Example

```js
var contains = require('a-contains');

var arr = { 0: 'a', 1: 'b', 2: 'c' };
console.log(contains(arr, 'd'));
//=> true

var arr = {1, 2, 3, 4, 5};
console.log(contains(arr, 5));

var arr = {1, 2, 3, 4, 5};
console.log(contains(arr, 5, 2));
//=> true
```

#### `require('a-contains')(object, value, [fromIndex])`

**Arguments**:
- `object`: It can be array for plain key/value object
- `value`: The item that you want to find in object
- `fromIndex`: fromIndex to start your search at a given index

**Returns**: Returns true if the value is present in the list

## License

&copy; 2016 vikram. MIT License
