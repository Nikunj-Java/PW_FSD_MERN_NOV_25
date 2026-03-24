 let s="listen";
 let t="silent";

 function isAnagram(s,t){
    return s.split("").sort().join("") == t.split("").sort().join("");
 }

 console.log(isAnagram(s,t));
 // o(nlogn)