/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

var collections = {};

import all from 'every';
collections.all = all;
import any from 'some';
collections.any = any;
import at from 'at';
collections.at = at;
import collect from 'map';
collections.collect = collect;
import contains from 'contains';
collections.contains = contains;
import countBy from 'countBy';
collections.countBy = countBy;
import detect from 'find';
collections.detect = detect;
import each from 'forEach';
collections.each = each;
import eachRight from 'forEachRight';
collections.eachRight = eachRight;
import every from 'every';
collections.every = every;
import filter from 'filter';
collections.filter = filter;
import find from 'find';
collections.find = find;
import findLast from 'findLast';
collections.findLast = findLast;
import findWhere from 'find';
collections.findWhere = findWhere;
import foldl from 'reduce';
collections.foldl = foldl;
import foldr from 'reduceRight';
collections.foldr = foldr;
import forEach from 'forEach';
collections.forEach = forEach;
import forEachRight from 'forEachRight';
collections.forEachRight = forEachRight;
import groupBy from 'groupBy';
collections.groupBy = groupBy;
import include from 'contains';
collections.include = include;
import indexBy from 'indexBy';
collections.indexBy = indexBy;
import inject from 'reduce';
collections.inject = inject;
import invoke from 'invoke';
collections.invoke = invoke;
import map from 'map';
collections.map = map;
import max from 'max';
collections.max = max;
import min from 'min';
collections.min = min;
import partition from 'partition';
collections.partition = partition;
import pluck from 'pluck';
collections.pluck = pluck;
import reduce from 'reduce';
collections.reduce = reduce;
import reduceRight from 'reduceRight';
collections.reduceRight = reduceRight;
import reject from 'reject';
collections.reject = reject;
import sample from 'sample';
collections.sample = sample;
import select from 'filter';
collections.select = select;
import shuffle from 'shuffle';
collections.shuffle = shuffle;
import size from 'size';
collections.size = size;
import some from 'some';
collections.some = some;
import sortBy from 'sortBy';
collections.sortBy = sortBy;
import toArray from 'toArray';
collections.toArray = toArray;
import where from 'where';
collections.where = where;

export default collections;
