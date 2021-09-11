const users = ['erick', 'maria', 'joao'];

const gender = {
    MALE: Symbol('M'),
    FEMALE: Symbol('F'),
    OTHER: Symbol('O')
}

const people = [
    {
        name: users[0],
        age: 26,
        gender: gender.MALE
    },
    {
        name: users[1],
        age: 42,
        gender: gender.FEMALE
    },
    {
        name: users[2],
        age: 23,
        gender: gender.OTHER
    }
];

console.log(`quantidade de pessoas cadastradas ${people.length}`);
console.log(`a variavel people é array? : ${Array.isArray(people)}`);

//people.forEach((person, index) => console.log(`${index} - ${person.name}`));

//funcoes que nao alteram o objeto
//filter => filtra array com condicoes
const nonBinaryPeople = people.filter(person => person.gender === gender.OTHER);
console.log(`lista apenas com pessoas não binárias: `, nonBinaryPeople)

//map retorna novo array/objeto 
const peopleWithCourse = people.map((person) => {
    return {
        name: person.name,
        age: person.age,
        gender: person.gender,
        course: 'JavaScript ES6 Essentials'
    }
});

console.log(`pessoas sem propriedade curso: `, people);
console.log(`pessoasComCurso com propriedade curso: `, peopleWithCourse);

//transformar array em outro tipo
const totalAge = people.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log(`total da idade das pessoas: ${totalAge}`);

//somando idades pares
const totalEvenAges = people
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);

    console.log(`total das idades pares: ${totalEvenAges}`);