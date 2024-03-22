import readline from 'readline';
const isPalindrome = (x: number) => {
    const xString = String(x);

    let rev = "";
    for(let i = xString.length - 1; i >= 0; i--){
        rev += xString[i]; 
    }
    if(rev === xString){
        return true;
    } else {
        return false;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputNumbers = () => {
    rl.question("Enter a number (write done to end): ", (input) => {
        if (input.toLowerCase() === 'done') {
            rl.close();
            return;
        }

        const number = Number(input);
        if (isNaN(number)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            console.log(isPalindrome(number));
        }

        inputNumbers(); // Recursive call to continue input
    });
};

inputNumbers();

