const pIqaD = require('./dictionary.js');
const splitAlphabets = require('./splitAlphabets.js');
const getCharacterSpecies = require('./stapi.js');


// Get all Klingon alphabets separated in an array
const alphabets = process.argv.slice(2).map((name) => splitAlphabets(name)).reduce((acc, cur) => acc.concat(cur));

// Print all unicodes mapped by Klingon alphabets
console.log(alphabets.reduce((s, alphabet) => s += pIqaD[alphabet] + " ", ""));

// Concat the name and pass to STAPI for querying the Species
getCharacterSpecies(process.argv.slice(2).reduce((acc, name) => acc += " " + name))
.then((species) => {
    console.log(species);
});
