describe('hasAttribute()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue" data-test="true">Some HTML</p><div class="classFixture" data-test="true"><span></span></div><div class="classFixture"></div><div class="classFixture" data-test="true"></div><span data-test="true"></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').hasAttribute(element)", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');

        var count = 0;
        var results = sample.hasAttribute('data-test', function(e){
            count++;
            expect(e.hasAttribute('data-test')).toBe(true);
        });

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toBe(control.length);
        expect(count).toBe(1);
    });

    it("microTK('#idFixtrue').hasAttribute(element)", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');

        var count = 0;
        var results = sample.hasAttribute('data-test', function(e){
            count++;
            expect(e.hasAttribute('data-test')).toBe(true);
        });

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toBe(control.length);
        expect(count).toBe(1);
    });

    it("microTK('.classFixture').hasAttribute(element)", function () {
        var control = document.querySelectorAll('.classFixture');
        var sample = microTK('.classFixture');

        var count = 0;
        var results = sample.hasAttribute('data-test', function(e){
            count++;
            expect(e.hasAttribute('data-test')).toBe(true);
        });

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toBe(control.length);
        expect(count).toBe(2);
    });
});