describe('toggleClass()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"></div><div class="classFixture"></div><div class="classFixture"></div><span></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').toggleClass('test')", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var results = sample.toggleClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].className).toContain('test');
        }

        sample.toggleClass('test');
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].className).not.toContain('test');
        }
    });

    it("microTK('#idFixtrue').toggleClass('test')", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var results = sample.toggleClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].className).toContain('test');
        }

        sample.toggleClass('test');
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].className).not.toContain('test');
        }
    });

    it("microTK('.classFixture').toggleClass('test')", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        var results = sample.toggleClass('test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].className).toContain('test');
        }

        sample.toggleClass('test');
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].className).not.toContain('test');
        }
    });
});