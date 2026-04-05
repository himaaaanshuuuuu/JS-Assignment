// Take input
let L = Number(prompt("Enter L"));
let R = Number(prompt("Enter R"));
let K = Number(prompt("Enter K"));

let count = 0;

// loop from L to R
for (let x = L; x <= R; x++) {

    // check divisible by K
    if (x % K !== 0) {
        continue;
    }

    let num = x;
    let sum = 0;
    let hasZero = false;

    // check digits one by one
    while (num > 0) {
        let digit = num % 10;

        if (digit === 0) {
            hasZero = true;
        }

        sum = sum + digit;
        num = Math.floor(num / 10);
    }

    // skip if it contains 0
    if (hasZero) continue;

    // check if sum is prime
    let isPrime = true;

    if (sum < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < sum; i++) {
            if (sum % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        count++;
    }
}

alert(count);