/**
 * Count surface Santa needs.
 *
 * @param {Object} dimensions - Dimensions of the present / box.
 * @param {Number} dimensions.width
 * @param {Number} dimensions.length
 * @param {Number} dimensions.height
 *
 * @returns {Number} - Calculated result of paper needed
 */
module.exports = (function(dimensions) {
    var surfaces = [
        dimensions.length * dimensions.width,
        dimensions.width * dimensions.height,
        dimensions.height * dimensions.length
    ];

    var smallestSurface = Math.min.apply(Math, surfaces)
    var totalSurfaces = surfaces.reduce(function (a, b) { 
        return a+b;
    });

    return smallestSurface + (totalSurfaces * 2);
});
