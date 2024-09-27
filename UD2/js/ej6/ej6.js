let notas = prompt("introduce las notas en formato 4,7,10,6")
let arrayNotas = notas.split(",")
let cont = 0
for(i = 0; i<arrayNotas.length;i++){
    if(parseInt(arrayNotas[i]) == 10){
       cont++
    }
}
if(cont > 0){
    console.log("Si")
}else{
    console.log("No")
}
