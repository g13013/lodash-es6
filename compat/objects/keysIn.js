/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isArguments from './isArguments';
import isObject from './isObject';
import slice from '../arrays/slice';
import support from '../support';

/** Used to fix the JScript [[DontEnum]] bug */
var shadowedProps = [
  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
  'toLocaleString', 'toString', 'valueOf'
];

/** `Object#toString` result shortcuts */
var arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    errorClass = '[object Error]',
    funcClass = '[object Function]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    stringClass = '[object String]';

/** Used for native method references */
var errorProto = Error.prototype,
    objectProto = Object.prototype,
    stringProto = String.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to avoid iterating non-enumerable properties in IE < 9 */
var nonEnumProps = {};
nonEnumProps[arrayClass] = nonEnumProps[dateClass] = nonEnumProps[numberClass] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
nonEnumProps[boolClass] = nonEnumProps[stringClass] = { 'constructor': true, 'toString': true, 'valueOf': true };
nonEnumProps[errorClass] = nonEnumProps[funcClass] = nonEnumProps[regexpClass] = { 'constructor': true, 'toString': true };
nonEnumProps[objectClass] = { 'constructor': true };

(function() {
  var length = shadowedProps.length;
  while (length--) {
    var key = shadowedProps[length];
    for (var className in nonEnumProps) {
      if (hasOwnProperty.call(nonEnumProps, className) && !hasOwnProperty.call(nonEnumProps[className], key)) {
        nonEnumProps[className][key] = false;
      }
    }
  }
}());

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
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
 * _.keysIn(new Shape);
 * // => ['x', 'y', 'z'] (property order is not guaranteed across environments)
 */
function keysIn(object) {
  var result = [];
  if (!isObject(object)) {
    return result;
  }
  if (support.nonEnumArgs && object.length && isArguments(object)) {
    object = slice(object);
  }
  var skipProto = support.enumPrototypes && typeof object == 'function',
      skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error);

  for (var key in object) {
    if (!(skipProto && key == 'prototype') &&
        !(skipErrorProps && (key == 'message' || key == 'name'))) {
      result.push(key);
    }
  }
  // Lo-Dash skips the `constructor` property when it infers it's iterating
  // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
  // attribute of an existing property and the `constructor` property of a
  // prototype defaults to non-enumerable.
  if (support.nonEnumShadows && object !== objectProto) {
    var ctor = object.constructor,
        index = -1,
        length = shadowedProps.length;

    if (object === (ctor && ctor.prototype)) {
      var className = object === stringProto ? stringClass : object === errorProto ? errorClass : toString.call(object),
          nonEnum = nonEnumProps[className];
    }
    while (++index < length) {
      key = shadowedProps[index];
      if (!(nonEnum && nonEnum[key]) && hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
  }
  return result;
}

export default keysIn;
