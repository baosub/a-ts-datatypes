"use strict";
const tupleExample = ["Baub", 35];
console.log(tupleExample);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
const favoriteColor = Colors.Green;
console.log(favoriteColor);
let mixedType;
mixedType = 10;
console.log(mixedType);
mixedType = "Hola";
console.log(mixedType);
