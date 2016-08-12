describe('removeAttribute()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue" title="true">Some HTML</p><div class="classFixture" title="true"></div><div class="classFixture" title="true"></div><div class="classFixture" title="true"></div><span title="true"></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').removeAttribute('title')", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var results = sample.removeAttribute('title');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].hasAttribute('title')).not.toBe(true)
        }
    });

    it("microTK('#idFixtrue').removeAttribute('title')", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var results = sample.removeAttribute('title');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].hasAttribute('title')).not.toBe(true)
        }
    });

    it("microTK('.classFixture').removeAttribute('title')", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        var results = sample.removeAttribute('title');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].hasAttribute('title')).not.toBe(true)
        }
    });
});