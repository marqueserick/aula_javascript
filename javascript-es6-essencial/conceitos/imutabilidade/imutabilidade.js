const user = {
    name: 'Erick',
    lastName: 'Marques'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const UserWitFullName = getUserWithFullName(user);
console.log(UserWitFullName);