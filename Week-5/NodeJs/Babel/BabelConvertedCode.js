"use strict";

var SumElements = function SumElements(arr) {
  console.log(arr);
  var sum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      sum += element;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
	   }
  }

  console.log(sum);
};
SumElements([10, 20, 40, 60, 90]);

/*
Output:

C:\Users\Venkat Naveen\Downloads\SHAREit\Week-5\NodeJs\Babel>node BabelConvertedCode.js
[ 10, 20, 40, 60, 90 ]
220

*/