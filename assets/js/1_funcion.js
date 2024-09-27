const example = function (a, b, c) {
    return a + b + c;
};
console.log(example(1, 2, 3))

const result = example(1, 2, 3);
document.getElementById('output').textContent = 'El resultado es: ' + result;
