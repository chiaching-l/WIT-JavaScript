//shippingcost.js

const { calculateShipping } = require("./shippingcalculator.js");

console.log(calculateShipping(5, "local"));
// 14 + (4 * 5) * 1.0 = 34

console.log(calculateShipping(5, "remote"));
// 14 + (4 * 5) * 1.5 = 44