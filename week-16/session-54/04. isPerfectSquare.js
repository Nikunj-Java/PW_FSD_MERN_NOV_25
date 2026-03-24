function isPerfectSquare(num){
    let left=1, right=num;

    while (left <=right){
        let mid= Math.floor((left+right)/2);
        let square= mid * mid;
        if(square === num) return true;
        if(square < num) left=mid+1;
        else right=mid-1;
    }
    return false;
}
console.log("Check PerfectSquare: ",isPerfectSquare(225));
// check for 4,16,25,36,40,49,64,81,90,100,125,625,1000