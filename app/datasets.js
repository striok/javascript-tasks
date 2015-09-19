'use strict';

module.exports = {
    clamp: function () {

        var number = -1,
            lower = 3,
            upper = 7;

        return [number, lower, upper];
    },

    inRange: function () {

        var number = 4,
            start = 3,
            end = 6;

        return [number, start, end];
    },

    random: function () {

        var lower = 4,
            upper = 7,
            floating = true;

        return [lower, upper, floating];
    }
};
