const words = ['HTML', 'PROGRAMACION', 'STRING', 'PARSEINT', 'WHILE', 'BUTTON']

const guardarBot = document.getElementById('reiniciar');
guardarBot.addEventListener('click', agregar);

let nuevaPa = document.getElementById("palabra");

nuevaPa.addEventListener('keypress',function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    //47 al 58 son numeros
    if(keyCode > 47 && keyCode < 58 ){
        e.preventDefault();
    }
});

function agregar(){
    
    words.push(nuevaPa.value);
    alert(`Palabra agregada: ${nuevaPa.value}`); 
    location.href = "juego.html"
    
};






