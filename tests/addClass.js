describe('addClass()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"></div><div class="classFixture"></div><div class="classFixture"></div><span></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').addClass('test')", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var results = sample.addClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(sample[i].className).toContain('test');
        }
    });

    it("microTK('#idFixtrue').addClass('test')", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var results = sample.addClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(sample[i].className).toContain('test');
        }
    });

    it("microTK('.classFixture).addClass('test')", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        var results = sample.addClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(sample[i].className).toContain('test');
        }
    });
});