let N = Number(prompt("Enter N"));
let K = Number(prompt("Enter K"));

let answer = -1;

// try all X values
for (let X = 0; X <= 100000; X++) {

    let value = N + X;

    // check palindrome
    let temp = value;
    let reverse = 0;

    while (temp > 0) {
        let digit = temp % 10;
        reverse = reverse * 10 + digit;
        temp = Math.floor(temp / 10);
    }

    if (value === reverse && value % K === 0) {
        answer = X;
        break;
    }
}

alert(answer);