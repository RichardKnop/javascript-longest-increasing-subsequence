"use strict";

define(["Core/Algorithm"], function (Algorithm) {

    return function () {

        this.run = function () {
            var algorithm = new Algorithm();

            document.getElementById("calculate").addEventListener("click", function () {
                var input = document.getElementById("array").value,
                    sequence = input.split(",").map(function (single) {
                        return single.replace(" ", "");
                    }),
                    resultEl = document.getElementById("result"),
                    result;
                try {
                    algorithm.setSequence(sequence);
                    result = algorithm.findLongestIncreasingSubsequence();
                    resultEl.innerHTML = "Result: [" + result.join(", ") + "]";
                } catch (e) {
                    resultEl.innerHTML = e;
                }
                return false;
            }, false);
        };

    };

});