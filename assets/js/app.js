const calculator = (function () {
    "use strict";

    //les variables
    let operation, result, inputValue, numbers, op;


    // function pour selectionner les elements
    const element = function element(el) {
       if (el.charAt(0) === "#") {
           return document.querySelector(el);
       }
       return document.querySelectorAll(el);
    };

    // function pour tous mettre a 0 avec la touch backspace et C
    const clear = function clear() {
        const clr = element("#erase");
        clr.onclick = function () {
            operation = element("#operation");
            result = element("#result");
            result.value = "";
            operation.value = "";
        }
    };
    const clearKey = function clearKey(e) {
        if (e.keyCode === 8) {
          operation = element("#operation");
          result = element("#result");
          result.value = "";
          operation.value = "";
        }
    };

    //function pour mettre la valeur saisie dans l'input avec les touches clavier
    const getNumValue = function getNumValue(e) {
        const key = document.querySelector(`span[data-key="${e.keyCode}"]`);
        if (key) {
            let numVal = key.dataset.value;
            operation = element("#operation");
            operation.value += numVal;
        }
    };

    //function pour faire les calcules
    const calcul = function calcul() {
        inputValue = element("#operation").value;

        numbers = inputValue.split(/\+|\-|\*|\÷/g);
        op = inputValue.replace(/[0-9]|\./g, "").split("");

        let divide = op.indexOf("÷");
        while (divide !== -1) {
            numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
            op.splice(divide, 1);
            divide = op.indexOf("÷");
        }

        let multiply = op.indexOf("*");
        while (multiply !== -1) {
            numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
            op.splice(multiply, 1);
            multiply = op.indexOf("*");
        }

        let minus = op.indexOf("-");
        while (minus !== -1) {
            numbers.splice(minus, 2, numbers[minus] - numbers[minus + 1]);
            op.splice(minus, 1);
            minus = op.indexOf("-");
        }

        let plus = op.indexOf("+");
        while (plus !== -1) {
            numbers.splice(plus, 2, parseFloat(numbers[plus]) + parseFloat(numbers[plus + 1]));
            op.splice(plus, 1);
            plus = op.indexOf("+");
        }

        document.getElementById("result").value = numbers[0];
    };

    //function pour recuprer et afficher les valeur au click sur les span
    const getNumValueClick = function getNumValueClick() {
        const num = element(".number, .symb, .coma");
        num.forEach(function (elem) {
            elem.onclick = function () {
                operation = element("#operation");
                operation.value += elem.dataset.value;
            }
        });
    };

    //function playSound pour jouer les sons au click
    const playSound = function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    };

    const init = function init() {
        window.addEventListener('keydown', playSound);
        window.addEventListener('keydown', getNumValue);
        window.addEventListener('keydown', clearKey);
        window.addEventListener("keydown", function (e) {if (e.keyCode === 13) {calcul();}});
        document.getElementById("btn_enter").onclick = calcul;
        clear();
        getNumValueClick();
    };

    window.addEventListener("DOMContentLoaded", init);

}());