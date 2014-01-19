/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import keys from '../objects/keys';

/** Used by methods to exit iteration */
var breakIndicator = '__lodash_break_1335248838000__';

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands or `thisArg` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} callback The function called per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, callback) {
  var index = -1,
      props = keys(object),
      length = props.length;

  while (++index < length) {
    var key = props[index];
    if (callback(object[key], key, object) === breakIndicator) {
      break;
    }
  }
  return object;
}

export default baseForOwn;
