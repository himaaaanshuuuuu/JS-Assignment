let a = Number(prompt("Enter correct answers"));
let b = Number(prompt("Enter partial answers"));
let c = Number(prompt("Enter wrong answers"));

// basic score
let score = 3 * a + b - 2 * c;

// if negative, make it 0
if (score < 0) {
    score = 0;
}

// if too many questions attempted
if (a + b + c > 50) {
    score = score - 10;
}

// final result
let status;

if (score >= 60) {
    status = "PASS";
} else {
    status = "FAIL";
}

alert(score + ", " + status);