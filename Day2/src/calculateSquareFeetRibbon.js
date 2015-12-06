/**
 * @param {Object} dimensions - Dimensions of the present / box.
 * @param {Number} dimensions.width
 * @param {Number} dimensions.length
 * @param {Number} dimensions.height
 *
 * @returns {Number} - Calculated result of ribbon needed
 */
module.exports = (function(dimensions) {
    var cubicFeet = (dimensions.width * dimensions.length * dimensions.height);

    
    var dimensionsSorted = [];

    for (var i in dimensions) {
        dimensionsSorted.push(dimensions[i]);
    }

    dimensionsSorted = dimensionsSorted.sort(function(a, b) {
        return a - b;
    })

    var wrap = dimensionsSorted[0] * 2 + dimensionsSorted[1] * 2;

    return cubicFeet + wrap;
});
