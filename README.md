# stapi-exercise
Star Trek API Exercise

## Requirement
---
Node 8 or above


## How to Install?
---
```
$ npm install
```
## How to run?
---
```
$ node app.js Uhura
```
## Design
---
The design is trying to be as simple as possible, the algorithm used to split the alphabets is first, iterate each character and try to find all  matching alphabets in the dictionary, and then try to iterate the whole word from the end to choose the longest matching alphabets. To simply things, I added restriction based on the test document, and some other when using the STAPI as written in the comment.
