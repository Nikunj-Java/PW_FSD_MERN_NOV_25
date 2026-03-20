let mymatrix = [
    //0 1 2 
    [1, 2, 3], //0
    [4, 5, 6], //1
    [7, 8, 9]  //2
];

//approach:
//1 top
//2 bottom
//3 left
//4 right

function spiralOrderMatrix(matrix){
    let result=[];
    let top=0;
    let bottom=matrix.length -1;
    let left= 0;
    let right= matrix[0].length -1;
    while( top <=bottom && left <=right){
        //left-> right
        for (let i=left;i<=right;i++){
            result.push(matrix[top][i]);
        }
        top++;

        //top-> bottom
        for (let i=top;i<=bottom;i++){
            result.push(matrix[i][right]);
        }
        right--;

        if(top <=bottom){
            //right-->left
            for(let i= right; i>= left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        // bottom --> top
        if(left <=right){
            //bottom --> top
            for (let i= bottom;i>= top;i--){
                result.push(matrix[i][left]);
            }
            left ++;
        }
    }
    return result;
}

console.log("Spiral Matrix Printing: ",spiralOrderMatrix(mymatrix));