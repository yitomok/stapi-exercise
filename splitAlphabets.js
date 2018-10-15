const pIqaD = require('./dictionary.js');

const splitAlphabets = module.exports = (name) => {
    const table = [[]];

    for(let i = 0; i < name.length; i++) {
        if (table[i]) {
            for (let j= i + 1; j <= name.length; j++) {
                let sub = name.substring(i, j);

                let alphabet;

                // Implemented according to simplified captialization rules in test doc,
                // it will not work with strings like 'tlH', as differs from 'tlh'
                if (pIqaD[sub.toUpperCase()]) {
                    alphabet = sub.toUpperCase();
                }
                if (pIqaD[sub.toLowerCase()]) {
                    alphabet = sub.toLowerCase();
                }

                if (alphabet) {
                    if (!table[j]) {
                        table[j] = [];
                    }
                    table[j].push(alphabet);
                }
            }
        }
    }

    if (table[name.length]) {
        let result = []
        let i = name.length;

        while (i > 0) {
            for (let s of table[i]) {
                result.unshift(table[i]);
                i -= s.length;

                if (i <= 0) {
                    break;
                }
            }
        }

        return result.reduce((acc, cur) => acc.concat(cur));
    } else {
        return [];
    }
}
