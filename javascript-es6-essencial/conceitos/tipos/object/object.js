let user = {
    name: 'Erick'
};

//alterando a propriedade de um objeto
user.name = 'Erick M.';
user['name'] = 'Erick';

console.log(user);

const prop = 'name';
user[prop] = 'Erick M.';

//adicionando uma propriedade
user.lastName = 'Alves';
console.log(user);

//deletando propriedade
delete user.name;
console.log(user);

