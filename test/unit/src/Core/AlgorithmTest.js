"use strict";

define(["js/src/Core/Algorithm"], function (Algorithm) {

    module("Core/Algorithm");

    test("Test the algorithm finds the longest contiguous increasing subsequence", function () {
        var algorithm = new Algorithm();
        algorithm.setSequence([1, 2, 0, 5, -5, 14, 27, 97, 3, 6, 9, 10, 100, 44, -22]);
        deepEqual(algorithm.findLongestIncreasingSubsequence(), [3, 6, 9, 10, 100]);
    });
});