// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let string = "Guitarra";

function reverterString(string) {
    let stringInvertida = [];

    let stringArray = string.split("");

    for (let i = string.length; i > -1; i--) {
        stringInvertida.push(stringArray[i]);
    }
    stringInvertida.shift();

    return console.log(stringInvertida);
}

reverterString(string);
