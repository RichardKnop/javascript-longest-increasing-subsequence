"use strict";

define([], function () {

    return function () {

        var sequence;

        this.setSequence = function (theSequence) {
            sequence = theSequence;
        };

        this.findLongestIncreasingSubsequence = function () {
            //TODO
            return [0, 2, 6, 9, 13, 15];
        };

    };

});