const students = [
    {name:"Erick",grade:7}, {name:"Nerdola da Silva", grade:10},{name:"Burro", grade:3}
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log("Alunos Aprovados:")
console.log(getApprovedStudents(students));

