const students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age,
        grade: grade
    };

    students.push(newStudent);
    displayStudents();
}

function deleteStudent() {
    const deleteId = document.getElementById('deleteId').value;
    const index = students.findIndex(student => student.id == deleteId);

    if (index !== -1) {
        students.splice(index, 1);
        displayStudents();
    }
}

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.innerHTML = `<p>ID: ${student.id}</p>
                                <p>Tên: ${student.name}</p>
                                <p>Tuổi: ${student.age}</p>
                                <p>Điểm: ${student.grade}</p>`;
        studentList.appendChild(studentDiv);
    });
}

// Initial display of students
window.onload = function() {
    displayStudents();
};