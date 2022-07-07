//INICIO DEL JUEGO AHORCADO
const wordContainer = document.getElementById('wordContainer'); //trayendo contenedor
const startButton = document.getElementById('startButton');//boton empezar
const usedLettersElement = document.getElementById('usedLetters'); // pocicion de las letras

let canvas = document.getElementById('canvas'); //trayendo el canvas
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0; //medidas del canvas
ctx.canvas.height = 0;

const bodyParts = [ //valores del dibujo 
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let selectedWord; //palabra oculta
let usedLetters; //letras que se usaron
let mistakes; //herrores de juego
let hits; //aciertos de juego

const addLetter = letter => {//adicionando letras o elementos
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    usedLettersElement.appendChild(letterElement);
}

const addBodyPart = bodyPart =>{//colocando partes del cuerpo
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
}

const wrongLetter = () =>{
    addBodyPart(bodyParts[mistakes]);
    mistakes++;
    if(mistakes === bodyParts.length){
        alert(`Perdiste!, la palabra era: ${selectedWord}, Fin del Juego.`);
        

    } //endGame();//comparando los errores con la cantidad de partes
    
}

const endGame = () => {
    document.removeEventListener('keydown', letterEvent);
    //startButton.style.display = 'block';
    
}

const correctLetter = letter =>{
    const { children } = wordContainer; //obteniendo los span del contenedor
    for(let i = 0; i < children.length; i++) { 
        if (children[i].innerHTML === letter) {//comparando letra usuario y palabra escondida
            children[i].classList.toggle('hidden');//aparecer letra
            hits++; // sumamos aciertos 
        }    
    }
    if(hits === selectedWord.length){
        alert('Ganaste!, Fin del Juego')
    }
}

const letterInput = letter =>{
    if(selectedWord.includes(letter)){//si la palabra tiene la letra
        correctLetter(letter);
    }else{
        wrongLetter();//funcion para letra incorrecta
    }
    addLetter(letter);
    usedLetters.push(letter);

};

const letterEvent = event =>{
    let newLetter = event.key.toUpperCase();//usando mayusculas
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)){//si es una letra y no esta incluida en las ya seleccionadas
        letterInput(newLetter);//coloca la nueva letra

    };
};

const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span'); //creando el elemento span
        letterElement.innerHTML = letter.toUpperCase(); //colocandolo en mayusculas
        letterElement.classList.add('letter'); //agregando la clase letter
        letterElement.classList.add('hidden'); // y hidden
        wordContainer.appendChild(letterElement); // agragando al container 
    });
};

const selectRandomWord = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase(); //llamando una palabra aleatoria
    selectedWord = word.split(''); // dando espacio a los caracteres
    
};

const drawHangMan = () => { // dibujo de la horca
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height); //vorrar al reiniciar el juego
    ctx.fillStyle = '#d95d39' //color del dibujo
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);

};

const startGame = () => { //limpiando variables del juego
    usedLetters = []; //letras que se usaron, vacio
    mistakes = 0; // herrores, cero
    hits = 0; // haciertos, cero
    wordContainer.innerHTML = ''; // limpio o vacio
    usedLettersElement.innerHTML = ''; //limpio o vacio
    //startButton.style.display = 'none'; //escondiendo el boton cuando comience la partida
    //decistir.style.display = 'nome'
    drawHangMan(); // funcion del llamado del juego
    selectRandomWord();//llamando las funciones
    drawWord()//llamando las funciones
    document.addEventListener('keydown',letterEvent); // evento de precionar teclas
};
startButton.addEventListener('click',startGame); //evento de click
//FIN DEL JUEGO AHORACADO

//FUNCIONES DE BOTONES
function desistir(){
    location.href = "index.html"
};

function jugar(){
    
    location.href = "juego.html"
    
};

function menu(){
    location.href = "menu.html"
};

//funcion de hora
function cargar(){
    
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagen")
    var data = new Date()
    var minu = new Date()
    var hora = data.getHours()
    var min = minu.getMinutes()
    msg.innerHTML = `${hora} horas : ${min} minutos.<br><br>`
    if(hora >= 0 && hora < 12){
        msg.innerHTML += "Buenos dias!"
        img.src = "pexels-warren-blake-1477430.jpg"
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += "Buenas tardes!"
        img.src ="tarde.png"
        document.body.style.background = "#b9846f"
    }else{
        msg.innerText += "Buenas noches!"
        img.src ="noche.png"
        document.body.style.background = "hsla(244, 84%, 10%, 0.524)"
    }
}