/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

var functions = {};

import after from 'after';
functions.after = after;
import bind from 'bind';
functions.bind = bind;
import bindAll from 'bindAll';
functions.bindAll = bindAll;
import bindKey from 'bindKey';
functions.bindKey = bindKey;
import callback from 'createCallback';
functions.callback = callback;
import compose from 'compose';
functions.compose = compose;
import createCallback from 'createCallback';
functions.createCallback = createCallback;
import curry from 'curry';
functions.curry = curry;
import debounce from 'debounce';
functions.debounce = debounce;
import defer from 'defer';
functions.defer = defer;
import delay from 'delay';
functions.delay = delay;
import memoize from 'memoize';
functions.memoize = memoize;
import negate from 'negate';
functions.negate = negate;
import once from 'once';
functions.once = once;
import partial from 'partial';
functions.partial = partial;
import partialRight from 'partialRight';
functions.partialRight = partialRight;
import throttle from 'throttle';
functions.throttle = throttle;
import wrap from 'wrap';
functions.wrap = wrap;

export default functions;
