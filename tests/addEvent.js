describe('addEvent()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"></div><div class="classFixture"></div><div class="classFixture"></div><span></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').addEvent('click', function(){ counter++})", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var counter = 0;
        var results = sample.addEvent('click', function(){ counter++});

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
           sample[i].click();
        }
        expect(counter).toEqual(control.length);
    });

    it("microTK('#idFixtrue').addEvent('click', function(){ counter++})", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var counter = 0;
        var results = sample.addEvent('click', function(){ counter++});

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
           sample[i].click();
        }
        expect(counter).toEqual(control.length);
    });

    it("microTK('.classFixture').addEvent('click', function(){ counter++})", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        var counter = 0;
        var results = sample.addEvent('click', function(){ counter++});

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
           sample[i].click();
        }
        expect(counter).toEqual(control.length);
    });
});