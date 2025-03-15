/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let numStr = "5"; // Add variable str to call out "5"
console.log(typeof numStr);
let num = Number(numStr); // Add variable num to convert "5" to number 5
console.log(typeof num);
let result = num - 2; // Use num to perform the math problem
console.log("The result is: " + result); // This provides the same result but handles 5 as a number instead of a string

let falseStr = "false"; // set a variable to equal the "false" string
console.log(typeof falseStr);
falseStr = (falseStr === false); // Set the falseStr to a Boolean stating if "false" equals false
console.log(typeof falseStr);
let isValid = Boolean(falseStr);
if (isValid) {
    console.log("This is valid!");
} // The code no longer outputs because the Boolean is actaully false rather than "false" (which is truthy)

let ageInput = "25"; // Call out ageInput as a string
console.log(typeof ageInput);
let ageNum = Number(ageInput); // Change ageInput to number
console.log(typeof ageNum);
let totalAge = ageNum + 5; // Use ageNum in the math problem
console.log("Total Age: " + totalAge);

// Implicit Conversion Example
let testScore = 82; // Score is entered as a number
console.log(typeof testScore);
let grade = ("Your grade is " + testScore + "/100"); // Score is converted to string
console.log(typeof grade);
console.log(grade); // Grade is shown as a whole string

// Explicit Conversion Example
let extraCreditInput = 0; // Extra credit is entered as a number
console.log(typeof extraCreditInput);
let extraCreditBool = Boolean(extraCreditInput); // Extra credit is converted to a Boolean
console.log(typeof extraCreditBool);
if (!extraCreditBool) {
  console.log("You did not earn any extra credit.");
}
