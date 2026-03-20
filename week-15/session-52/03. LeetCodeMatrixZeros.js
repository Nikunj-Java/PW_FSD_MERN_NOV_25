function setZeros(matrix){
    // i-> row, j-> column
    let rows= matrix.length;
    let col= matrix[0].length;
    // step:1
    let firstRowZero= false;
    let firstColumnZero= false;
    //step:2 check the first column
    for( let i=0; i<rows; i++){
        if(matrix[i][0]=== 0) firstColumnZero=true
    }
     //step:3 check the first row
    for( let j=0; j<col; j++){
        if(matrix[0][j]=== 0) firstRowZero=true
    }

    // step:4 Mark
    for( let i=1; i<rows;i++){
        for (let j=1; j<col;j++){
            if(matrix[i][j] === 0){
                matrix[i][0]=0;
                matrix[0][j]=0;
            }
        }
    }
    //step: 5 Set Zeros
    for( let i=1; i<rows;i++){
        for (let j=1; j<col;j++){
            if(matrix[i][0] === 0 || matrix[0][j]=== 0){
                matrix[i][j]=0;
            }
        }
    }
    //step:6 first row zero
    if(firstRowZero){
        for (let j=0; j<col; j++) matrix[0][j]=0
    }
    //step:6 first row zero
    if(firstColumnZero){
        for (let i=0; i<rows; i++) matrix[i][0]=0
    }
    return matrix;
}

let mymatrix = [
    //0 1 2 
    [1, 1, 1], //0
    [1, 0, 1], //1
    [1, 1, 1]  //2
];

console.log("LeetCodeMatrixZero:",setZeros(mymatrix));