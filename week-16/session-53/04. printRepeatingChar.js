function characterReplacementWithSubstring(s, k) {
    let map = {};
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;
    let startIndex = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        map[char] = (map[char] || 0) + 1;
        maxFreq = Math.max(maxFreq, map[char]);

        while ((right - left + 1) - maxFreq > k) {
            map[s[left]]--;
            left++;
        }

        if ((right - left + 1) > maxLength) {
            maxLength = right - left + 1;
            startIndex = left;
        }
    }

    return s.substring(startIndex, startIndex + maxLength);
}

console.log(characterReplacementWithSubstring("AABAAAABBABA", 1));
// Example output: "AABA"