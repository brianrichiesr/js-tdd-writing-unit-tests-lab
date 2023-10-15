import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("checks if word is a palindrome and if so return true, if not return false", () => {
        const word = "racecar";
        const test = isPalindrome(word);
        expect(test).toBe(true);
    })
    it("it should ignore case", () => {
        const word = "rACEcar";
        const test = isPalindrome(word);
        expect(test).toBe(true);
    })
    it("it should return false for an empty string", () => {
        const word = "";
        const test = isPalindrome(word);
        expect(test).toBe(false);
    })
})
