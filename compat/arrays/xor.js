/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseDifference from '../internals/baseDifference';
import baseUniq from '../internals/baseUniq';
import isArguments from '../objects/isArguments';
import isArray from '../objects/isArray';

/**
 * Creates an array that is the symmetric difference of the provided arrays.
 * See [Wikipedia](http://en.wikipedia.org/wiki/Symmetric_difference) for
 * more details.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {...Array} [array] The arrays to inspect.
 * @returns {Array} Returns the new array of values.
 * @example
 *
 * _.xor([1, 2, 3], [5, 2, 1, 4]);
 * // => [3, 5, 4]
 *
 * _.xor([1, 2, 5], [2, 3, 5], [3, 4, 5]);
 * // => [1, 4, 5]
 */
function xor() {
  var index = -1,
      length = arguments.length;

  while (++index < length) {
    var array = arguments[index];
    if (isArray(array) || isArguments(array)) {
      var result = result
        ? baseDifference(result, array).concat(baseDifference(array, result))
        : array;
    }
  }
  return result ? baseUniq(result) : [];
}

export default xor;
