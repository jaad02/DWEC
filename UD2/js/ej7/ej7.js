let num = parseInt(prompt("Introduce un número"));
let num2 = 0;

for (let i = 0; i < num; i++) {
    num2++;
    let line = ""; 
    for (let j = 0; j < num2; j++) {
        line += "*"; 
    }
    console.log(line); 
}
