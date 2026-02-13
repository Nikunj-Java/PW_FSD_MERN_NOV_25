// 1. Get the current date and time
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// 2. Extract specific date components
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Adding 1 since months are zero-indexed
let dayOfMonth = currentDate.getDate();
let dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.

console.log("Year:", year);
console.log("Month:", month);
console.log("Day of the Month:", dayOfMonth);
console.log("Day of the Week (0 = Sunday):", dayOfWeek);

// 3. Modify the date
currentDate.setDate(15); // Set day to 15
currentDate.setMonth(1); // Set month to February (1 because months are zero-indexed)
console.log("Updated Date:", currentDate);

// 4. Handling time zones
let utcDay = currentDate.getUTCDate();
let utcHours = currentDate.getUTCHours();
let utcMinutes = currentDate.getUTCMinutes();

console.log("UTC Day:", utcDay);
console.log("UTC Time (HH:MM):", utcHours + ":" + utcMinutes);

let localHours = currentDate.getHours();
let localMinutes = currentDate.getMinutes();

console.log("Local Time (HH:MM):", localHours + ":" + localMinutes);

// 5. Optional: Format date function
function formatDate(date, useUTC = false) {
    let year = useUTC ? date.getUTCFullYear() : date.getFullYear();
    let month = (useUTC ? date.getUTCMonth() : date.getMonth()) + 1; // Adding 1 for zero-index
    let day = useUTC ? date.getUTCDate() : date.getDate();
    let hours = useUTC ? date.getUTCHours() : date.getHours();
    let minutes = useUTC ? date.getUTCMinutes() : date.getMinutes();
    let seconds = useUTC ? date.getUTCSeconds() : date.getSeconds();

    // Ensure two-digit formatting
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

console.log("Formatted Local Date:", formatDate(currentDate));
console.log("Formatted UTC Date:", formatDate(currentDate, true));
