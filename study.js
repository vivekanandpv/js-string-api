const message = '   good morning   ';

const ts = message.trimStart(); //  'good morning   '

const te = message.trimEnd(); //  '   good morning'

const tr = message.trim(); //  'good morning'

//  padding was introduced in ES2017
//  maxLength should be greater than the length of the string

const ps = tr.padStart(15, '#'); //  '###good morning'

const pe = tr.padEnd(15, '%'); //  'good morning%%%'
