//  1.1. Extend JS Date object with a method daysTo() which returns number of complete days between any pair of JS date objects: d1.daysTo(d2) should return quantity of complete days from d1 to d2.

const d1 = new Date('2023-12-31T12:00:00'); 
const d2 = new Date('2024-02-02T12:00:00'); 

Date.prototype.msPERDAY = 1000*60*60*24;

Date.prototype.daysTo = function(d) {
    if (!d) {
        return "No Data";
    }
    let diff = Math.abs(d.getTime() - this.getTime());
    return Math.floor((diff)/this.msPERDAY); 
};  


var days = d2.daysTo(d1);

if (days > 0) 
    console.log(`${days} days till date ${d1.toLocaleDateString()}`); 
else 
    console.log("0 days");