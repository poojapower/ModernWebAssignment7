/*eslint-env browser*/


function display_menu() {
    "use strict";
    window.console.log("Inventory System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all Products");
    window.console.log("update - Update a Product");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {
    "use strict";
    var i = 1;
    inventory.forEach(function (product) {
        window.console.log(String(i) + ". " + product);
        i += 1;
    });
    window.console.log("");
}
function update(inventory) {
    "use strict";
    var i=0;
    var item =parseFloat(window.prompt("Enter the item SKU",""));
    inventory.forEach(function(product){
      if(product[0]===item){
      var new_stock = window.prompt("Enter new stock quantity","");
      
      product[2]=new_stock;
      window.console.log(product[i] + " was updated.");
      
      }
      

      i += 1;
    });
    
  
    window.console.log("");
}

function main() {
    "use strict";
    var inventory, command;
    
    display_menu();
    inventory=[[4824,"Shirt",10,15.99],[6343, "Jeans",22,39.99],[3223 ,"Socks",36,9.99],[2233 ,"Hat",12,14.99],[9382,"Jacket",5,49.99]];
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();