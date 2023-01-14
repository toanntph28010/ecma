//object literal
var stringobject= {
    value: "polytechnic", 
    length: 11, 
    toUpperCase: function(){

    }
}
// object contructor funcion
var MyString = function(){
    this.value ="poly",
    this.toUpperCase= function(){
        return this.value.toUpperCase()
    }
}
///////////////////////////////////
var sinhvien = {
    name :"nguyen trong toan",
    age : 19,
    hometown : "ha noi",
    showInfo: function(){
        return this.name + this.age+this.hometown
    }
    }


