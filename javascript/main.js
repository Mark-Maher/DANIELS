var myname = "I Love Foood Code Too Playing Much";
// final result = i love code too much
// don't return words more than 4 characters
var result = myname.split(" ");
var fResult = result
  .map((x) => {
    return x.toLowerCase();
  })
  .filter((x) => {
    return x.length <= 4 && x;
  })
  .join(" ");
console.log(fResult);
//--------------------------------------------
var mix = "HE5s8ha1m";
//return multiply of each number individual 25641
var mixresult = mix
  .split("")
  .filter((x) => {
    return !isNaN(x) && x;
  })
  .map((x) => {
    return x * x;
  })
  .join("");
console.log(mixresult);
//--------------------------------------------------
var theBiggest = [
  "bla",
  "propganda",
  "other",
  "aaa",
  "battery",
  "test",
  "propganda_two",
];
//return the longest word
var theLongestWord = theBiggest.reduce((x, y) => {
  return x.length > y.length ? x : y;
});
console.log(theLongestWord);
//---------------------------------------------------
var removeChars = ["H", "@", "@", "E", "S", "@", "@", "H", "A", "@", "M", "@"];
//return HESHAM without @
var myName = removeChars
  .filter((x) => {
    return x != "@" && x;
  })
  .join("");
console.log(myName);
//-------------------------------------------------------
var students = [
  { name: "Ahmed", grade: 96 },
  { name: "Omar", grade: 84 },
  { name: "Rasha", grade: 100 },
  { name: "Asmaa", grade: 65 },
  { name: "Zienab", grade: 90 },
  { name: "Mohamed", grade: 84 },
  { name: "Kotp", grade: 92 },
];
//return students with grades more 90 or more than
var studentsMore = students
  .filter((x) => {
    return x.grade >= 90;
  })
  .map((x) => {
    return x.name;
  })
  .join(" ");
console.log(studentsMore);
//------------------------------------------------------------
var users = [
  {
    name: "Ahmed",
    city: "London",
    birthYear: 1988,
  },
  {
    name: "Omar",
    city: "Madrid",
    birthYear: 1992,
  },
  {
    name: "Rasha",
    city: "Paris",
    birthYear: 2000,
  },
  {
    name: "Asmaa",
    city: "Alabama",
    birthYear: 2002,
  },
  {
    name: "Zienab",
    city: "Alabama",
    birthYear: 2009,
  },
  {
    name: "Mohamed",
    city: "Alabama",
    birthYear: 1982,
  },
  {
    name: "Kotp",
    city: "Alabama",
    birthYear: 1994,
  },
];
//return all users born between 1990 and 2000
var userBet = users
  .filter((x) => {
    return x.birthYear >= 1990 && x.birthYear <= 2000;
  })
  .map((x) => {
    return x.name;
  })
  .join(" ");
console.log(userBet);
var xxxx=new XMLHttpRequest