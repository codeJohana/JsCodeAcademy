let secretMessage = ['Learning ', 'is ', 'not ', 'about ', 'what ', 'you ', 'get ', 'easily ', 'the ', 'first ', 'time, ', 'it ', 'is ', 'about ', 'what ', 'you ', 'can ', 'figure ', 'out. ', '-2015, ', 'Chris ', 'Pine, ', 'Learn ', 'JavaScript'];
//remove last word in array
secretMessage.pop()
console.log(secretMessage.length)

// add two words in array
secretMessage.push('to','Programs}');

//find idex easily 
const whereIsEasily = secretMessage.indexOf('easily')
// change easily for right
secretMessage[7]='right';
//remove the first string
secretMessage.shift();
// adding Programing at the beginning of array
secretMessage.unshift('Programing');
// remove the strings get, right, the, first, time, and replace them with the single string know.
secretMessage.splice(6,5, 'know. ')

console.log(secretMessage.join(''));