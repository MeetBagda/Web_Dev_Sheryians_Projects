// iife example:
var bankAccount = (function(){
    var bankBalance = 100000;

    return {
        getter: function(){
            console.log("Current Balance : " + bankBalance)
        },
        setter: function(amount){
            bankBalance = amount;
        }
    }
})();

var mailBox = (function(){
    var inbox = 0;

    return {
        getter: function(){
            console.log("Inbox : " + inbox);
        },
        setter: function(val){
            inbox += val;
        }
    };
})();

// ----------------------------------------------------------------

// prototypal inheritance:
var human = {
    canFly: false,
    canEat: true
}
var student = {
    canMakeAmazingWebsites: true,
    canMakeAwesomeAnimations: true
}
student.__proto__ = human;
// ----------------------------------------------------------------
// using spread operator
var human = {
    canFly: false,
    canEat: true
}
var student = {
    ...human,
    canMakeAmazingWebsites: true,
    canMakeAwesomeAnimations: true
}











