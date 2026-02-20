// Create a Set to store unique tags
let tags = new Set();

// Add Tag
function addTag() {
    let input = document.getElementById("tagInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Please enter a tag");
        return;
    }

    tags.add(value); // Set automatically prevents duplicates
    input.value = "";
    displayTags();
}

// Display Tags
function displayTags() {
    let tagList = document.getElementById("tagList");
    tagList.innerHTML = "";

    tags.forEach(tag => {
        let span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;

        // Remove tag on click
        span.onclick = function() {
            tags.delete(tag);
            displayTags();
        };

        tagList.appendChild(span);
    });
}

// Clear All Tags
function clearTags() {
    tags.clear();
    displayTags();
}