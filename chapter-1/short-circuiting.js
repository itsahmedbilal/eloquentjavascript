/** 
 * Logical OR (||):
 * If the first operand is truthy, it immediately returns that value.
 * If the first operand is falsy, it evaluates and returns the second operand.
*/
const x = 1;
const y = 2;
console.log(false || x + y); // return 3;
console.log(true || x + y); // return true;


/** 
 * Logical AND (&&):
 * If the first operand is falsy, JavaScript stops and returns that value (no need to check the second operand).
 * If the first operand is truthy, it evaluates and returns the second operand.
*/

console.log(false && x + y); // return 3;
console.log(true && x + y); // return true;
