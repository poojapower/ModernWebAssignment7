/*eslint-env browser*/

//STEP 1
function clickButton(){
    "use strict";
    alert("I have been clicked");
}

//STEP 2
var button2=window.document.getElementById("btn2");
button2.onclick=function(){
    "use strict";
    alert("I have been clicked");
};

  
//STEP 3

var myButton=window.document.getElementById("btn3");
function showButtonAlert(){
    "use strict";
    alert("I have been clicked");
}
myButton.addEventListener("click",showButtonAlert);

//STEP 4

 
var myButton=window.document.getElementById("btn3");
myButton.addEventListener("click",function(){
    "use strict";
    alert("I have been clicked");
});

 
//STEP 5

window.addEventListener("load",function(){
    var myButton=window.document.getElementById("btn3");
    myButton.addEventListener("click",function(){
        "use strict";
        alert("I have been clicked");
    });
});
