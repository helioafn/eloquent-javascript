for (let i = 1; i <= 100; i++) {
    let output = '',
        conditionA = 3,
        conditionB = 5

    if (i % conditionA === 0 && i % conditionB === 0) {
        output += 'FizzBuzz'
    } else if (i % conditionA === 0) {
        output += 'Fizz'
    } else if (i % conditionB === 0) {
        output += 'Buzz'
    } else {
        output += i
    }

    console.log(output)
}