let base = Number(prompt("Enter base"));
let distance = Number(prompt("Enter distance"));
let minutesLate = Number(prompt("Enter minutesLate"));
let seed = Number(prompt("Enter seed"));

// starting fare
let fare = base + 7 * distance;

// late charge
if (minutesLate > 15) {
    fare = fare + 20;
}

// distance charge
if (distance > 10) {
    let extra = Math.floor(fare * 0.1);
    fare = fare + extra;
}

// seed condition
if (seed % 2 === 1) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}

// round up to nearest multiple of 5
while (fare % 5 !== 0) {
    fare++;
}

alert(fare);