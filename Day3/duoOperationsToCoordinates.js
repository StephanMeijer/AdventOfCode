/**
 * @param {Object[]} operations - Operations of movements (eg. ^>v<)
 * @returns {Object[]} - Coordinates of visited houses (unique, no double values) (eg. [[0,0], [0,1]])
 */
module.exports = (function(operations) {
    // Joining, because [a] is not equal to [a] in Javascript.
    // [1, 3] != [1, 3] but '1,3' == '1,3'
    // Ugly solution to an ugly problem
    var coordinates = [[0,0].join(',')];

    var x, y, currentSanta;

    current = {
        0: { // Santa
            x: 0,
            y: 0
        },
        1: { // RoboSanta
            x: 0,
            y: 0,
        }
    };

    for (var i in operations) {
        currentSanta = i % 2;

        switch (operations[i]) {
            case '>':
                current[currentSanta].x += 1;
                break;

            case '<':
                current[currentSanta].x -= 1;
                break;

            case '^':
                current[currentSanta].y += 1;
                break;

            case 'v':
                current[currentSanta].y -= 1;
                break;
        }

        x = current[currentSanta].x;
        y = current[currentSanta].y;

        if (coordinates.indexOf([x, y].join(',')) === -1)
            coordinates.push([x, y].join(','));
    }

    return coordinates;
});
