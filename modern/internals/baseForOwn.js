/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseFor from './baseFor';
import keys from '../objects/keys';

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
  return baseFor(object, callback, keys);
}

export default baseForOwn;
