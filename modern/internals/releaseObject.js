/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import objectPool from './objectPool';

/** Used as the max size of the `arrayPool` and `objectPool` */
var MAX_POOL_SIZE = 40;

/**
 * Releases `object` back to the object pool.
 *
 * @private
 * @param {Object} object The object to release.
 */
function releaseObject(object) {
  var cache = object.cache;
  if (cache) {
    releaseObject(cache);
  }
  object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
  if (objectPool.length < MAX_POOL_SIZE) {
    objectPool.push(object);
  }
}

export default releaseObject;
