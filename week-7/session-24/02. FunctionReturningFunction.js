
function add(a,b){
    var result=a+b;

    return function(){
        console.log("Result is: ",result)
    };
}

var func=add(4,5);
func();
 