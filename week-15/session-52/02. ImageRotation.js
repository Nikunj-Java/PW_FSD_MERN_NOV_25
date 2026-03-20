let mymatrix = [
    //0 1 2 
    [1, 2, 3], //0
    [4, 5, 6], //1
    [7, 8, 9]  //2
];

function rotate(matrix){
    let n= matrix.length;
    //01. transpose
    for (let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            [matrix[i][j],matrix[j][i]]= [matrix[j][i],matrix[i][j]]
        }
    }
    //02 reverse
    for (let row of matrix){
        row.reverse();
    }
    return matrix;
}
//console.log("Transpose of Matrix:",rotate(matrix));
console.log("Matrix Rotation:",rotate(mymatrix));