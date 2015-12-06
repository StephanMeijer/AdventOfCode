/**
 * @param {string} dimensionString - String of dimensions (eg. 4x6x2)
 * @returns {Object} - dimensions in a nice object (eg. { length: 4, width: 6, height: 2})
 */
module.exports = (function(dimensionString) {
    var dimensions = dimensionString.split('x');

    return {
        length: parseInt(dimensions[0]),
        width: parseInt(dimensions[1]),
        height: parseInt(dimensions[2])
    };
});
