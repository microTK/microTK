describe('remove()', function() {
     beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue">Some HTML</p><div class="classFixture"></div><div class="classFixture"></div><div class="classFixture"></div><span></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').remove()", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('span');
        
        expect(sample.length).toEqual(control.length);
        
        var results = sample.remove();
        expect(results.constructor.name).toEqual("MicroTK");
        expect(document.querySelectorAll('span').length).toEqual(sample.length);
    });

    it("microTK('#idFixtrue').remove()", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');
        
        expect(sample.length).toEqual(control.length);
        
        var results = sample.remove();
        expect(results.constructor.name).toEqual("MicroTK");
        expect(document.querySelectorAll('#idFixtrue').length).toEqual(sample.length);
    });

    it("microTK('.classFixture').remove()", function () {
        var control =  document.querySelectorAll('.classFixture');;
        var sample =  microTK('.classFixture');
        
        expect(sample.length).toEqual(control.length);
        
        var results = sample.remove();
        
        expect(results.constructor.name).toEqual("MicroTK");
        expect(document.querySelectorAll('.classFixture').length).toEqual(sample.length);
    });
});