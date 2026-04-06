// identity <T>(value:T):T
function identity<T>(value: T):T{
    return value;
}

//console.log(identity<string>("Hello World!"));

function getFirst<T>(arr:T[]):T{
    return arr[0];
}
console.log(getFirst<number>([1,3,10,45]));
console.log(getFirst<string>(["Hello","World","!"]));
