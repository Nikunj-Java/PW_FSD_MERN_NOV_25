// write a program to find the area of circle
// formula= πr²

function areaOfCircle(radius) {
    const _pi=3.14;
    const area= _pi * radius * radius;
    return area;
}

const area= areaOfCircle(5);
console.log("Area of circle is:", area);