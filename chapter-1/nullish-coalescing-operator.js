/** 
 * If value is null or undefined, the expression evaluates to fallbackValue.
 * If value is any other value, the expression evaluates to value.
*/

const name = null ?? "Anonymous";  
const age = 0 ?? 18;             

console.log('name:', name); // result is "Anonymous"
console.log('age:', age);  // result is 0 (since 0 is neither null nor undefined)