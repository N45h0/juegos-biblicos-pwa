// Datos reales de juegos bíblicos (NVI)
const bibleData = {
    tabu: [
        { 
            palabra: "Jonás", 
            prohibidas: ["Pez", "Nínive", "Tormenta"], 
            referencia: "Jonás 1:1-17" 
        },
        { 
            palabra: "Gedeón", 
            prohibidas: ["Lana", "300", "Jueces"], 
            referencia: "Jueces 7:1-25" 
        },
        { 
        palabra: "Rut", 
        prohibidas: ["Noemí", "Booz", "Espigas"], 
        referencia: "Rut 1:1-22" 
        },
        { 
        palabra: "Esteban", 
        prohibidas: ["Mártir", "Hechos", "Piedras"], 
        referencia: "Hechos 7:54-60" 
        },
        {
        palabra: "Adán",
prohibidas: ["Eva", "Edén", "Manzana"],
referencia: "Génesis 2-3"
},
{
palabra: "Noé",
prohibidas: ["Arca", "Diluvio", "Animales"],
referencia: "Génesis 6-9"  
},
{
palabra: "Abraham",
prohibidas: ["Sara", "Isaac", "Promesa"],
referencia: "Génesis 12-25"
},
{
palabra: "Moisés", 
prohibidas: ["Egipto", "Mar Rojo", "Tablas"],
referencia: "Éxodo 2-Deuteronomio 34"
},
{
palabra: "David",
prohibidas: ["Goliat", "Salmo", "Belén"],
referencia: "1 Samuel 16-1 Reyes 2"
},
{
palabra: "Salomón",
prohibidas: ["Sabiduría", "Templo", "Riquezas"],
referencia: "1 Reyes 3-11"
},
{
palabra: "Elías",
prohibidas: ["Carro de fuego", "Profeta", "Carmelo"],
referencia: "1 Reyes 17-2 Reyes 2"
},
{
palabra: "Ester",
prohibidas: ["Mardoqueo", "Asuero", "Purim"],
referencia: "Libro de Ester"
},
{
palabra: "Job",
prohibidas: ["Pruebas", "Amigos", "Paciencia"],
referencia: "Libro de Job"
},
{
palabra: "Daniel",
prohibidas: ["Leones", "Babilonia", "Sueños"],
referencia: "Daniel 1-12"
},
{
palabra: "Febe",
prohibidas: ["Diaconisa", "Cencrea", "Pablo"],
referencia: "Romanos 16:1-2"
},
        // ... 48 tarjetas más ...
    ],

    trivia: [
        {
            pregunta: "¿Quién construyó el arca?",
            opciones: ["Noé", "Moisés", "Abraham"],
            respuesta: 0,
            referencia: "Génesis 6:14"
        },
        {
            pregunta: "¿Qué apóstol negó a Jesús tres veces?",
            opciones: ["Pedro", "Juan", "Judas"],
            respuesta: 0,
            referencia: "Mateo 26:69-75"
        },
          // ... Ejemplos adicionales ...
        {
        pregunta: "¿Qué mujer fue convertida en estatua de sal?",
        opciones: ["Eva", "Sara", "La esposa de Lot"],
        respuesta: 2,
        referencia: "Génesis 19:26"
        },
        {
        pregunta: "¿Qué apóstol era recaudador de impuestos?",
        opciones: ["Mateo", "Simón", "Bartolomé"],
        respuesta: 0,
        referencia: "Mateo 9:9"
        },
        {
    pregunta: "¿Cuántos días duró el diluvio?",
    opciones: [40, 150, 365],
    respuesta: 0,
    referencia: "Génesis 7:17"
},
{
    pregunta: "¿Qué apóstol era médico?",
    opciones: ["Lucas", "Marcos", "Mateo"],
    respuesta: 0,
    referencia: "Colosenses 4:14"
},
{
    pregunta: "¿Qué significa 'Emmanuel'?",
    opciones: ["Dios con nosotros", "Rey de reyes", "Príncipe de paz"],
    respuesta: 0,
    referencia: "Mateo 1:23"
},
{
    pregunta: "¿Dónde nació Jesús?",
    opciones: ["Belén", "Nazaret", "Jerusalén"],
    respuesta: 0,
    referencia: "Mateo 2:1"
},
{
    pregunta: "¿Quién traicionó a Jesús?",
    opciones: ["Judas Iscariote", "Pedro", "Tomás"],
    respuesta: 0,
    referencia: "Mateo 26:14-16"
},
{
    pregunta: "¿Qué apóstol escribió el libro de Apocalipsis?",
    opciones: ["Juan", "Pablo", "Pedro"],
    respuesta: 0,
    referencia: "Apocalipsis 1:1-2"
},
        // ... 48 preguntas más ...
    ],

    memo: [
        { 
            tema: "Salvación por fe", 
            pasaje1: "Efesios 2:8-9", 
            pasaje2: "Romanos 3:28" 
        },
        { 
            tema: "Amor al prójimo", 
            pasaje1: "Mateo 22:39", 
            pasaje2: "Levítico 19:18" 
        },
                // ... Ejemplos adicionales ...
        { 
        tema: "Resurrección", 
        pasaje1: "1 Corintios 15:20", 
        pasaje2: "Juan 11:25" 
        },
        { 
        tema: "Perdón", 
        pasaje1: "Mateo 6:14", 
        pasaje2: "Colosenses 3:13" 
        },
        {
    tema: "Creación",
    pasaje1: "Génesis 1:1",
    pasaje2: "Juan 1:3"
},
{
    tema: "Pecado original",
    pasaje1: "Romanos 3:23",
    pasaje2: "Romanos 6:23"
},
{
    tema: "Fe de Abraham",
    pasaje1: "Génesis 15:6",
    pasaje2: "Romanos 4:3"
},
{
    tema: "Resurrección",
    pasaje1: "1 Corintios 15:20",
    pasaje2: "Juan 11:25"
},
{
    tema: "Segunda Venida",
    pasaje1: "Hechos 1:11",
    pasaje2: "Apocalipsis 22:20"
},
        // ... 23 pares más ...
    ]
};

// ====================================================
// ¡No toques nada desde aquí hacia abajo! ↓
// ====================================================


// ========== LÓGICA MULTIJUGADOR ========== //
let players = {
    player1: { name: "", score: 0 },
    player2: { name: "", score: 0 },
    currentTurn: 1
};

function startGame() {
    players.player1.name = document.getElementById('player1').value || "Jugador 1";
    players.player2.name = document.getElementById('player2').value || "Jugador 2";
    
    document.getElementById('start-screen').style.display = "none";
    document.getElementById('game-screen').style.display = "block";
    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById('current-player').textContent = `Turno: ${players[`player${players.currentTurn}`].name}`;
    document.getElementById('score1').textContent = `${players.player1.name}: ${players.player1.score} puntos`;
    document.getElementById('score2').textContent = `${players.player2.name}: ${players.player2.score} puntos`;
}

function switchTurn() {
    players.currentTurn = players.currentTurn === 1 ? 2 : 1;
    updateScoreboard();
}

// ========== JUEGOS ========== //
function loadGame(gameType) {
    const container = document.getElementById("game-container");
    container.innerHTML = "";

    switch (gameType) {
        case "tabu":
            bibleData.tabu.forEach((card, index) => {
                container.innerHTML += `
                    <div class="card">
                        <h3>${card.palabra}</h3>
                        <p>🚫 Prohibido: ${card.prohibidas.join(", ")}</p>
                        <small>${card.referencia}</small>
                    </div>
                `;
            });
            break;

        case "trivia":
            bibleData.trivia.forEach((q, index) => {
                container.innerHTML += `
                    <div class="card">
                        <h3>${q.pregunta}</h3>
                        <div class="opciones">
                            ${q.opciones.map((op, i) => `
                                <button onclick="handleTriviaAnswer(${index}, ${i})">
                                    ${op}
                                </button>
                            `).join("")}
                        </div>
                        <small>${q.referencia}</small>
                    </div>
                `;
            });
            break;

        case "memo":
            // Lógica de Memo interactivo (pares volteables)
            container.innerHTML = `
                <div class="memo-grid" id="memo-grid">
                    ${shuffleArray([...bibleData.memo.flatMap(pair => [pair.pasaje1, pair.pasaje2])])
                        .map(text => `
                            <div class="memo-card" onclick="flipCard(this)">
                                <div class="front">?</div>
                                <div class="back">${text}</div>
                            </div>
                        `).join("")}
                </div>
            `;
            break;
    }
}

function handleTriviaAnswer(questionIndex, selectedOption) {
    const correct = bibleData.trivia[questionIndex].respuesta === selectedOption;
    if (correct) {
        players[`player${players.currentTurn}`].score += 10;
    }
    alert(correct ? "✅ Correcto! +10 puntos" : "❌ Incorrecto. Revisa " + bibleData.trivia[questionIndex].referencia);
    switchTurn();
}

// ========== FUNCIONES AUXILIARES ========== //
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function flipCard(card) {
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        // Lógica para emparejar cartas y sumar puntos
    }
}
