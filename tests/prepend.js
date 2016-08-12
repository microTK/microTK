describe('prepend()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"><span></span></div><div class="classFixture"></div><div class="classFixture"></div><span></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').prepend(element)", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');
        var element = document.createElement("div");
        element.classList.add("testDiv");

        var results = sample.prepend(element);

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].firstChild).toEqual(element); 
        }
    });

    it("microTK('#idFixtrue').prepend(element)", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        var element = document.createElement("div");
        element.classList.add("testDiv");
        
        var results = sample.prepend(element);

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].firstChild).toEqual(element);
        }
    });

    it("microTK('.classFixture').prepend(element)", function () {
        var control = document.querySelectorAll('.classFixture');
        var sample = microTK('.classFixture');
        var element = document.createElement("div");
        element.classList.add("testDiv");
        
        var results = sample.prepend(element);

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toEqual(control.length);
        for (var i = 0; i < sample.length; i++) {
            expect(control[i].firstChild).toEqual(element);
        }
    });
});