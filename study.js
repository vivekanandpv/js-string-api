//  strings are primitives and immutable in JavaScript
//  single quotes or double quotes or backticks can be used to mark strings
//  single quotes are usually favoured

const message = 'Greetings of the day!';

console.log(typeof message); //  string

//  backticks are used to create template literals.
//  Use ${} to insert values in the template
const year = 2022;
const city = 'Bengaluru';

const line = `This is ${city} in the year ${year}`;

console.log(line);
