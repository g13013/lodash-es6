/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isArguments from './isArguments';
import isNative from '../internals/isNative';
import isObject from './isObject';
import keysIn from './keysIn';
import support from '../support';

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @type Function
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var index = -1,
      props = keysIn(object),
      length = props.length,
      result = [];

  while (++index < length) {
    var key = props[index];
    if (hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.z = 0;
 *
 * _.keys(new Shape);
 * // => ['x', 'y'] (property order is not guaranteed across environments)
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  if ((support.enumPrototypes && typeof object == 'function') ||
      (support.nonEnumArgs && object && object.length && isArguments(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

export default keys;
