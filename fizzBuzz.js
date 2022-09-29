// Write your solution below this line:
function fizzBuzz (highnum) {
    for (let i = 1; i < (highnum + 1);i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 3) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(50)
fizzBuzz(100)
