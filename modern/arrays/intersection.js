/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseIndexOf from '../internals/baseIndexOf';
import cacheIndexOf from '../internals/cacheIndexOf';
import createCache from '../internals/createCache';
import isArguments from '../objects/isArguments';
import isArray from '../objects/isArray';

/**
 * Creates an array of unique values present in all provided arrays using
 * strict equality for comparisons, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {...Array} [array] The arrays to inspect.
 * @returns {Array} Returns the new array of shared values.
 * @example
 *
 * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
 * // => [1, 2]
 */
function intersection(array) {
  if (!array) {
    return [];
  }
  var args = [],
      argsIndex = -1,
      argsLength = arguments.length,
      caches = [],
      indexOf = baseIndexOf,
      prereq = createCache,
      seen = [];

  while (++argsIndex < argsLength) {
    var value = arguments[argsIndex];
    if (isArray(value) || isArguments(value)) {
      args.push(value);
      caches.push(prereq && value.length >= 120 &&
        createCache(argsIndex ? value : seen));
    }
  }
  argsLength = args.length;
  var array = args[0],
      index = -1,
      length = array ? array.length : 0,
      result = [];

  outer:
  while (++index < length) {
    var cache = caches[0];
    value = array[index];

    if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
      argsIndex = argsLength;
      (cache || seen).push(value);
      while (--argsIndex) {
        cache = caches[argsIndex];
        if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
          continue outer;
        }
      }
      result.push(value);
    }
  }
  return result;
}

export default intersection;
