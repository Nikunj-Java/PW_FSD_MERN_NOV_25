// Load saved data from localStorage
let students = new Map(JSON.parse(localStorage.getItem("students")) || []);

// Add Student
function addStudent() {
    let rollNo = document.getElementById("rollNo").value;
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (!rollNo || !name || !marks) {
        alert("Please fill all fields");
        return;
    }

    if (students.has(rollNo)) {
        alert("Roll number already exists!");
        return;
    }

    let grade = calculateGrade(marks);

    students.set(rollNo, { name, marks, grade });

    saveData();
    displayStudents();
    clearInputs();
}

// Grade Logic
function calculateGrade(marks) {
    marks = Number(marks);

    if (marks >= 90) return "A+";
    if (marks >= 75) return "A";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    return "Fail";
}

// Display Students
function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((value, rollNo) => {
        table.innerHTML += `
            <tr>
                <td>${rollNo}</td>
                <td>${value.name}</td>
                <td>${value.marks}</td>
                <td>${value.grade}</td>
                <td>
                    <button class="delete-btn" onclick="deleteStudent('${rollNo}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// Delete Student
function deleteStudent(roll) {
    students.delete(roll);
    saveData();
    displayStudents();
}

// Save to localStorage
function saveData() {
    localStorage.setItem("students", JSON.stringify([...students]));
}

// Clear input fields
function clearInputs() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

// Initial render
displayStudents();