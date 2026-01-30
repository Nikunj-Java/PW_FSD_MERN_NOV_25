//let count=0; //Module -Scoped (NOT Global)
export let count=0; //Module -Scoped (Global)

export function increment() {
    count++;
    return count;
}

export function decrement() {
    count--;
    return count;
}
//console.log("Counter module loaded. Initial count:", count);