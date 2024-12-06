function processStudents(students) {
    let fStudents = students.filter(student => student.marks > 60);
    let sStudents = fStudents.sort((a, b) => b.marks - a.marks);
    let studentNames = sStudents.map(student => student.name);
    return studentNames;
}
let students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
];
console.log(processStudents(students));