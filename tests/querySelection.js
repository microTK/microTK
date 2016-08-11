describe('querySelection', function() {
    it("microTK exists", function () {
        expect(typeof microTK).toEqual('function');
    });

    it("µ exists and is equal to microTK", function () {
        expect(µ).toEqual(microTK);
    });
});