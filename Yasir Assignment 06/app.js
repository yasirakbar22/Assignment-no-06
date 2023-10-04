// (Chapter # FUNCTION)...................

// (Q1)

// var now = new Date();
// console.log(now)

// // (Q2)

// function greetUser(firstName, lastName) {
//     var fullName = firstName + ' ' + lastName;
//     console.log("Hello, " + fullName + '!');
//   }
  
//   greetUser("John", "Doe");
  
// (Q3)

// function addNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
    
//     var sum = num1 + num2;
    
//     console.log("The sum of the two numbers is: " + sum);
    
//     return sum;
//   }
  
//   addNumbers();
  
// (Q4)

// function calculate(num1, num2, operator) {
//   let result;
  
//   if (operator === '+') {
//     result = num1 + num2;
//   } else if (operator === '-') {
//     result = num1 - num2;
//   } else if (operator === '*') {
//     result = num1 * num2;
//   } else if (operator === '/') {
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       return "Division by zero is not allowed.";
//     }
//   } else {
//     return "Invalid operator. Please use '+', '-', '*', or '/'.";
//   }

//   console.log("Result: " + result);
//   return result;
// }

// var num1 = 10;
// var num2 = 5;
// var operator = '+';
// calculate(num1, num2, operator); 

// (Q5)

// function squareNumber(number) {
//   var result = number * number;
//   console.log("The square of " + number + " is: " + result);
//   return result;
// }


// var number = 5;
// squareNumber(number);

// (Q6)

// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//       result *= i;
//     }
//     console.log("The factorial of " + number + " is: " + result);
//     return result;
//   }
// }

// var number = 5;
// factorial(number); 

//  (Q7)

// function countNumbers(start, end) {
//   if (start <= end) {
//     for (let i = start; i <= end; i++) {
//       console.log("Counting: " + i);
//     }
//   } else {
//     console.log("Start number should be less than or equal to the end number.");
//   }
// }

// var startNumber = 1;
// var endNumber = 5;
// countNumbers(startNumber, endNumber);

// (Q8)

// (Not understand)

// (Q9)

// function calculateRectangleAreaWithValues(width, height) {
//   var area = width * height;
//   console.log("Area of the rectangle (using values): " + area);
//   return area;
// }

// calculateRectangleAreaWithValues(5, 7);

// function calculateRectangleAreaWithVariables() {
//   var width = arguments[0];
//   var height = arguments[1];
//   var area = width * height;
//   console.log("Area of the rectangle (using variables): " + area);
//   return area;
// }

// var rectWidth = 9;
// var rectHeight = 7;
// calculateRectangleAreaWithVariables(rectWidth, rectHeight);

// (Q10)

// (Not understand)

// (Q11)

// function capitalizeWords(str) {
//   var words = str.split(" ");
//   var capitalizedWords = [];

//   for (let word of words) {
//     var firstLetter = word.charAt(0).toUpperCase();
//     var restOfWord = word.slice(1).toLowerCase();
//     var capitalizedWord = firstLetter + restOfWord;
//     capitalizedWords.push(capitalizedWord);
//   }

//   var result = capitalizedWords.join(" ");
//   console.log("Capitalized String: " + result);
//   return result;
// }

// var inputString = 'the quick brown fox';
// capitalizeWords(inputString);


// (Q12)

// function findLongestWord(str) {
//   var words = str.split(" ");
//   var longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   console.log("Longest Word: " + longestWord);
//   return longestWord;
// }

// var inputString = 'Web Development Tutorial';
// findLongestWord(inputString); 

// (Q13)

// function countLetterOccurrences(str, letter) {
//   var count = 0;
  
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
  
//   console.log("The letter '" + letter + "' appears " + count + " times in the string.");
//   return count;
// }

// var inputString = "syed muhammad saifullah";
// var targetLetter = "a";
// countLetterOccurrences(inputString, targetLetter);


// (Q14)

// (Skiped)

