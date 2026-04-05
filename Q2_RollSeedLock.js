let N = Number(prompt("Enter N"));
let seed = Number(prompt("Enter seed"));

let current = N;

// repeat 3 times
for (let i = 1; i <= 3; i++) {

    if (current % 2 === 0) {
        // even case
        current = current / 2 + seed;
    } else {
        // odd case
        current = current * 3 - seed;
    }
}

// get middle digit
let middle = Math.floor(current / 10) % 10;

// check conditions
if (current >= 100 && current <= 999 && middle === seed) {
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}