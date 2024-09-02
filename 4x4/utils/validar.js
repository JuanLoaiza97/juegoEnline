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
//FILAS    
//Primera fila 
    if(simbolo === matrix[0][0] && simbolo === matrix[0][1] && simbolo === matrix[0][2] && simbolo === matrix[0][3]){
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
//segunda fila
    else if(simbolo === matrix[1][0] && simbolo === matrix[1][1] && simbolo === matrix[1][2] && simbolo === matrix[1][3]){
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
    else if(simbolo === matrix[2][0] && simbolo === matrix[2][1] && simbolo === matrix[2][2] && simbolo === matrix[2][3]){
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
    else if(simbolo === matrix[3][0] && simbolo === matrix[3][1] && simbolo === matrix[3][2] && simbolo === matrix[3][3]){
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
//Primera columna
    else if(simbolo === matrix[0][0] && simbolo === matrix[1][0] && simbolo === matrix[2][0] && simbolo === matrix[3][0]){
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

//Segunda columna

    else if(simbolo === matrix[0][1] && simbolo === matrix[1][1] && simbolo === matrix[2][1] && simbolo === matrix[3][1]){
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
    else if(simbolo === matrix[0][2] && simbolo === matrix[1][2] && simbolo === matrix[2][2] && simbolo === matrix[3][2]){
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
    else if(simbolo === matrix[0][3] && simbolo === matrix[1][3] && simbolo === matrix[2][3] && simbolo === matrix[3][3]){
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
//Diagonales    
//Diagonal 1 
    else if(simbolo === matrix[0][0] && simbolo === matrix[1][1] && simbolo === matrix[2][2] && simbolo === matrix[3][3]){
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

//Diagonal 2

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

    if(contador_selecciones === 15){
        const nextButton = document.getElementById("nextButton");
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "#1A1A40";
        nextButton.style.cursor = "pointer";
        ganador = 3; //Empate
    }

    return ganador; 
}

export default validar; 