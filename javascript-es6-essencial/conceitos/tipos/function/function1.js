(() => {
    this.name = 'arrow function name';
    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name: 'Erick',
        getNameArrowFn,
        getName
    }
    
    console.log(user.getName());
    console.log(user.getNameArrowFn());

}
)();

