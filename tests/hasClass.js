describe('hasClass()', function() {
    beforeEach(function() {
       document.body.innerHTML = '<p id="idFixtrue" class="test" data-test="true">Some HTML</p><div class="classFixture test" data-test="true"><span></span></div><div class="classFixture test"></div><div class="classFixture" data-test="true"></div><span data-test="true" class="test"></span>';
    });

    afterEach(function() {
        document.body.innerHTML = '';
    });

    it("microTK('span').hasClass(element)", function () {
        var control =  document.querySelectorAll('span');
        var sample =  microTK('span');

        var count = 0;
        var results = sample.hasClass('test', function(e){
            count++;
            expect(e.classList).toContain('test');
        });

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toBe(control.length);
        expect(count).toBe(1);
    });

    it("microTK('#idFixtrue').hasClass(element)", function () {
        var control =  document.querySelectorAll('#idFixtrue');
        var sample =  microTK('#idFixtrue');

        var count = 0;
        var results = sample.hasClass('test', function(e){
            count++;
            expect(e.classList).toContain('test');
        });

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toBe(control.length);
        expect(count).toBe(1);
    });

    it("microTK('.classFixture').hasClass(element)", function () {
        var control = document.querySelectorAll('.classFixture');
        var sample = microTK('.classFixture');

        var count = 0;
        var results = sample.hasClass('test', function(e){
            count++;
             expect(e.classList).toContain('test');
        });

        expect(results.constructor.name).toEqual("MicroTK");
        expect(sample.length).toBe(control.length);
        expect(count).toBe(2);
    });
});