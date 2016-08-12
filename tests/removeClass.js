describe('removeClass()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue" class="test">Some HTML</p><div class="test classFixture"></div><div class="classFixture test"></div><div class="classFixture test"></div><span class="test">></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').removeClass('test')", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var results = sample.removeClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].classList).not.toContain('test');
        }
    });

    it("microTK('#idFixtrue').removeClass('test')", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var results = sample.removeClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].classList).not.toContain('test');
        }
    });

    it("microTK('.classFixture').removeClass('test')", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        var results = sample.removeClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].classList).not.toContain('test');
        }
    });
});