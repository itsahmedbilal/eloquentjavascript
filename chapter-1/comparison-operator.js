/** Comparison Operators
 * Equality (==): Compares values after type coercion (e.g., 5 == "5" is true).
 * Strict Equality (===): No type conversion; both type and value must be the same (e.g., 5 === "5" is false).
 * Other Comparison: Operators like >, <, >=, <= for comparing values.
 */

// Equality (==)
console.log(5 == "5"); // true: Values are equal after type coercion
console.log(0 == false); // true: Values are equal after type coercion
console.log(1 == true); // true: Values are equal after type coercion

// Strict Equality (===)
console.log(5 === "5"); // false: Values are not equal because types are different
console.log(0 === false); // false: Values are not equal because types are different

// Other Comparison Operators
console.log(10 > 5); // true: 10 is greater than 5
console.log(10 < 5); // false: 10 is not less than 5
console.log(10 >= 10); // true: 10 is greater than or equal to 10
console.log(10 <= 5); // false: 10 is not less than or equal to 5