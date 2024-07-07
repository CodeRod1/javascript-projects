//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

let initials = language.slice(0,1) + language.slice(4,5);
console.log(initials);

//2. Without using slice(), use method chaining to accomplish the same thing.

initials = language.charAt(0) + language.charAt(4);
console.log(initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

initials = language[0] + language[4];
console.log(`The abbreviation for ${language} is ${initials}.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let name = "Rodgrick";
let shortName = name.slice(0, 3).toLowerCase().replace('o', 'e');
console.log(shortName); 

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.toUpperCase([0]).toUpperCase([6]));
