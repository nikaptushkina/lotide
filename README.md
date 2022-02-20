# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nikaptushkina/lotide`

**Require it:**

`const _ = require('@nikaptushkina/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: prints success/failure message after comparing actual and expected, but is meant for an array
* `assertEqual(actual, expected)`: prints success/failure message after comparing actual and expected
* `assertObjectsEqual(actual, expected)`: takes in two objects and console.logs an appropriate message to the console
* `countLetters(str)`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns counts for a specific subset of those items
* `eqArrays(array1, array2)`: compares arrays
* `eqObjects(object1, object2)`: takes in two objects and returns true or false, based on a perfect match
* `findKey(obj, callback)`: takes in an object and a callback and returns the first key for which the callback returns a truthy value
* `findKeyByValue(obj, objValue)`: takes in an object and a value, and returns the first object key which contains the given value
* `flatten(array)`: flattens array into single-level
* `head(array)`: retrieves first element from array
* `letterPositions(sentence)`: returns all the indices in the string where each character is found
* `map(array, callback)`: returns a new array based on the results of the callback function
* `middle(array)`: returns the middle-most element(s) of the given array
* `tail(array)`: retrieves every element except the head
* `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning
* `without(source, itemsToRemove)`: removes unwanted items from array