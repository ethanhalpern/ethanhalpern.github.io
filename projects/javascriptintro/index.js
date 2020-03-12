var myName ='ethan';
var favNumber = 8;
var favNum ='8';
var rain = true;
var myArray = ['e','t','h','a','n'];
var myLast = 'halpern';
var myArrays = ['2',4,false,];
var integers = 50 + 50;
var firstItem = myArray [0];
var lastItem = myArray [4];
lastItem = myArray [myArray.length - 1];
var longWord = 'supercalifragilisticexpialidocious';
var students = 14;
var todayDate = new Date;
var hour = todayDate.getHours();
var day = todayDate.getDate();
var favRestaurants = ['peacefood', 'van leeuwen', 'grey dog']
var favAnimals = ['dog', 'kangaroo', 'penguin']
var favNyc = ['west village', 'east village', 'upper west side']
var favPokemon = ['pikachu', 'ditto', 'snorlax']



console.log('my name is', myName)
console.log('my favorite number is', favNumber)
console.log('my favorite number is', favNum)
console.log('it is raining', rain)
console.log('the letters of my array', myArray)
console.log('more arrays',myArrays)
console.log('my full name is', myName + ' '+ myLast)
console.log('50 + 50 is', integers)

console.log('the first letter of my name is', firstItem)
console.log('the last letter of my name is', lastItem)
console.log('there are this many characters for the word supercalifragilisticexpialidocious', longWord.length)
console.log('the length of characters in your first name is equal to the length of characters in your last name.', myName.length == myLast.length)

if(students == 14){
	console.log('all students are present');
} else {
	console.log('not all students are here')
}

for (var i = 0; i <myArray.length; i++ ) {
	console.log('characters in my name', myArray[i]);
}

if ( hour == 18 ) {
  console.log("current time is not between 7-9:40pm");
} else if ( hour > 19 && hour < 21 ) {
  console.log("it is between 7 and 9:40!");
} 

if ( day == 5 ) {
  console.log("tomorrow is saturday");
} else if (day == 1){
  console.log("tomorrow is not saturday :(");
} else if (day == 2){
  console.log("tomorrow is not saturday :(");
} else if (day == 3){
  console.log("tomorrow is not saturday :(");
} else if (day == 4){
  console.log("tomorrow is not saturday :(");
} else if (day == 6){
  console.log("today is saturday !");
} else if (day == 7){
  console.log("tomorrow is not saturday :(");
}




console.log('my favorite restaurants are', favRestaurants)
console.log('my favorite animals are', favAnimals)
console.log('my favorite spots in nyc are', favNyc)
console.log('my favorite pokemon are', favPokemon)




