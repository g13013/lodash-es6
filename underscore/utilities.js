/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

var utilities = {};

import callback from 'createCallback';
utilities.callback = callback;
import constant from 'constant';
utilities.constant = constant;
import createCallback from 'createCallback';
utilities.createCallback = createCallback;
import escape from 'escape';
utilities.escape = escape;
import identity from 'identity';
utilities.identity = identity;
import matches from 'matches';
utilities.matches = matches;
import mixin from 'mixin';
utilities.mixin = mixin;
import noConflict from 'noConflict';
utilities.noConflict = noConflict;
import noop from 'noop';
utilities.noop = noop;
import now from 'now';
utilities.now = now;
import parseInt from 'parseInt';
utilities.parseInt = parseInt;
import property from 'property';
utilities.property = property;
import random from 'random';
utilities.random = random;
import result from 'result';
utilities.result = result;
import template from 'template';
utilities.template = template;
import templateSettings from 'templateSettings';
utilities.templateSettings = templateSettings;
import times from 'times';
utilities.times = times;
import unescape from 'unescape';
utilities.unescape = unescape;
import uniqueId from 'uniqueId';
utilities.uniqueId = uniqueId;

export default utilities;
