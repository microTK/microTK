var test = require('tape');

test('microTK exists', function (t) {
    t.plan(1);

    t.is(typeof microTK,'function', "microTK is a function.");
});

test('µ exists', function (t) {
    t.plan(2);

    t.is(typeof µ, 'function', "µ is a function.");
    t.isEqual(µ, microTK, "µ is equal to microTK");
});