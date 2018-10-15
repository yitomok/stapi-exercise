const Promise = require('bluebird');
const rp = Promise.promisifyAll(require('request'));
const querystring = require('querystring');


const getCharacterByName = (name) =>
    rp.postAsync('http://stapi.co/api/v1/rest/character/search', {
        body: querystring.stringify({
            name: name,
            mirror: false,
            alternateReality: false // We assume the character should not be mirrored or in alternate reality, to avoid duplicates
        })
    }).then((response) => {
        let result = JSON.parse(response.body);
        return result.characters[0];
    })


const getCharacterFullByUid = (uid) =>
    rp.getAsync('http://stapi.co/api/v1/rest/character', {
        qs: {
            uid: uid
        }
    }).then((response) => {
        let result = JSON.parse(response.body);
        return result.character;
    })

// Get the UID from character and use it to query full character profile, only the first species is considered for simplicity
const getCharacterSpecies = module.exports = (name) =>
    getCharacterByName(name)
    .then((character) => getCharacterFullByUid(character.uid))
    .then((character) => character.characterSpecies[0].name);
