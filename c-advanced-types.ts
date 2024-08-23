// Tipo: tuple (tupla)
const tupleExample: [string, number] = ["Baub", 35];
console.log(tupleExample);

// Tipo: enum (enumeración)
enum Colors {
    Red,
    Green,
    Blue
}
const favoriteColor: Colors = Colors.Green;
console.log(favoriteColor); // Imprimirá el índice, en este caso: 1

// Tipo: union (puede ser más de un tipo)
let mixedType: number | string;
mixedType = 10;
console.log(mixedType);
mixedType = "Hola";
console.log(mixedType);
