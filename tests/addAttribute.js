describe('addAttribute()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"></div><div class="classFixture"></div><div class="classFixture"></div><span></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').addAttribute('title', 'test')", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var results = sample.addAttribute('title', 'test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].getAttribute('title')).toEqual('test');
        }
    });

    it("microTK('#idFixtrue').addAttribute('title', 'test')", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var results = sample.addAttribute('title', 'test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].getAttribute('title')).toEqual('test');
        }
    });

    it("microTK('.classFixture').addAttribute('title', 'test')", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        var results = sample.addAttribute('title', 'test');

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].getAttribute('title')).toEqual('test');
        }
    });
});