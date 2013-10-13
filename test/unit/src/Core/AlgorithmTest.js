"use strict";

define(["js/src/Core/Algorithm"], function (Algorithm) {

    module("Core/Algorithm");

    test("Test that algorithm finds the longest increasing subsequence", function () {
        var algorithm = new Algorithm();
        algorithm.setSequence([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]);
        deepEqual(algorithm.findLongestIncreasingSubsequence(), [0, 2, 6, 9, 13, 15]);
    });
});