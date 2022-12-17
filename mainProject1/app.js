// console.log('Hello World!');

// var userName = 'Enter User Name';

// let userPassword = 'Enter Password';

// userPassword = 123456789;

// var userName = 'User Found';

// userName = 'Invalid User Name';

// console.log(userName);
// console.log(userPassword);

// userName = 'Invalid User Name';
// console.log(typeof userName);

// userPassword = 123456789;
// console.log(typeof userPassword);

// const paswordMatch = true;
// console.log(typeof paswordMatch);

// //New Class -- Array

// let shoppingList = ['Milk', 45124, 'Butter', 'Bread'];

// //add item from last
// shoppingList.push('Jam');
// shoppingList.push('Fruit');

// //remove item from last
// shoppingList.pop();

// //delete item in middle
// shoppingList.splice(2, 1);
// shoppingList.splice(2, 1, 'other item', 'one more');

// console.log(shoppingList);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b = [2, 7, 4, 5, 3, 8, 7, 6, 0];
// console.log(a);

// function sqr(num) {
//   return num * num;
// }

// let result = a.map(sqr);

// //annanoumous function
// let result1 = b.map((num1) => {
//   return num1 * num1;
// });

// console.log(result);
// console.log(result1);

//--
// let users = [
//   { firstName: 'Baskar', lastName: 'Subramani', age: 25, job: 'Designer' },
//   { firstName: 'Nirisha', lastName: 'Narasimman', age: 24, job: 'Developer' },
//   { firstName: 'Advith', lastName: 'Patil', age: 19, job: 'Developer' },
//   { firstName: 'John', lastName: 'Smith', age: 16, job: 'Designer' },
//   { firstName: 'Hernandez', lastName: 'Joseh', age: 32, job: 'Developer' },
//   { firstName: 'Michel', lastName: 'Mikle', age: 28, job: 'Designer' },
//   { firstName: 'Thirputchi', lastName: 'Pattasu Balu', age: 26, job: 'Developer' },
//   { firstName: 'Kuppusamy', lastName: 'Maadaswamy', age: 23, job: 'Designer' },
// ];
// // let userName = users.map((user) => {
// //   return user.firstName;
// // });

// // console.log(userName);

// let filter = users
//   .filter((user) => {
//     return user.age > 20;
//   })
//   .map((user) => {
//     return user.firstName;
//   });
// console.log(filter);

// let filter1 = users.filter((user) => {
//   return user.job == 'Developer';
// });
// console.log(filter1);

// let filter2 = users.filter((abc) => {
//   if (abc.age > 20 && abc.job == 'Designer') return users;
// });
// console.log(filter2);

// // objects
// let userInfo = { Name: 'User Name', Number: '987654321', Location: 'Chennai' };
// userInfo.Email = 'sample@mail.com';
// delete userInfo.mobile;
// console.log(userInfo.Name, userInfo.Location, userInfo.Email);

// // spread operator
// let numbers = [1, 2, 3, 4];
// let totalNumbers = [...numbers, 5, 6, 7, 8, 9];

// console.log(totalNumbers);

// // array of objects
// let user = [
//   { name: 'Baskar', email: 'sample@mail.com' },
//   {
//     name: 'Nirisha',
//     email: 'newmail@sample.com',
//   },
//   {
//     name: 'Santosh',
//     email: 'new@sample.com',
//   },
// ];
// console.log(user.length); //to know how many objects we have in array
// console.log(user);

// let users = [
//   { name: 'Baskar', email: 'bas@gmail.com', age: 24 },
//   { name: 'Abu', email: 'abu@gmail.com', age: 25 },
//   { name: 'Ram', email: 'ram@gmail.com', age: 25 },
//   { name: 'Ganesh', email: 'ganz@gmail.com', age: 27 },
//   { name: 'Nikil', email: 'nikil@gmail.com', age: 20 },
//   { name: 'Ashis', email: 'ash@gmail.com', age: 25 },
//   { name: 'Appna', email: 'appz@gmail.com', age: 55 },
//   { name: 'Suresh', email: 'suresh@gmail.com', age: 33 },
//   { name: 'Tina', email: 'tina@gmail.com', age: 12 },
// ];
// console.log(users[7].age);

// let luckyUser = Math.floor(Math.random() * users.length);
// console.log(users[luckyUser].age);

// let userDetails = [
//   { firstName: 'Virat', lastName: 'Kohli', age: 32, job: 'Cricketer' },
//   { firstName: 'Ajith', lastName: 'Kumar', age: 42, job: 'Actor' },
//   { firstName: 'Yuvan', lastName: 'Sankar', age: 39, job: 'Musician' },
//   { firstName: 'Valentino', lastName: 'Rossi', age: 46, job: 'Racer' },
//   { firstName: 'Pradeep', lastName: 'Ragunandhan', age: 24, job: 'Director' },
//   { firstName: 'KL', lastName: 'Rahul', age: 28, job: 'Cricketer' },
//   { firstName: 'Siva', lastName: 'Karthikeyan', age: 34, job: 'Actor' },
//   { firstName: 'Anirudh', lastName: 'Ravichandran', age: 39, job: 'Musician' },
//   { firstName: 'Marc', lastName: 'Marquez', age: 29, job: 'Racer' },
//   { firstName: 'Venkat', lastName: 'Prabhu', age: 48, job: 'Director' },
// ];

// let userAge = userDetails
//   .filter((age) => {
//     return age.job == 'Actor';
//   })
//   .map((name) => {
//     return name.firstName + ' ' + name.lastName;
//   });

// console.log(userAge);

// let userName = userDetails.map((names) => {
//   return (
//     names.firstName +
//     ' ' +
//     names.lastName +
//     "'s" +
//     ' ' +
//     'age is' +
//     ' ' +
//     names.age
//   );
// });
// console.log(userName);

// //----------------Condition
// //example 1
// let age = 18;

// if (age >= 18) console.log('eligible');
// else console.log('not elegible');

//terenary operator
// let age = 31;
// age >= 18 ? console.log('eligible') : console.log('not eligible');

// ? = if
// : = else

// //example 2
// let playerAge = 28;

// if (playerAge >= 16) {
//   if (playerAge <= 24) {
//     console.log('eligible');
//   } else {
//     console.log('more than 24');
//   }
// } else {
//   console.log('less than 16');
// }

// let playerAge2 = 8;

// if (playerAge2 >= 16) {
//   if (playerAge2 <= 24) console.log('eligible da');
//   else console.log('more then 24 age da');
// } else {
//   console.log('less then 16 bro');
// }

// //example 3
// let weather = 'spring';

// if (weather == 'sunny') {
//   console.log('Wear normal cloths');
// } else if (weather == 'rainy') {
//   console.log('Wear a rain coat');
// } else if (weather == 'Winter') {
//   console.log('Wear a Sweatter');
// } else {
//   console.log('This is not a weather type');
// }

// //ternary operator
// let age = '26';

// age >= '18'
//   ? console.log('eligible to vote')
//   : console.log('not eligible to vote');

// let user = 27;

// if (user >= 25) console.log('You are ready to Onboard!!');
// else console.log('Sorry, Not ready yet');

// user >= 25
//   ? console.log('You are ready to Onboard!!')
//   : console.log('Sorry, Not ready yet');

// let weather = 'winter';

// weather == 'sunny'
//   ? console.log('Wear normal cloths')
//   : 'rainy'
//   ? console.log('Wear a rain coat')
//   : 'Winter'
//   ? console.log('Wear a Sweatter')
//   : console.log('This is not a weather type');

//for loop
// for (let i = 1; i < 10; i++) {
//   console.log('Baskar');
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i * 2);
// }

// let number = prompt('Enter a number');
// for (let i = 1; i <= 10; i++) {
//   console.log(i * number);
// }

// let number = prompt('Enter a number');
// if (number % 2 == 0) {
//   console.log(number, 'is even');
// } else {
//   console.log(number, 'is odd');
// }

// let vote = 60;
// if (vote >= 18) console.log('Eligible to vote!');
// else console.log('Not Eligible to vote!');

// let park = prompt('Please enter your age');
// if (park >= 18) {
//   if (park <= 48) console.log('You are free to enter!!!');
//   else console.log('You are too old to enter');
// } else console.log('You are still a kid');

// let rate = 22;
// if (rate >= 20) {
//   if (rate < 30) console.log('availble buy');
//   else console.log('Expensive');
// } else console.log('Cheap');

// -------------functions-----------------
// let status1 = 'Whats the status about the party:';

// function party(value) {
//   console.log(value, 'Celebrating Party🎉');
// }

// party(status1);

// let weather = prompt('Type the weather type there');

// function weatherStatus(lable) {
//   if (weather == 'summer') console.log(lable, 'Its too hot today☀️');
//   else if (weather == 'winter') console.log(lable, 'Its too cold today☃️');
//   else if (weather == 'rainy') console.log(lable, 'Its raining today🌦️');
//   else console.log(lable, 'Is that a weather type?');
// }

// weatherStatus('🗓️ Whats The Weather Status Today:');

// function grinder(items) {
//   console.log('grinding...', items);
// }
// grinder('tomato');
// grinder('onions');
// // --------------

// let value1 = 20;
// let value2 = 10;

// add(value1, value2);

// function add(item1, num2) {
//   console.log(item1 + num2);
//   console.log(num2 - item1);
//   console.log(item1 * num2);
//   console.log(item1 / num2);
// }
// --------------

// let value11 = 15;
// let value12 = 5;

// function add(asd, asd1) {
//   return asd + asd1;
// }
// let text = document.getElementById('headingtext');
//   text.innerText = 'Thanks for joining in Today class🎉';
// let sum = add(value11, value12);
// console.log('The total is', sum);
