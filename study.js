const message = 'Good Morning';

const group = message.match(/^G[aeiou]{2}/); //  regex match group

const regex = /^G[aeiou]{2}/;

const result = regex.test(message); //  true
