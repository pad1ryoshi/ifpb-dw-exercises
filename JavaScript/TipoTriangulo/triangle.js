// Equilateral = três lados iguais, a = b = c
// Isosceles = dois lados com o mesmo comprimento, a = b != c
// Escaleno = todos os lados com comprimento diferente, a != b != c
// None = todas as somas de dois lados com valores diferentes do lado restante

// Primeiro, verificar se é um triângulo = a + b > c, a + c > b, b + c > a.
// Se, a = b = c, equilatero
// Se, a = b ou a = c ou b = c, isósceles
// Se, a != b e a != c e b != c, escaleno

const triangleSides = function (a, b, c) {
    if (a + b > c && a + c > b && b + c > a){
        if (a === b && b === c) {
            return 'equilateral'
        } else if (a !== b && b !== c){
            return 'scalene';
        } else {
            return 'isosceles';
        }

    } else {
        return 'none';
    }
}

console.log(triangleSides(2, 2, 2));
console.log(triangleSides(3, 4, 4));
console.log(triangleSides(3, 4, 5));
console.log(triangleSides(0, 0, 0));