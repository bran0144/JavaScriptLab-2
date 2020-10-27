"use strict";


// 1. isHometown
function isHometown(town){
    return town==="San Francisco";
}
// Define your function here


// 2. getFullName  const message = `Hello ${name}!`;

function getFullName(first_name, last_name){
    return `${first_name} ${last_name}`;
}
// Define your function here


// 3. calculateTotal

function calculateTotal(base_price, state, tax){
    tax=0.05;
    let subtotal = base_price * (1 + tax);
    let fee = 0;
    if (state == 'CA')
        fee = 0.03 * subtotal;
    else if (state == 'PA')
        fee = 2;
    else if (state == 'MA')
        if (base_price <= 100)
            fee = 1;
        else
            fee = 3;

    return subtotal + fee;
}

console.log(calculateTotal(20, 'CA', 0.9))