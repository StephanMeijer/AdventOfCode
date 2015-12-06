exports.operationsToCoordinates = function(test) {
    var oTC = require('./operationsToCoordinates.js');

    test.expect(3);

    test.deepEqual(
        oTC('^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v'),
        ['0,0', '0,1']
    );
    
    test.deepEqual(
        oTC('>>>>^<<vv'),
        ['0,0', '1,0', '2,0', '3,0', '4,0', '4,1', '3,1', '2,1', '2,-1']
    );

    test.deepEqual(
        oTC('>^<v>^<v>^<v>^<v>^<v>^<v>^<v>^<v'),
        ['0,0', '1,0', '1,1', '0,1']
    );

    test.done();
};
