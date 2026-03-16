function PowerIterative(base,exp){
    let result= 1;
    for (let i=0; i< exp ; i++){
        result *=base;
    }
    return result;
}
console.log(PowerIterative(2,5)); //32
console.log(PowerIterative(2,10)); //1024
console.log(PowerIterative(25,2)); //625