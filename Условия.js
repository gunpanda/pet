'use strict';

// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('Not ok!');
// };

// const num = 50;
// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// };

(num === 50) ? console.log('Ok!'): console.log("Error"); // Тернарный оператор

const num = 51;

switch (num) {
    case 49:
        console.log('Error!');
        break;
    case 100:
        console.log('Error!');
        break;
    case 50:
        console.log('Yeahh Right');
        break;
    default:
        console.log('Next Time, Man!');
        break;
};
// switch - всегда строгое сравнение 