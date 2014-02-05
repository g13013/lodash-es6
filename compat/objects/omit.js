/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseDifference from '../internals/baseDifference';
import baseFlatten from '../internals/baseFlatten';
import baseForIn from '../internals/baseForIn';
import createCallback from '../functions/createCallback';
import slice from '../arrays/slice';

/** Used for native method references */
var arrayRef = Array.prototype;

/** Native method shortcuts */
var splice = arrayRef.splice;

/**
 * Creates a shallow clone of `object` excluding the specified properties.
 * Property names may be specified as individual arguments or as arrays of
 * property names. If a callback is provided it will be executed for each
 * property of `object` omitting the properties the callback returns truey
 * for. The callback is bound to `thisArg` and invoked with three arguments;
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The source object.
 * @param {Function|...string|string[]} [callback] The function called per
 *  iteration or property names to omit, specified as individual property
 *  names or arrays of property names.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns an object without the omitted properties.
 * @example
 *
 * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
 * // => { 'name': 'fred' }
 *
 * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
 *   return typeof value == 'number';
 * });
 * // => { 'name': 'fred' }
 */
function omit(object, callback, thisArg) {
  var result = {},
      type = typeof callback;

  if (type != 'function') {
    // enables use as a callback for functions like `_.map`
    // when combined with `_.partialRight`
    var args = arguments;
    if ((type == 'number' || type == 'string') && thisArg && thisArg[callback] === object) {
      args = slice(args);
      splice.call(args, 1, 2);
    }
    var omitProps = baseFlatten(args, true, false, 1),
        length = omitProps.length;

    while (length--) {
      omitProps[length] = String(omitProps[length]);
    }
    var props = [];
    baseForIn(object, function(value, key) {
      props.push(key);
    });

    var index = -1;
    props = baseDifference(props, omitProps);
    length = props.length;

    while (++index < length) {
      var key = props[index];
      result[key] = object[key];
    }
  } else {
    callback = createCallback(callback, thisArg, 3);
    baseForIn(object, function(value, key, object) {
      if (!callback(value, key, object)) {
        result[key] = value;
      }
    });
  }
  return result;
}

export default omit;
