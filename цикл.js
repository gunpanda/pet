
// цикл while условие потом дейтсиве

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}

// цикл do сгачала действие потом проверка условия
do {
    console.log(num);
    num++;
}
while (num < 55);


// цикл for 
for (let i = 1; i < 10; i++) {
    if ( i === 6) {
        // break;
        continue; 
    }
    console.log(i);
   
}