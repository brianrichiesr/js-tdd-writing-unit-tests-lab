const isPalindrome = (word) => {
    if (!word.trim()) return false;
    return word.split("").reverse().join("").toLowerCase() === word.toLowerCase();
}

export { isPalindrome }
