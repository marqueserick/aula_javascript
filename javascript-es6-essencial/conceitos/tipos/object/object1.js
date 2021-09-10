const user = {
    name:'Erick',
    lastName:'Marques'
};

console.log(`propriedades do objeto: ${Object.keys(user)}`);
console.log(`valores do objeto: ${Object.values(user)}`);
console.log(`propriedades e valores do objeto: ${Object.entries(user)}`);

Object.assign(user, {fullName: 'Erick Marques'})//não recomendado fazer dessa forma;
console.log(`fazendo merge com assign sem sobrescrever o objeto`,Object.assign({},user,{age:26}));
console.log(user);
Object.freeze(user);//congela totalmente o objeto
const person = {name:'Erick'};
console.log(person);
Object.seal(person)//permite que troque as propriedades sem add ou remover
person.name='Erick Marques';
person.lastName = 'Alves'; // nao vai adicionar
console.log(person);
