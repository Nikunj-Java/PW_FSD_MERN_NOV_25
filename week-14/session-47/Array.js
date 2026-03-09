let arr= [65,70,80,90,75,100];
console.log(arr);
console.log("Element at index [0]:",arr[0])
console.log("Length of an array:",arr.length)
console.log("Index of:",arr.indexOf(100));
console.log("Includes:",arr.indexOf(100));

arr.push(120);//add element at the end
console.log(arr);

arr.pop(); //removes the last element
console.log(arr);

arr.shift(); //remove the first element
console.log(arr)

arr.unshift(10); //add the element at the begining
console.log(arr)

