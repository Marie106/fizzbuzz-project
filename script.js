// Function to determining whether or not they are prime
function isPrime(num) {
    if (num <= 1) return false; // Numb less than or equal to 1 not prime
    if (num <= 3) return true;  // 2 and 3 are prime 

    if (num % 2 === 0 || num % 3 === 0) return false; 

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// find next prime number after n
function findNextPrime(n) {
    let nextPrime = n + 1;

    while (!isPrime(nextPrime)) {
        nextPrime++;
    }

    return nextPrime;
}

// Example:S
let n = 9; // Change this number to test with different values
let nextPrime = findNextPrime(n);
console.log(`The next prime number after ${n} is ${nextPrime}`);