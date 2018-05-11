function User(){};

User.prototype.printDetails = ()=>{
    console.log(this.getName());
}
User.prototype.getName = function(){
    return "abc";
}

new User().printDetails();