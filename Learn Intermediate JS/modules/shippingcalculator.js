//shippingcalculator.js


//in shipingcalculator.js
//use the rate and zone to calculate the cost
//cost = rate.standard + (rate.perDistance + weight)



// const rate = {
//     standard: 14,
//     perDistance: 4
// };

// const zone = {
//     local: 1.0,
//     remote: 1.5
// };

const { rate, zone } = require("./config.js");

function calculateShipping(weight, zoneType) {
        return rate.standard + (rate.perDistance * weight) * zone[zoneType];
}

module.exports = { calculateShipping };


