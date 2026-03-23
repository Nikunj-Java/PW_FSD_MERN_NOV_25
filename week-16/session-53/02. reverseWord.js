// input: I Love JavaScrip
// output: Javascript Love I 

function reverseWord(s){
    return s
    .trim()        // remove extra space
    .split(/\s+/) // split by multiple space
    .reverse()
    .join(" ");
  
}

console.log(reverseWord(" I Love JavaScript "));