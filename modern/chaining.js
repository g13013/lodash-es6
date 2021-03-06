/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

var chaining = {};

import chain from 'chain';
chaining.chain = chain;
import tap from 'tap';
chaining.tap = tap;
import value from 'wrapperValueOf';
chaining.value = value;
import wrapperChain from 'wrapperChain';
chaining.wrapperChain = wrapperChain;
import wrapperToString from 'wrapperToString';
chaining.wrapperToString = wrapperToString;
import wrapperValueOf from 'wrapperValueOf';
chaining.wrapperValueOf = wrapperValueOf;

export default chaining;
