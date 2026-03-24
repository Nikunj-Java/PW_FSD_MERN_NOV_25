// Longest Repeating Character Replacement
// Given string s and integer k, 
// replace at most k chars to make longest repeating substring.

// Example
// Input: "AABABBA", k=1
// output: 4

//solution
// 1. use sliding window
// 2. keep track of window size
// 3. most frequesnt character
// formula: windowsize - maxFreq <= k
function characterReplcement(s,k){ // s- input string, k- max number of character you can replace
    let map= {};  // {A:2, B:1}
    let left= 0;  // left pointer vof sliding window
    let maxFreq=0; // most frequent char count in current window
    let maxLength=0; // max valid window length

    for (let right=0; right< s.length; right++){ // start sliding window
        // windows s[left.......right]
        let char= s[right]; // Current character entering window

        map[char]=(map[char]||0)+1; // updating frequency Map (if char exist -> increse, else initialize with 1)
       // "AAB"---> map= {A:2, B:1}
       
        maxFreq= Math.max(maxFreq,map[char]); // track Most Frequent Character
         // "AABA"---> map= {A appears 3 times}

        // shrink window size if invalid
        while((right - left +1)- maxFreq > k){ // core logic-> check iff window is invalid
            //replacements > k , window is invalid --> it will shrink
            map[s[left]]--;
            left++;
        }

        maxLength= Math.max(maxLength,right-left+1); // update the Maximum Length
    }
    return maxLength;
}

let s= "AABABAA";
let s1= "AABABBAAA";
let s2= "AABAABBAAA";
console.log(characterReplcement(s,1))


// chronology

// [A] -> valid -> length=1
// [AA] -> valid -> length=2
// [AAA] -> valid -> length=3
// [AAAA] -> valid -> length=4
// [AABAB] -> invalid -> length=5
// maxFreq= 3, replcement= 2 >k --->invalid----> shrink the window