const calculator = (() => {

    const ask = () => {
        let firstValue = window.prompt("Entrer la 1ère valeur");
        let operator = window.prompt("Entrer l'opérateur");
        let secondValue = window.prompt("Entrer la 2ème valeur");
        return displayCalcul(firstValue, operator, secondValue);
    };

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    const calcul = (firstValue, operator, secondValue) => {
        switch (operator) {
            case "+" :
                return add(parseInt(firstValue), parseInt(secondValue));
            case "-" :
                return sub(parseInt(firstValue), parseInt(secondValue));
            case "*" :
                return mul(parseInt(firstValue), parseInt(secondValue));
            case "/" :
                return div(parseInt(firstValue), parseInt(secondValue));
            default :
                return "Invalid Operator"
        };
    }
    const displayCalcul = (firstValue, operator, secondValue) => {
        alert(`${firstValue} ${operator} ${secondValue} = ${calcul(firstValue, operator, secondValue)}`);
    }

    return {ask}
})();

calculator.ask();

