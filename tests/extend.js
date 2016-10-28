describe('extend()', function() {

    it("microTK.extend ({}, control)", function () {
        var control =  {
            test: "value"
        };

        var results = microTK.extend({}, control);

        expect(results).toEqual({
            test: "value"
        });
    });

     it("microTK.extend (control, {})", function () {
        var control =  {
            test: "value"
        };

        var results = microTK.extend({}, control);

        expect(results).toEqual({
            test: "value"
        });
    });

    it("microTK.extend (control, sample) //no overwrite", function () {
        var control =  {
            test: "value"
        };
        var sample =  {
            test2: "value2"
        };
        var results = microTK.extend(sample, control);

        expect(results).toEqual({
            test: "value",
            test2: "value2"
        });
    });

    it("microTK.extend (sample, control) //overwrite", function () {
        var control =  {
            test: "value"
        };
        var sample =  {
            test: "value2"
        };
        var results = microTK.extend(control, sample);

        expect(results).toEqual({
            test: "value2"
        });
    });
});