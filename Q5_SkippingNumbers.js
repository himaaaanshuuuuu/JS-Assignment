let N = Number(prompt("Enter N"));
let seed = Number(prompt("Enter seed"));

let m = 0;
let sum = 0;
let skip = seed + 2;

// keep going until sum >= N
while (sum < N) {

    m++;

    // only add if NOT divisible
    if (m % skip !== 0) {
        sum = sum + m;
    }
}

alert("m = " + m + ", sum = " + sum);