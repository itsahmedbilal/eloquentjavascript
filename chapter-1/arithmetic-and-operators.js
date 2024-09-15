/** Arithmetic Operators
 * Basic Arithmetic: Operators like +, -, *, /, and % (modulus) for performing arithmetic.
 */

const x = 2; // Initialize variable x with value 2
const y = 10; // Initialize variable y with value 10

console.log(x + y); // Addition: Outputs the sum of x and y
console.log(x - y); // Subtraction: Outputs the difference when y is subtracted from x
console.log(x * y); // Multiplication: Outputs the product of x and y
console.log(x % y); // Modulus: Outputs the remainder when x is divided by y
console.log(x / y); // Division: Outputs the quotient when x is divided by y

// Concatenation: Using the + operator with strings joins them (e.g., "Hello" + " World").

console.log("Hello" + " World!");

/**Type Coercion: JavaScript sometimes automatically converts types (e.g., number to string or vice versa).
Example: 1 + "2" results in "12" (string concatenation). */

console.log(11 + "22"); //1122
console.log(11 * "22"); //242
console.log(11 - "22"); //-11
console.log(11 * "five"); //NaN
console.log(11 + "five"); // 11five
console.log(11 / "five"); //NaN
console.log(11 % "five"); //NaN
console.log(11 - "five"); //NaN
console.log(false * 123); // 0 because false == 0;
console.log(true * 123); //  123 because true == 1;
