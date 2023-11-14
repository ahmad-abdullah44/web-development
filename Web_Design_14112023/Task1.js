//Complete the following steps to create: Are You Old Enough?
/*
- Declare a variable age using the var keyword and set it to number 10.
- Add an if statement that checks if the value of the age variable is greater than or equal to number 65. Inside the if block, console.log the sentense: "You get your income from your pension".
- Add an "else if", where you'll check if the value of the age is less than 65 and greather than or equal 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".
*/

var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension");
}
else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
}
else if (age<18) {
    console.log('You get an allowance');
}
else{
    console.log('The value of the variable is not numerical');
}


