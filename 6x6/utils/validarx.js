var ganador = 0;
var cantidadJuegos = 0; //Control para reiniciar la variable ganador

function validar(player1 , matrix , contador_selecciones){

    let simbolo; 
    //se reinicia 
    if(cantidadJuegos === 1){
        ganador = 0;
        cantidadJuegos = 0;
    }
    
    if(player1){
        simbolo = 'x';
    }
    else{
        simbolo = 'o';
    }


//FILAS 4 siempre
//Primera fila 
if((simbolo === matrix[0][0] && simbolo === matrix[0][1] && simbolo === matrix[0][2] && simbolo === matrix[0][3]) ||
   (simbolo === matrix[0][1] && simbolo === matrix[0][2] && simbolo === matrix[0][3] && simbolo === matrix[0][4]) ||
   (simbolo === matrix[0][2] && simbolo === matrix[0][3] && simbolo === matrix[0][4] && simbolo === matrix[0][5])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}


//Segunda fila 
if((simbolo === matrix[1][0] && simbolo === matrix[1][1] && simbolo === matrix[1][2] && simbolo === matrix[1][3]) ||
   (simbolo === matrix[1][1] && simbolo === matrix[1][2] && simbolo === matrix[1][3] && simbolo === matrix[1][4]) ||
   (simbolo === matrix[1][2] && simbolo === matrix[1][3] && simbolo === matrix[1][4] && simbolo === matrix[1][5])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Tercera fila 
if((simbolo === matrix[2][0] && simbolo === matrix[2][1] && simbolo === matrix[2][2] && simbolo === matrix[2][3]) ||
   (simbolo === matrix[2][1] && simbolo === matrix[2][2] && simbolo === matrix[2][3] && simbolo === matrix[2][4]) ||
   (simbolo === matrix[2][2] && simbolo === matrix[2][3] && simbolo === matrix[2][4] && simbolo === matrix[2][5])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Cuarta fila 
if((simbolo === matrix[3][0] && simbolo === matrix[3][1] && simbolo === matrix[3][2] && simbolo === matrix[3][3]) ||
   (simbolo === matrix[3][1] && simbolo === matrix[3][2] && simbolo === matrix[3][3] && simbolo === matrix[3][4]) ||
   (simbolo === matrix[3][2] && simbolo === matrix[3][3] && simbolo === matrix[3][4] && simbolo === matrix[3][5])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Quinta fila 
if((simbolo === matrix[4][0] && simbolo === matrix[4][1] && simbolo === matrix[4][2] && simbolo === matrix[4][3]) ||
   (simbolo === matrix[4][1] && simbolo === matrix[4][2] && simbolo === matrix[4][3] && simbolo === matrix[4][4]) ||
   (simbolo === matrix[4][2] && simbolo === matrix[4][3] && simbolo === matrix[4][4] && simbolo === matrix[4][5])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Sexta fila 
if((simbolo === matrix[5][0] && simbolo === matrix[5][1] && simbolo === matrix[5][2] && simbolo === matrix[5][3]) ||
   (simbolo === matrix[5][1] && simbolo === matrix[5][2] && simbolo === matrix[5][3] && simbolo === matrix[5][4]) ||
   (simbolo === matrix[5][2] && simbolo === matrix[5][3] && simbolo === matrix[5][4] && simbolo === matrix[5][5])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//COLUMNAS

//Primera Columna 
if((simbolo === matrix[0][0] && simbolo === matrix[1][0] && simbolo === matrix[2][0] && simbolo === matrix[3][0]) ||
   (simbolo === matrix[1][0] && simbolo === matrix[2][0] && simbolo === matrix[3][0] && simbolo === matrix[4][0]) ||
   (simbolo === matrix[2][0] && simbolo === matrix[3][0] && simbolo === matrix[4][0] && simbolo === matrix[5][0])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Segunda Columna 
if((simbolo === matrix[0][1] && simbolo === matrix[1][1] && simbolo === matrix[2][1] && simbolo === matrix[3][1]) ||
   (simbolo === matrix[1][1] && simbolo === matrix[2][1] && simbolo === matrix[3][1] && simbolo === matrix[4][1]) ||
   (simbolo === matrix[2][1] && simbolo === matrix[3][1] && simbolo === matrix[4][1] && simbolo === matrix[5][1])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Tercera Columna 
if((simbolo === matrix[0][2] && simbolo === matrix[1][2] && simbolo === matrix[2][2] && simbolo === matrix[3][2]) ||
   (simbolo === matrix[1][2] && simbolo === matrix[2][2] && simbolo === matrix[3][2] && simbolo === matrix[4][2]) ||
   (simbolo === matrix[2][2] && simbolo === matrix[3][2] && simbolo === matrix[4][2] && simbolo === matrix[5][2])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Cuarta Columna 
if((simbolo === matrix[0][3] && simbolo === matrix[1][3] && simbolo === matrix[2][3] && simbolo === matrix[3][3]) ||
   (simbolo === matrix[1][3] && simbolo === matrix[2][3] && simbolo === matrix[3][3] && simbolo === matrix[4][3]) ||
   (simbolo === matrix[2][3] && simbolo === matrix[3][3] && simbolo === matrix[4][3] && simbolo === matrix[5][3])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Quinta Columna 
if((simbolo === matrix[0][4] && simbolo === matrix[1][4] && simbolo === matrix[2][4] && simbolo === matrix[3][4]) ||
   (simbolo === matrix[1][4] && simbolo === matrix[2][4] && simbolo === matrix[3][4] && simbolo === matrix[4][4]) ||
   (simbolo === matrix[2][4] && simbolo === matrix[3][4] && simbolo === matrix[4][4] && simbolo === matrix[5][4])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}

//Sexta Columna 
if((simbolo === matrix[0][5] && simbolo === matrix[1][5] && simbolo === matrix[2][5] && simbolo === matrix[3][5]) ||
   (simbolo === matrix[1][5] && simbolo === matrix[2][5] && simbolo === matrix[3][5] && simbolo === matrix[4][5]) ||
   (simbolo === matrix[2][5] && simbolo === matrix[3][5] && simbolo === matrix[4][5] && simbolo === matrix[5][5])){
    if(simbolo==='x'){
        ganador = 1;
        cantidadJuegos +=1; 
    }
    else if(simbolo === 'o'){
        ganador = 2;
        cantidadJuegos +=1; 
    }
    else {
        ganador = 0;
    }
}





//Diagonales izq- der


//Diagonal 02 
    else if(simbolo === matrix[0][2] && simbolo === matrix[1][3] && simbolo === matrix[2][4] && simbolo === matrix[3][5]){
        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
    } 

//Diagonal 01
if((simbolo === matrix[0][1] && simbolo === matrix[1][2] && simbolo === matrix[2][3] && simbolo === matrix[3][4]) ||
   (simbolo === matrix[1][2] && simbolo === matrix[2][3] && simbolo === matrix[3][4] && simbolo === matrix[4][5])){

        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
}

//Diagonal 00
if((simbolo === matrix[0][0] && simbolo === matrix[1][1] && simbolo === matrix[2][2] && simbolo === matrix[3][3]) ||
   (simbolo === matrix[1][1] && simbolo === matrix[2][2] && simbolo === matrix[3][3] && simbolo === matrix[4][4]) ||
   (simbolo === matrix[2][2] && simbolo === matrix[3][3] && simbolo === matrix[4][4] && simbolo === matrix[5][5])){

        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
}

//Diagonal 10
if((simbolo === matrix[1][0] && simbolo === matrix[2][1] && simbolo === matrix[3][2] && simbolo === matrix[4][3]) ||
   (simbolo === matrix[2][1] && simbolo === matrix[3][2] && simbolo === matrix[4][3] && simbolo === matrix[5][4])){

        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
}

//Diagonal 20 
    else if(simbolo === matrix[2][0] && simbolo === matrix[3][1] && simbolo === matrix[4][2] && simbolo === matrix[5][3]){
        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
    } 




//Diagonales der - izq
//Diagonal 03 
    else if(simbolo === matrix[0][3] && simbolo === matrix[1][2] && simbolo === matrix[2][1] && simbolo === matrix[3][0]){
        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
    } 

//Diagonal 04
if( (simbolo === matrix[0][4] && simbolo === matrix[1][3] && simbolo === matrix[2][2] && simbolo === matrix[3][1]) ||
    (simbolo === matrix[1][3] && simbolo === matrix[2][2] && simbolo === matrix[3][1] && simbolo === matrix[4][0])){

        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
    }

//Diagonal 05
if( (simbolo === matrix[0][5] && simbolo === matrix[1][4] && simbolo === matrix[2][3] && simbolo === matrix[3][2]) ||
    (simbolo === matrix[1][4] && simbolo === matrix[2][3] && simbolo === matrix[3][2] && simbolo === matrix[4][1]) ||
    (simbolo === matrix[2][3] && simbolo === matrix[3][2] && simbolo === matrix[4][1] && simbolo === matrix[5][0])){

        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
    }

//Diagonal 15
if( (simbolo === matrix[1][5] && simbolo === matrix[2][4] && simbolo === matrix[3][3] && simbolo === matrix[4][2]) ||
    (simbolo === matrix[2][4] && simbolo === matrix[3][3] && simbolo === matrix[4][2] && simbolo === matrix[5][1])){

        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
    }

//Diagonal 25 
    else if(simbolo === matrix[2][5] && simbolo === matrix[3][4] && simbolo === matrix[4][3] && simbolo === matrix[5][2]){
        if(simbolo==='x'){
            ganador = 1;
            cantidadJuegos +=1; 
        }
        else if(simbolo === 'o'){
            ganador = 2;
            cantidadJuegos +=1; 
        }
        else {
            ganador = 0;
        }
    } 
















    if(contador_selecciones === 35){
        const nextButton = document.getElementById("nextButton");
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "#1A1A40";
        nextButton.style.cursor = "pointer";
        ganador = 3; //Empate
    }

    return ganador; 
}

export default validar; 