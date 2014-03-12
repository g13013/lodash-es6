/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

var strings = {};

import camelCase from 'camelCase';
strings.camelCase = camelCase;
import capitalize from 'capitalize';
strings.capitalize = capitalize;
import endsWith from 'endsWith';
strings.endsWith = endsWith;
import escape from 'escape';
strings.escape = escape;
import escapeRegExp from 'escapeRegExp';
strings.escapeRegExp = escapeRegExp;
import kebabCase from 'kebabCase';
strings.kebabCase = kebabCase;
import pad from 'pad';
strings.pad = pad;
import padLeft from 'padLeft';
strings.padLeft = padLeft;
import padRight from 'padRight';
strings.padRight = padRight;
import repeat from 'repeat';
strings.repeat = repeat;
import snakeCase from 'snakeCase';
strings.snakeCase = snakeCase;
import startsWith from 'startsWith';
strings.startsWith = startsWith;
import template from 'template';
strings.template = template;
import templateSettings from 'templateSettings';
strings.templateSettings = templateSettings;
import trim from 'trim';
strings.trim = trim;
import trimLeft from 'trimLeft';
strings.trimLeft = trimLeft;
import trimRight from 'trimRight';
strings.trimRight = trimRight;
import truncate from 'truncate';
strings.truncate = truncate;
import unescape from 'unescape';
strings.unescape = unescape;

export default strings;
