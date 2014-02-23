/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseIndexOf from './baseIndexOf';
import cacheIndexOf from './cacheIndexOf';
import createCache from './createCache';

/** Used as the size when optimizations are enabled for arrays */
var LARGE_ARRAY_SIZE = 40;

/**
 * The base implementation of `_.difference` that accepts a single array
 * of values to exclude.
 *
 * @private
 * @param {Array} array The array to process.
 * @param {Array} [values] The array of values to exclude.
 * @returns {Array} Returns a new array of filtered values.
 */
function baseDifference(array, values) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  var index = -1,
      indexOf = baseIndexOf,
      result = [];

  if (createCache && values && values.length >= LARGE_ARRAY_SIZE) {
    indexOf = cacheIndexOf;
    values = createCache(values);
  }
  while (++index < length) {
    var value = array[index];
    if (indexOf(values, value) < 0) {
      result.push(value);
    }
  }
  return result;
}

export default baseDifference;
