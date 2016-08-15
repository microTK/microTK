describe('prototype', function() {
    it("MicroTK.prototype.test = 'test'", function () {
        MicroTK.prototype.test = 'test'

        expect(new MicroTK().test).toEqual('test');
        expect(µ().test).toEqual('test');
    });
});