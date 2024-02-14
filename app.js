//alert("hola mundo");
let intentosMaximos=3;
let numeroUsuario=0;
let numeroSecreto=Math.floor(Math.random()*10)+1;
let numeroIntentos=0;
//let palabraveces="vez";
while(numeroUsuario!=numeroSecreto){
     numeroUsuario=parseInt(prompt("escriba un numero del 1 al 10"));
     numeroIntentos=numeroIntentos+1;
    if(numeroUsuario==numeroSecreto){
        alert(`felicidades,el numero secreto es: ${numeroUsuario} y lo hiciste en ${numeroIntentos} ${numeroIntentos>1 ? "veces" : "vez"}`);
    }
    else{
        if(numeroSecreto>numeroUsuario){
        alert("no el numero es mayor");
        }else {
        alert("no,el numero es menor");
        }
        //palabraVeces="veces";
        if(numeroIntentos==intentosMaximos){
            alert(`llegaste al numero maximo de: ${intentosMaximos} intentos`);
            break;
        }
    }
}
































