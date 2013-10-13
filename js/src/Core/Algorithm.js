"use strict";

define([], function () {

    return function () {

        var sequence;

        this.setSequence = function (theSequence) {
            sequence = theSequence;
        };

        this.findLongestIncreasingSubsequence = function () {
            var i, j, proposals = [], proposal, longestProposal;
            for (i = 0; i < sequence.length; i += 1) {
                proposal = [];
                proposal.push(sequence[i]);
                for (j = i + 1; j < sequence.length; j += 1) {
                    if (sequence[j] > proposal[proposal.length - 1]) {
                        proposal.push(sequence[j]);
                    } else {
                        proposals.push(proposal);
                        break;
                    }
                }
            }
            longestProposal = proposals[0];
            for (i = 1; i < proposals.length; i += 1) {
                if (proposals[i].length > longestProposal.length) {
                    longestProposal = proposals[i];
                }
            }
            return longestProposal;
        };

    };

});