/*Task 2 Switch Statement - 14 Nov, 2023

On the next line, define a new variable, name it a day, and set its value to "Sunday".
- Start coding a switch statement, passing the day variable as the expression to evaluate.
- Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break'; on the line below.
- At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').
- Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.
*/

var day = "Sunday";

switch(day) {
    case 'Monday':
        console.log("Do something mond");
        break;
    case 'Tuesday':
        console.log("Do something tues");
        break;
    case 'Wednesday':
        console.log("Do something wed");
        break;
    case 'Thursday':
        console.log("Do something thurs");
        break;
    case 'Friday':
        console.log("Do something frid");
        break;
    case 'Saturday':
        console.log("Do something sat");
        break;
    case 'Sunday':
        console.log("Do something sun");
        break;
    default:
        console.log('THere is no such day')
}