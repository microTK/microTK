describe('each()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"></div><div class="classFixture"></div><div class="classFixture"></div><span></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').each(function(){ counter++})", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var counter = 0;
        var results = sample.each(function(){ counter++});

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        expect(counter).toEqual(control.length);
    });

    it("microTK('#idFixtrue').each(function(){ counter++})", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var counter = 0;
        var results = sample.each(function(){ counter++});

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        expect(counter).toEqual(control.length);
    });

    it("microTK('.classFixture').each(function(){ counter++})", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        var counter = 0;
        var results = sample.each(function(){ counter++});

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        expect(counter).toEqual(control.length);
    });
});