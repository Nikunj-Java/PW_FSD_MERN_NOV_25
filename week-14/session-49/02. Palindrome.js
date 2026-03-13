function isPalindrome(n) {
    let og = n;
    let reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }
    return og === reverse;
}

console.log(isPalindrome(123));

//Gaurav Logic
function palindrome(num) {
    if (num < 0) return false;
    let reversed = 0, original = num;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return original === reversed;
}

console.log(palindrome(12321));