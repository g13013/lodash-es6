/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import eachIteratorOptions from './eachIteratorOptions';

/** Reusable iterator options for `forIn` and `forOwn` */
var forOwnIteratorOptions = {
  'top': 'if (!objectTypes[typeof iterable]) return result;\n' + eachIteratorOptions.top,
  'array': false
};

export default = forOwnIteratorOptions;
