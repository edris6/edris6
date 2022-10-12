"use strict";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("kidding");
}
greet(null);
