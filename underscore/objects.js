/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

var objects = {};

import assign from 'assign';
objects.assign = assign;
import clone from 'clone';
objects.clone = clone;
import cloneDeep from 'cloneDeep';
objects.cloneDeep = cloneDeep;
import create from 'create';
objects.create = create;
import defaults from 'defaults';
objects.defaults = defaults;
import extend from 'assign';
objects.extend = extend;
import findKey from 'findKey';
objects.findKey = findKey;
import findLastKey from 'findLastKey';
objects.findLastKey = findLastKey;
import forIn from 'forIn';
objects.forIn = forIn;
import forInRight from 'forInRight';
objects.forInRight = forInRight;
import forOwn from 'forOwn';
objects.forOwn = forOwn;
import forOwnRight from 'forOwnRight';
objects.forOwnRight = forOwnRight;
import functions from 'functions';
objects.functions = functions;
import has from 'has';
objects.has = has;
import invert from 'invert';
objects.invert = invert;
import isArguments from 'isArguments';
objects.isArguments = isArguments;
import isArray from 'isArray';
objects.isArray = isArray;
import isBoolean from 'isBoolean';
objects.isBoolean = isBoolean;
import isDate from 'isDate';
objects.isDate = isDate;
import isElement from 'isElement';
objects.isElement = isElement;
import isEmpty from 'isEmpty';
objects.isEmpty = isEmpty;
import isEqual from 'isEqual';
objects.isEqual = isEqual;
import isFinite from 'isFinite';
objects.isFinite = isFinite;
import isFunction from 'isFunction';
objects.isFunction = isFunction;
import isNaN from 'isNaN';
objects.isNaN = isNaN;
import isNull from 'isNull';
objects.isNull = isNull;
import isNumber from 'isNumber';
objects.isNumber = isNumber;
import isObject from 'isObject';
objects.isObject = isObject;
import isPlainObject from 'isPlainObject';
objects.isPlainObject = isPlainObject;
import isRegExp from 'isRegExp';
objects.isRegExp = isRegExp;
import isString from 'isString';
objects.isString = isString;
import isUndefined from 'isUndefined';
objects.isUndefined = isUndefined;
import keys from 'keys';
objects.keys = keys;
import keysIn from 'keysIn';
objects.keysIn = keysIn;
import mapValues from 'mapValues';
objects.mapValues = mapValues;
import merge from 'merge';
objects.merge = merge;
import methods from 'functions';
objects.methods = methods;
import omit from 'omit';
objects.omit = omit;
import pairs from 'pairs';
objects.pairs = pairs;
import pick from 'pick';
objects.pick = pick;
import transform from 'transform';
objects.transform = transform;
import values from 'values';
objects.values = values;
import valuesIn from 'valuesIn';
objects.valuesIn = valuesIn;

export default objects;
