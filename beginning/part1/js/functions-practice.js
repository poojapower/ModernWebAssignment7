halfNumber(10);

squareNumber(4);

percentOf(150,300)
 
findModulus(13,5)

//STEP 1
function halfNumber(number){
    "use strict";
 var halfNumber=number/2;
 console.log("Half of "+number+" is "+halfNumber);
}


//STEP 2
function squareNumber(number){
    "use strict";
    var squared=number*number;
    console.log("The result of squaring the number "+number+" is "+squared);

}


//STEP 3

function percentOf(value,outOf){
    "use strict";
    var percent=value/outOf*100;
    console.log(value +" is "+percent+"% of "+outOf);

}

//STEP 4


function findModulus(dividend,divisor){
    "use strict";
    
    var modulus=dividend%divisor;
    console.log(modulus +" is the modulus of "+dividend+" and "+divisor);

}

//STEP 5
var list=prompt("Enter the numbers","").split(",");
sumAll(list);


function sumAll(list) {
    "use strict";
        var sum = 0;
        for (var i=0; i < list.length; i++) {
            if(isNaN(list[i])){
            alert("Please enter valid numbers");
            return;
        }else{
            sum += parseInt(list[i]);
        }
        }
    
        alert("Addition of all Numbers : " + sum);
  }

