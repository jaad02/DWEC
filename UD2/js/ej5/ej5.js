let notas = prompt("introduce las notas en formato 4;7;10;6")
let arrayNotas = notas.split(";")
for(i = 0; i<arrayNotas.length;i++){
    if(parseInt(arrayNotas[i])< 3){
        arrayNotas[i] = "Muy deficiente"
    }
    if(parseInt(arrayNotas[i]) >= 3 && parseInt(arrayNotas[i])<5 ){
        arrayNotas[i] = "insu"
    }
    if(parseInt(arrayNotas[i]) >= 5 && parseInt(arrayNotas[i])<6 ){
        arrayNotas[i] = "bien"
    }
    if(parseInt(arrayNotas[i]) >= 6 && parseInt(arrayNotas[i])<9 ){
        arrayNotas[i] = "notable"
    }
    if(parseInt(arrayNotas[i]) >= 9 ){
        arrayNotas[i] = "sobresaliente"
    }
}