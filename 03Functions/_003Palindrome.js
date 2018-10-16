function palindrome(input) {
    console.log(input === input.split("")
        .reverse()
        .join(""));
}

palindrome("abba");