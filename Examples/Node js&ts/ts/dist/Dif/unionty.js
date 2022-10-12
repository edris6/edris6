"use strict";
function kgtolbs(weight) {
    if (typeof weight == 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
