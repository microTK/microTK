describe('merge()', function() {

    it("microTK.merge ({}, control)", function () {
        var control =  {
            test: "value"
        };

        var results = microTK.merge({}, control);

        expect(results).toEqual({
            test: "value"
        });
    });

     it("microTK.merge (control, {})", function () {
        var control =  {
            test: "value"
        };

        var results = microTK.merge({}, control);

        expect(results).toEqual({
            test: "value"
        });
    });

    it("microTK.merge (control, sample) //no overwrite", function () {
        var control =  {
            test: "value"
        };
        var sample =  {
            test2: "value2"
        };
        var results = microTK.merge(sample, control);

        expect(results).toEqual({
            test: "value",
            test2: "value2"
        });
    });

    it("microTK.merge (sample, control) //overwrite", function () {
        var control =  {
            test: "value"
        };
        var sample =  {
            test: "value2"
        };
        var results = microTK.merge(control, sample);

        expect(results).toEqual({
            test: "value2"
        });
    });
});