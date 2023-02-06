function longestPalindrome(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const candidate = str.slice(i, j);
            const reversed = candidate.split("").reverse().join("");
            if (candidate === reversed && candidate.length > longest.length) {
                longest = candidate;
            }
        }
    }
    return longest;
}

//   This function uses two nested loops to generate all possible substrings of the input str, 
//  and then checks if each substring is a palindrome. If a candidate is found to be a 
//  palindrome and its length is greater than the current longest string, 
//  the candidate becomes the new longest string.