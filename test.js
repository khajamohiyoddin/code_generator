var assert = require("assert");
var getUser = require("./app/user").getUser;
describe("app", function() {
    describe("getUser", function() {
        it("should return 40 when passing value 20, 20",  function(done) {
            getUser(20,20)
                .then((result)=>{
                    assert.equal(result,40);
                    done();
                });
           
        });
        // it("should return 20  when passing value for a 10", function(done) {
        //     getUser(10)
        //         .then((result)=>{

        //             assert.equal(result,20);
        //             done();
        //         });
           
        // });
    });
});