exports.calculateSquareFeetPaper = function(test) {
    var cSFP  = require('./calculateSquareFeetPaper.js');

    test.expect(2);

    test.equal(58, cSFP({ width: 2, length: 3, height: 4 }));
    test.equal(43, cSFP({ width: 1, length: 1, height: 10 }));

    test.done();
};

exports.transformDimensionStringIntoObject = function(test) {
    var tDSIO = require('./transformDimensionStringIntoObject.js');

    test.expect(3);

    test.deepEqual(
        tDSIO('10x23x65'),
        { length: 10, width: 23, height: 65 }
    );

    test.deepEqual(
        tDSIO('3210x654x987'),
        { length: 3210, width: 654, height: 987 }
    );

    test.deepEqual(
        tDSIO('123x342x5678'),
        { length: 123, width: 342, height: 5678 }
    );

    test.done();
};
