/**
 * @param {Object[]} operations - Operations of movements (eg. ^>v<)
 * @returns {Object[]} - Coordinates of visited houses (unique, no double values) (eg. [[0,0], [0,1]])
 */
module.exports = (function(operations) {
    // Joining, because [a] is not equal to [a] in Javascript.
    // [1, 3] != [1, 3] but '1,3' == '1,3'
    // Ugly solution to an ugly problem
    var coordinates = [[0,0].join(',')];

    var x = 0;
    var y = 0;

    for (var i in operations) {
        switch (operations[i]) {
            case '>':
                x += 1;
                break;

            case '<':
                x -= 1;
                break;

            case '^':
                y += 1;
                break;

            case 'v':
                y -= 1;
                break;
        }

        if (coordinates.indexOf([x, y].join(',')) === -1)
            coordinates.push([x, y].join(','));
    }

    return coordinates;
});
