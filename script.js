//assignment 21 to 40
//Q.1
//var myName = userinput.toLowerCase();
//Q2.
// var x = "iam teaChing iN gOvt boYs hiGH sChOOl huMayoon";
// x = x.toLowerCase();
// document.write(x);

//Q.3
// var y="iam teaching in govt boys high school humayoon";
// y=y.toUpperCase();
// document.write(y);

//Q4
// var str="MunEEr AhMEd  BuRirO";  //string not changeable
// var newVariable=str.toLowerCase();
// document.write(newVariable);

//Q.5
// var arr=["SALAM","KALAM","REHMAN"];
// var lowerCaseElement = arr[0].toLowerCase();
// document.write(lowerCaseElement);

//Q.6
// var text = "muneer ahmed buriro";
// alert(text.toUpperCase());

//Q.7
// var cityName = "kaRacHi";
// cityName=cityName.charAt(0).toUpperCase()+cityName.slice(1).toLowerCase();
// document.write(cityName);

//chapter 22 to 25
//Q.1
// var sameWords = "captain";
// var sliced = sameWords.slice(1, 3);
// console.log(sliced);

//Q2.
//var str = "example";
//var length = str.length; // 7
//console.log(length);

//Q3.
// var animal = "elephant";
// var seg = animal.slice(2, 6); // "epha"
// console.log(seg);
//Q4.
// var str = "example";
// var length = str.length; // 7
// console.log(length);

//Q5.
// var str = "muneer ahmed";
// var length = str.length; // 12
// var slicedStr = str.slice(1, length - 3); // "xamp"
// console.log(slicedStr);
// console.log(length);

//Q.6.
// var text = "To be or not to be.";
// var indx = text.indexOf("be"); // 3
// console.log(indx);

//Q7.
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be"); // 16
// console.log(indx);

//Q.8.
// var text = "Let's go to the go-kart track.";
// var indx = text.lastIndexOf("go"); // 16
// console.log(indx);

//Q.9.
//if (indexNum >= 0 && indexNum < str.length) {
    // The segment exists
//}

//Q.10.
// var char = "abcde".charAt(2); // "c"
// console.log(char);

//Q.11.
// var text = "abcdefghij";
// var cha = text.charAt(9); // "j"
// console.log(cha);

//Q.12.
// var str = "example";
// var x = str.charAt(str.length - 1); // "e"
// console.log(x);

//Q.13.
// var input = "example";
// var cha = input.charAt(3); // "m"
// console.log(cha);

//Q14.
//if (str.charAt(2) === 'a') {
    // The 3rd character is 'a'
//}

//Q15
// var str = "example";                    //string convert to array
// var arr = [];
// for (var i = 0; i < str.length; i++) {
//    arr.push(str.charAt(i));
// }
// console.log(arr);

//Q.16
// var str = "I have 1 apple and 1 orange.";
// var newStr = str.replace("1", "one"); // "I have one apple and 1 orange."
// console.log(newStr);

//Q17.
// var x = "bananas are awesome";
// var y = x.replace(/a/g, "z"); // "bznznzs zre zwesome"
// console.log(y);

//chapter no: 26;
//Q.1
// var roundedNum = Math.round(4.7);  // roundedNum will be 5
// console.log(roundedNum);

// //Q.2
// var origNum = 4.3;
// var roundNum = Math.ceil(origNum);  // roundNum will be 5
// console.log(roundNum);

// //Q.3
// var origNum = 4.7;
// var roundNum = Math.floor(origNum);  // roundNum will be 4
// console.log(roundNum);

// //Q.4
// var origNum = 4.5;
// var roundNum = Math.round(origNum);  // roundNum will be 5
// console.log(roundNum);

// //Q.5
// var roundNum = Math.floor(0.5);  // roundNum will be 0
// console.log(roundNum);


// //chapter no:27
// //Q.1
// var randomNum = Math.floor(Math.random() * 50) + 1;
// console.log(randomNum);     //31

// //Q.2
// var randomNum = Math.random();
// console.log(randomNum);    // 0.5106936312231594

// //Q.3
// var diceRoll = Math.floor(Math.random() * 6) + 1;  // Dice roll between 1 and 6
// console.log(diceRoll);

// //Q.4
// var toss = Math.random() < 0.5 ? "Heads" : "Tails";
// console.log(toss);

// //chapter no:28 to 29

// //Q.1
// var intNum = parseInt("123");
// console.log(intNum);   //123

// //Q.2
// function convertToInt(str) {
//     return parseInt(str);
// }
// var intNum = convertToInt("123");  // intNum will be 123

// //Q.3
// var floatNum = parseFloat("3.14");
// console.log(floatNum);

// //Q.4
// function isConvertible(str) {
//     return !isNaN(str);
// }


// //Q.5
// var strNum = (42).toString();

// //Q.6
// function convertToString(num) {
//     return num.toString();
// }
// var strNum = convertToString(42);  // strNum will be "42"
// console.log(strNum);

// //Q.7
// var intNum = parseInt("3.14");  // intNum will be 3
// console.log(intNum);

//chapter 30

//Q.1
// var num = 3.14159265;
// var newNum = num.toFixed(4).toString();  // newNum will be "3.1416"
// console.log(newNum);

// //Q.2
// var num = 3.14159265;
// num = parseFloat(num.toFixed(2));  // num will be 3.14
// console.log(num);

// //Q.3
// if (num.toFixed(2).length > 4) {
//     // More than 4 characters
// }

// //Q.4
// var num = 3.14159265;
// alert(num.toFixe(2).toString());   // Alerts "3"

// //chapter 31 to 34

// //Q.1
// var dObj = new Date();

// //Q.2
// var dStr = new Date().toString();

// //Q.3
// var day = d.getDay();  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

// //Q.4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date();
// var day = d.getDay();
// alert(dayNames[day]);

// //Q.5
// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth() + 1;  // Months are zero-indexed
// var date = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var fullDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
// console.log(fullDateTime);

// //Q.6
// var later = new Date(2020, 11, 31);  // Month is 0-indexed, so 11 is December

// //Q.7
// var specialDate = new Date(1992, 1, 2);  // February 2, 1992 (month 1 is February)

// //Q.8
// alert(new Date(1980, 0, 1).getTime());

// //Q.9
// var d = new Date();
// d.setFullYear(2025);

// //Q.10
// function changeToJanuary(date) {
//     date.setMonth(0);  // 0 is January
//     return date;
// }

// //Q.11
// function setDayOfWeek(date, dayOfWeek) {
//     var currentDay = date.getDay();
//     var diff = dayOfWeek - currentDay;
//     date.setDate(date.getDate() + diff);
//     return date;
// }
// //Q12
// function changeMinutes(date) {
//     var newMinutes = parseInt(prompt("Enter the new minutes value:"));
//     date.setMinutes(newMinutes);
//     return date;
// }
// //Q.13
// function addHours(date, hours) {
//     date.setHours(date.getHours() + hours);
//     return date;
// }
// //Q.14
// function calculateAge(birthDate) {
//     var today = new Date();
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDifference = today.getMonth() - birthDate.getMonth();
    
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
    
//     return age;
// }

// var birthDate = new Date(1990, 1, 15);  // Example birthdate: February 15, 1990
// var age = calculateAge(birthDate);
// alert("Your age is: " + age);

//chapter 35 to 37 function
//Q1
//function displayAlert() {

//Q2
// function askName() {
//     var userName = prompt("Enter name:");
// }

//Q3
// function callTwoFunctions() {
//     functionOne();
//     functionTwo();
// }

//Q4
// function promptAndAlert() {
//     var userName = prompt("Enter name:");
//     alert("Hello, " + userName + "!");
// }

// promptAndAlert();

//Q5
// function concat(a, b, c) {
//     var someVar = "X";
//     concat(someVar, "Hello", 5);
  
//Q6
// function concatenate(str1, str2) {
//     var combinedStr = str1 + str2;
// }


//Q7
// function multiplyThree(num1, num2, num3) {
//     var product = num1 * num2 * num3;
// }

//Q8
// function calculateAverage(numbers) {
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total / numbers.length;
// }

//Q9
// function sumTwoNumbers(a, b) {
//     return a + b;
// }

//Q10
// function calculateAverage(numbers) {
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total / numbers.length;
// }

//Q11
// function add(a, b) {
//     return a + b;
// }

// var result = add(5, 10);  // result will be 15

//Q12
// function letterCount(word) {
//     var count = {};
//     for (var i = 0; i < word.length; i++) {
//         var letter = word[i];
//         count[letter] = count[letter] ? count[letter] + 1 : 1;
//     }
//     return count;
// }

//Q13
// function setYear(date, year) {
//     date.setFullYear(year);
//     return date;
// }

//Q14
// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDifference = today.getMonth() - birthDate.getMonth();

//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

//Q.15
// function isWordInArray(word, array) {
//     return array.includes(word);
// }

// var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var result = isWordInArray('zaid', array);  // result will be true
// console.log(result);

//Q.16
// function repeatLetter(letter) {
//     return letter.repeat(10);
// }

//Q.17
// function reverseArray(arr) {
//     return arr.reverse();
// }

// var array = ['a', 'b', 'c', 'd', 'e'];
// var reversedArray = reverseArray(array);  // reversedArray will be ['e', 'd', 'c', 'b', 'a']
// console.log(reversedArray);

//chapter38
//Q1
// function showLocalVariable() {
//     var localVar = "I'm a local variable";  // localVar is only accessible within this function
//     console.log(localVar);
// }

//Q.2
// var globalVar = "I'm a global variable";

// function showGlobalVariable() {
//     console.log(globalVar);  // globalVar is accessible here because it's a global variable
// }

//chapter 39 to 40
//Q1
// var grade = 'F';

// switch (grade) {
//     case 'A':
//         console.log("Excellent job!");
//         break;
//     case 'B':
//         console.log("Good job!");
//         break;
//     case 'C':
//         console.log("You passed!");
//         break;
//     case 'D':
//         console.log("You need to improve.");
//         break;
//     case 'F':
//         console.log("Failed.");
//         break;
//     default:
//         console.log("Unknown grade.");
// }

//Q.2
// var cityName = prompt("Enter your city name:");

// switch (cityName.toLowerCase()) {
//     case 'karachi':
//         alert("Welcome to Karachi!");
//         break;
//     case 'lahore':
//         alert("Welcome to Lahore !");
//         break;
//     case 'islamabad':
//         alert("Welcome to Islamabad!");
//         break;
//     default:
//         alert("City not recognized.");
// }
