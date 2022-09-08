// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.


describe("codedMessage", ()=>{
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    
    it("returns a 'coded' string message that takes the input string and swaps a to 4, e to 3, i to 1 and o to 0.", ()=>{
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

//Good Failure:
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ENOENT: no such file or directory, open 'node:test'

//     2 |
//     3 | const { exportAllDeclaration } = require("@babel/types")
//   > 4 | const { it } = require("node:test")
//       |                ^
//     5 | const { describe } = require("yargs")
//     6 |
//     7 | // Please read all questions thoroughly

//     at Runtime.readFile (node_modules/jest-runtime/build/index.js:2431:21)
//     at Object.require (code-challenges.test.js:4:16)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.543 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// ➜  week-5-assessment-holdenprine git:(week-5-holden-prine) ✗ yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-holdenprine/node_modules/.bin/jest
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ returns a 'coded' string message that takes the input string and swaps a to 4, e to 3 and o to 0. (1 ms)

// ● codedMessage › returns a 'coded' string message that takes the input string and swaps a to 4, e to 3 and o to 0.

//   ReferenceError: codedMessage is not defined

//     29 |     
//     30 |     it("returns a 'coded' string message that takes the input string and swaps a to 4, e to 3 and o to 0.", ()=>{
//   > 31 |         expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//        |         ^
//     32 |         expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     33 |         expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//     34 |     })

//     at Object.expect (code-challenges.test.js:31:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.61 s


// b) Create the function that makes the test pass.

//Pseudo Code:
// 1. define a function called codedMessage that will take a string input and return a 'coded' message as output
// 2. set the parameter to a string and then convert the string to an array using the .split() method 
// 3. use a for loop to iterate through that new stringArray.
// 4. create a set of conditional statements that will check if the letter at the given index is equal to either a, e, i or o. make sure to test for either capital or lowercase.
// 5. Once thats determined, reassign the index to the related value
// 6. recreate the string using the .join() method to convert the array back into a string and return that string.

// const codedMessage = (string) => {
//     stringArray = string.split('')
//     for(let i = 0; i < stringArray.length; i++) {
//         if(stringArray[i] === 'a' || stringArray[i] === 'A') {
//             stringArray[i] = '4'
//         }
//         else if(stringArray[i] === 'e' || stringArray[i] === 'E') {
//             stringArray[i] = '3'
//         }
//         else if(stringArray[i] === 'i' || stringArray[i] === 'I') {
//             stringArray[i] = '1'
//         }
//         else if(stringArray[i] === 'o' || stringArray[i] === 'O') {
//             stringArray[i] = '0'
//         }
//         else {
//             i + 1
//         }
//     }

//     return stringArray.join('')
// }

// Good Pass:
//  PASS  ./code-challenges.test.js
//   codedMessage
//   ✓ returns a 'coded' string message that takes the input string and swaps a to 4, e to 3, i to 1 and o to 0. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.421 s, estimated 1 s

// Refactor Pseudo Code:
// 1. declare a function called codedMessage that takes a string input
// 2. inside the function declare the variable stringArray and set that equal to the input string
// 3. use .split() followed by .map() to iterate through the array
// 4. inside declare an anonymous function that takes the argument of value.
// 5. use a set of conditional statements that check if the value.toDownCase() is equal to the specified characters.
// 6. if this is true return the reassigned value, if not simply return the value.
// 7. after iterating through the stringArray, return the array as a string using .join()

// Refactor:
const codedMessage = (string) => {
    stringArray = string.split('').map((value)=>{
        
        if(value.toLowerCase() === 'a') {
            return value = '4'
        } else if(value.toLowerCase() === 'e') {
             return value = '3'
        } else if(value.toLowerCase() === 'i') {
            return value = '1'
        } else if(value.toLowerCase() === 'o') {
            return value = '0'
        } else {
            return value
        }
    })
    
    return stringArray.join('')
}

// REFACTOR WORKS:
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ returns a 'coded' string message that takes the input string and swaps a to 4, e to 3, i to 1 and o to 0. (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.508 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letterArray", ()=>{
     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    it("returns an array of words that contains a specified letter in each value from another array of words",()=>{
        expect(letterArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(letterArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// GOOD FAIL:
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ returns a 'coded' string message that takes the input string and swaps a to 4, e to 3, i to 1 and o to 0. (2 ms)
// letterArray
//   ✕ returns an array of words that contains a specified letter in each value from another array of words

// ● letterArray › returns an array of words that contains a specified letter in each value from another array of words

//   ReferenceError: letterArray is not defined

//     179 |
//     180 |     it("returns an array of words that contains a specified letter in each value from another array of words",()=>{
//   > 181 |         expect(letterArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         |         ^
//     182 |         expect(letterArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     183 |     })
//     184 | })


// b) Create the function that makes the test pass.

//Pseudo Code:
// 1. Create a function called letterArray that takes in an array of words and a string one character long as input
// 2. set a new variable newArray to the input array.filter()
// 3. iterate through the array and return the value containing the letter using .includes
// 4. set the OR operator to return value.includes if the character is uppercase using .toUpperCase()
// 5. return the newArray

const letterArray = (array, letter) => {
    return newArray = array.filter((value) => {
        return value.includes(letter) || value.includes(letter.toUpperCase())
    })
}

// GOOD PASS:
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ returns a 'coded' string message that takes the input string and swaps a to 4, e to 3, i to 1 and o to 0. (3 ms)
// letterArray
//   ✓ returns an array of words that contains a specified letter in each value from another array of words (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.401 s, estimated 1 s
// Ran all test suites.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouseChecker", ()=>{
    
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    
    it("returns either true or false dependent on whether or not the array has three elements of a kind and one pair of the same values for given elements.", ()=>{
        expect(fullHouseChecker(hand1)).toEqual(true)
        expect(fullHouseChecker(hand2)).toEqual(false)
        expect(fullHouseChecker(hand3)).toEqual(false)
        expect(fullHouseChecker(hand4)).toEqual(true)
    })
})

// GOOD FAIL:
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ returns a 'coded' string message that takes the input string and swaps a to 4, e to 3, i to 1 and o to 0. (2 ms)
// letterArray
//   ✓ returns an array of words that contains a specified letter in each value from another array of words (1 ms)
// fullHouseChecker
//   ✕ returns either true or false dependent on whether or not the array has three elements of a kind and one pair of the same values for given elements.

// ● fullHouseChecker › returns either true or false dependent on whether or not the array has three elements of a kind and one pair of the same values for given elements.

//   ReferenceError: fullHouseChecker is not defined

//     248 |     
//     249 |     it("returns either true or false dependent on whether or not the array has three elements of a kind and one pair of the same values for given elements.", ()=>{
//   > 250 |         expect(fullHouseChecker(hand1)).toEqual(true)
//         |         ^
//     251 |         expect(fullHouseChecker(hand2)).toEqual(false)
//     252 |         expect(fullHouseChecker(hand3)).toEqual(false)
//     253 |         expect(fullHouseChecker(hand4)).toEqual(true)

//     at Object.expect (code-challenges.test.js:250:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.472 s
// Ran all test suites.

// b) Create the function that makes the test pass.

// Pseudo Code:
// 1. define a functioned called fullHouseChecker that takes an array of numbers as input
// 2. define a chunk of the array as a variable
// 3. iterate through the initial array using a for loop
// 4. inside the for loop define a marker variable
// 5. set up a conditional that checks if the marker value is included in the chunked array
// 6. if true create another chunk 
// 7. then set up a nested conditional that checks if the new chunk contains the marker, if true, return true. If not then continue to iterate through the array
// 8. if the conditional and nested conditionals are not met, return false

const fullHouseChecker = (array) => {
    const marker = array.slice()

    for(let i = 0; i < array.length; ) {
        const newMarker = marker.splice(i, 1)[0]
        if(marker.includes(newMarker)) {
            marker.splice(marker.indexOf(newMarker), 1)
            if(marker.includes(newMarker)) {
                return true
            }
        }
        else {
            i++
        }
    }

    return false
}

// BLOCKER: Odd failure on test case three, some unresolved bug in how the function checks chunks.