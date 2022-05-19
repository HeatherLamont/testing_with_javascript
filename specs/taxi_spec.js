const assert = require('assert');
const Taxi = require('../taxi');


describe("Taxi", function(){

    let taxi;
    
    beforeEach(function(){
        taxi = new Taxi("Toyota", "Prius");
    });
    
    it("should have a manufacturer",function(){
        assert.strictEqual(taxi.manufacturer, "Toyota");
    });
    it("should have a model", function(){
        assert.strictEqual(taxi.model, 'Prius');
    });
    
    describe("with passengers", function(){

        // let passenger;
        // // let listOfPassengers;

        // beforeEach(function(){
        //     passenger = "Heather";
        // //     taxi = new Taxi("Toyota", "Prius", ["John", "Sean", "Abi", "Anna"])
        // })
        it("should start with no passengers", function(){
            assert.deepStrictEqual(taxi.passengers, []);
        });
        it ("should get number of passengers", function(){
            assert.deepStrictEqual(taxi.numberOfPassengers(), 0);
        })
        it("should add passenger", function(){
            taxi.addPassenger("Heather");
            assert.strictEqual(taxi.numberOfPassengers(), 1);
        })
        it("should remove passenger by name", function(){
            taxi.addPassenger("Heather",);
            taxi.addPassenger("Craig",);
            taxi.removePassengerByName("Heather");
            assert.deepStrictEqual(["Craig"], taxi.passengers);
        })
        it ("should remove all passengers", function(){
            taxi.addPassenger("Heather", "Craig");
            taxi.removeAllPassengers();
            assert.strictEqual(taxi.numberOfPassengers(), 0);
        })
    });
});