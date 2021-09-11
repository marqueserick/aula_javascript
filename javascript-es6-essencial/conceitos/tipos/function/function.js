function fn() {
    return 'this is fn() function';
}

const arrowFn = () => 'this is arrowFn() function';
const arrowFn2 = () => {
    var text = 'this is arrow function with more than one line';
    return text;
}

//funcoes tbm são objetos
fn.prop = `function's property`
console.log(fn());
console.log(fn.prop);

//receber parametros
const printValue = value => console.log(value);
printValue('Erick');

//pode retornar funcoes
const functionParam = func => console.log(func());

functionParam(fn)

const controlFunction = func => allowed => {
    return function (allowed) {
        if (allowed) {
            return functionParam();
        }
    }
}
const handleFnExecution = controlFunction(fn)
handleFnExecution();