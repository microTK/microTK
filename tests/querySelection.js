describe('querySelection', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"></div><div class="classFixture"></div><div class="classFixture"></div>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK exists", function () {
        expect(typeof microTK).toEqual('function');
    });

    it("µ exists and is equal to microTK", function () {
        expect(µ).toEqual(microTK);
    });

     it("microTK('body')", function () {
        var control =  document.querySelectorAll('body');
        var results =  microTK('body');

        expect(results[0]).toEqual(control[0]);
        expect(results.length).toEqual(control.length);
    });

     it("microTK('#idFixtrue')", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var results =  microTK('#idFixtrue');

        expect(results[0]).toEqual(control[0]);
        expect(results.length).toEqual(control.length);
    });

     it("microTK('.classFixture')", function () {
        var control =  document.querySelectorAll('.classFixture');
        var results =  microTK('.classFixture');

        expect(results[0]).toEqual(control[0]);
        expect(results.length).toEqual(control.length);
    });

});