let matrix = [
    //0 1 2 
    [1, 2, 3], //0
    [4, 5, 6], //1
    [7, 8, 9]  //2
];

console.log("M11: 1st Row 1 Column:", matrix[0][0]);
console.log("M12: 1st Row 2 Column:", matrix[0][1]);
console.log("M12: 1st Row 3 Column:", matrix[0][2]);
console.log("M21: 2nd Row 1 Column:", matrix[1][0]);
console.log("M22: 2nd Row 2 Column:", matrix[1][1]);
console.log("M23: 2nd Row 3 Column:", matrix[1][2]);
// complete the 3rd row and all columns



//traversing in a 2d Array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}