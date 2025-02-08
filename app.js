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
        {
            palabra: "Pablo",
            prohibidas: ["Damasco", "Cartas", "Conversión"],
            referencia: "Hechos 9:1-31"
        },
        {
            palabra: "Pedro",
            prohibidas: ["Pescador", "Iglesia", "Negación"],
            referencia: "Mateo 4:18-20, Hechos 10"
        },
        {
            palabra: "Juan el Bautista",
            prohibidas: ["Desierto", "Bautismo", "Herodes"],
            referencia: "Mateo 3:1-17"
        },
        {
            palabra: "Lázaro",
            prohibidas: ["Resurrección", "Betania", "Jesús"],
            referencia: "Juan 11:1-44"
        },
        {
            palabra: "María (madre de Jesús)",
            prohibidas: ["Ángel", "Belén", "Virgen"],
            referencia: "Lucas 1:26-56"
        },
        {
            palabra: "María Magdalena",
            prohibidas: ["Resurrección", "Tumba", "Jesús"],
            referencia: "Juan 20:1-18"
        },
        {
            palabra: "Tomás",
            prohibidas: ["Dudas", "Herida", "Jesús"],
            referencia: "Juan 20:24-29"
        },
        {
            palabra: "José (esposo de María)",
            prohibidas: ["Carpintero", "Egipto", "Sueños"],
            referencia: "Mateo 1:18-25"
        },
        {
            palabra: "José (hijo de Jacob)",
            prohibidas: ["Egipto", "Coatas", "Sueños"],
            referencia: "Génesis 37-50"
        },
        {
            palabra: "Sansón",
            prohibidas: ["Cabello", "Fuerza", "Dalila"],
            referencia: "Jueces 13-16"
        },
        {
            palabra: "Samuel",
            prohibidas: ["Eli", "Profeta", "Rey"],
            referencia: "1 Samuel 1-25"
        },
        {
            palabra: "Saúl",
            prohibidas: ["Rey", "David", "Espíritu"],
            referencia: "1 Samuel 9-31"
        },
        {
            palabra: "Timoteo",
            prohibidas: ["Pablo", "Discípulo", "Cartas"],
            referencia: "Hechos 16:1-3, 1 Timoteo"
        },
        {
            palabra: "Tito",
            prohibidas: ["Pablo", "Creta", "Carta"],
            referencia: "Tito 1:1-5"
        },
        {
            palabra: "Lucas",
            prohibidas: ["Médico", "Evangelio", "Hechos"],
            referencia: "Colosenses 4:14"
        },
        {
            palabra: "Marcos",
            prohibidas: ["Evangelio", "Juan Marcos", "Pablo"],
            referencia: "Hechos 12:12"
        },
        {
            palabra: "Mateo",
            prohibidas: ["Recaudador", "Evangelio", "Jesús"],
            referencia: "Mateo 9:9-13"
        },
        {
            palabra: "Judas Iscariote",
            prohibidas: ["Traición", "30 monedas", "Beso"],
            referencia: "Mateo 26:14-16"
        },
        {
            palabra: "Judas (hermano de Jesús)",
            prohibidas: ["Carta", "Judas", "Hermano"],
            referencia: "Judas 1:1"
        },
        {
            palabra: "Santiago",
            prohibidas: ["Hermano de Jesús", "Carta", "Jerusalén"],
            referencia: "Hechos 15:13-21"
        },
        {
            palabra: "Felipe",
            prohibidas: ["Apóstol", "Etiopía", "Evangelio"],
            referencia: "Hechos 8:26-40"
        },
        {
            palabra: "Bartolomé",
            prohibidas: ["Apóstol", "Natanael", "Jesús"],
            referencia: "Juan 1:45-51"
        },
        {
            palabra: "Andrés",
            prohibidas: ["Pescador", "Pedro", "Apóstol"],
            referencia: "Mateo 4:18-20"
        },
        {
            palabra: "Matías",
            prohibidas: ["Apóstol", "Reemplazo", "Judas"],
            referencia: "Hechos 1:23-26"
        },
        {
            palabra: "Cornelio",
            prohibidas: ["Centurión", "Pedro", "Bautismo"],
            referencia: "Hechos 10:1-48"
        },
        {
            palabra: "Lidia",
            prohibidas: ["Púrpura", "Filipos", "Pablo"],
            referencia: "Hechos 16:14-15"
        },
        {
            palabra: "Priscila",
            prohibidas: ["Aquila", "Pablo", "Iglesia"],
            referencia: "Hechos 18:2-3"
        },
        {
            palabra: "Aquila",
            prohibidas: ["Priscila", "Pablo", "Tienda"],
            referencia: "Hechos 18:2-3"
        },
        {
            palabra: "Bernabé",
            prohibidas: ["Pablo", "Misionero", "Chipre"],
            referencia: "Hechos 4:36-37"
        },
        {
            palabra: "Silas",
            prohibidas: ["Pablo", "Cárcel", "Canto"],
            referencia: "Hechos 16:25-40"
        },
        {
            palabra: "Esteban",
            prohibidas: ["Mártir", "Hechos", "Piedras"],
            referencia: "Hechos 7:54-60"
        },
        {
            palabra: "Félix",
            prohibidas: ["Gobernador", "Pablo", "Justicia"],
            referencia: "Hechos 24:1-27"
        },
        {
            palabra: "Festus",
            prohibidas: ["Gobernador", "Pablo", "César"],
            referencia: "Hechos 25:1-12"
        },
        {
            palabra: "Herodes",
            prohibidas: ["Rey", "Jesús", "Matanza"],
            referencia: "Mateo 2:1-18"
        },
        {
            palabra: "Pilato",
            prohibidas: ["Jesús", "Juicio", "Lavado de manos"],
            referencia: "Mateo 27:11-26"
        },
        {
            palabra: "Zaqueo",
            prohibidas: ["Árbol", "Recaudador", "Jesús"],
            referencia: "Lucas 19:1-10"
        },
        {
            palabra: "Nicodemo",
            prohibidas: ["Fariseo", "Noche", "Nacer de nuevo"],
            referencia: "Juan 3:1-21"
        },
        {
            palabra: "Marta",
            prohibidas: ["María", "Lázaro", "Sirvienta"],
            referencia: "Lucas 10:38-42"
        },
        {
            palabra: "Eliseo",
            prohibidas: ["Profeta", "Elías", "Milagros"],
            referencia: "2 Reyes 2:1-25"
        },
        {
            palabra: "Isaías",
            prohibidas: ["Profeta", "Emanuel", "Rollo"],
            referencia: "Isaías 6:1-13"
        },
        {
            palabra: "Jeremías",
            prohibidas: ["Profeta", "Lamentaciones", "Cautiverio"],
            referencia: "Jeremías 1:1-19"
        },
        {
            palabra: "Ezequiel",
            prohibidas: ["Profeta", "Visión", "Ruedas"],
            referencia: "Ezequiel 1:1-28"
        },
        {
            palabra: "Oseas",
            prohibidas: ["Profeta", "Gomer", "Adulterio"],
            referencia: "Oseas 1:1-11"
        },
        {
            palabra: "Amós",
            prohibidas: ["Profeta", "Pastor", "Justicia"],
            referencia: "Amós 1:1-2"
        },
        {
            palabra: "Miqueas",
            prohibidas: ["Profeta", "Belén", "Justicia"],
            referencia: "Miqueas 1:1-16"
        },
        {
            palabra: "Habacuc",
            prohibidas: ["Profeta", "Torre", "Justicia"],
            referencia: "Habacuc 1:1-17"
        },
        {
            palabra: "Sofonías",
            prohibidas: ["Profeta", "Día del Señor", "Juicio"],
            referencia: "Sofonías 1:1-18"
        },
        {
            palabra: "Hageo",
            prohibidas: ["Profeta", "Templo", "Reconstrucción"],
            referencia: "Hageo 1:1-15"
        },
        {
            palabra: "Zacarías",
            prohibidas: ["Profeta", "Visión", "Templo"],
            referencia: "Zacarías 1:1-21"
        },
        {
            palabra: "Malaquías",
            prohibidas: ["Profeta", "Diezmo", "Juicio"],
            referencia: "Malaquías 1:1-14"
        },
        {
            palabra: "Esdras",
            prohibidas: ["Sacerdote", "Ley", "Templo"],
            referencia: "Esdras 7:1-10"
        },
        {
            palabra: "Nehemías",
            prohibidas: ["Muro", "Jerusalén", "Reconstrucción"],
            referencia: "Nehemías 1:1-11"
        },
        {
            palabra: "Caleb",
            prohibidas: ["Espía", "Canaán", "Herencia"],
            referencia: "Números 13-14"
        },
        {
            palabra: "Josué",
            prohibidas: ["Canaán", "Jericó", "Conquista"],
            referencia: "Josué 1:1-9"
        },
        {
            palabra: "Debora",
            prohibidas: ["Jueces", "Cántico", "Barac"],
            referencia: "Jueces 4-5"
        },
        {
            palabra: "Jael",
            prohibidas: ["Estaca", "Sísara", "Tienda"],
            referencia: "Jueces 4:17-22"
        },
        {
            palabra: "Raquel",
            prohibidas: ["Jacob", "Esteril", "Benjamín"],
            referencia: "Génesis 29-35"
        },
        {
            palabra: "Lea",
            prohibidas: ["Jacob", "Hijos", "Ojos"],
            referencia: "Génesis 29-30"
        },
        {
            palabra: "Rebeca",
            prohibidas: ["Isaac", "Esaú", "Jacob"],
            referencia: "Génesis 24-27"
        },
        {
            palabra: "Sara",
            prohibidas: ["Abraham", "Isaac", "Risa"],
            referencia: "Génesis 17-23"
        },
        {
            palabra: "Lot",
            prohibidas: ["Sodoma", "Esposa", "Sal"],
            referencia: "Génesis 19:1-29"
        },
        {
            palabra: "Melquisedec",
            prohibidas: ["Sacerdote", "Pan", "Vino"],
            referencia: "Génesis 14:18-20"
        },
        {
            palabra: "Enoc",
            prohibidas: ["Caminó con Dios", "Arrebatado", "Génesis"],
            referencia: "Génesis 5:21-24"
        },
        {
            palabra: "Caín",
            prohibidas: ["Abel", "Asesinato", "Marca"],
            referencia: "Génesis 4:1-16"
        },
        {
            palabra: "Abel",
            prohibidas: ["Caín", "Ofrenda", "Pastor"],
            referencia: "Génesis 4:1-16"
        },
        {
            palabra: "Lamec",
            prohibidas: ["Adán", "Caín", "Venganza"],
            referencia: "Génesis 4:19-24"
        },
        {
            palabra: "Noemí",
            prohibidas: ["Rut", "Booz", "Mara"],
            referencia: "Rut 1:1-22"
        },
        {
            palabra: "Booz",
            prohibidas: ["Rut", "Noemí", "Espigas"],
            referencia: "Rut 2:1-23"
        },
        {
            palabra: "Mardoqueo",
            prohibidas: ["Ester", "Asuero", "Purim"],
            referencia: "Ester 2:1-23"
        },
        {
            palabra: "Asuero",
            prohibidas: ["Ester", "Mardoqueo", "Purim"],
            referencia: "Ester 1:1-22"
        },
        {
            palabra: "Vasti",
            prohibidas: ["Reina", "Asuero", "Banquete"],
            referencia: "Ester 1:9-22"
        },
        {
            palabra: "Haman",
            prohibidas: ["Ester", "Mardoqueo", "Horca"],
            referencia: "Ester 3:1-15"
        },
        {
            palabra: "Zorobabel",
            prohibidas: ["Templo", "Reconstrucción", "Esdras"],
            referencia: "Esdras 3:1-13"
        },
        {
            palabra: "Esdras",
            prohibidas: ["Sacerdote", "Ley", "Templo"],
            referencia: "Esdras 7:1-10"
        },
        {
            palabra: "Nehemías",
            prohibidas: ["Muro", "Jerusalén", "Reconstrucción"],
            referencia: "Nehemías 1:1-11"
        },
        {
            palabra: "Caleb",
            prohibidas: ["Espía", "Canaán", "Herencia"],
            referencia: "Números 13-14"
        },
        {
            palabra: "Josué",
            prohibidas: ["Canaán", "Jericó", "Conquista"],
            referencia: "Josué 1:1-9"
        },
        {
            palabra: "Debora",
            prohibidas: ["Jueces", "Cántico", "Barac"],
            referencia: "Jueces 4-5"
        },
        {
            palabra: "Jael",
            prohibidas: ["Estaca", "Sísara", "Tienda"],
            referencia: "Jueces 4:17-22"
        },
        {
            palabra: "Raquel",
            prohibidas: ["Jacob", "Esteril", "Benjamín"],
            referencia: "Génesis 29-35"
        },
        {
            palabra: "Lea",
            prohibidas: ["Jacob", "Hijos", "Ojos"],
            referencia: "Génesis 29-30"
        },
        {
            palabra: "Rebeca",
            prohibidas: ["Isaac", "Esaú", "Jacob"],
            referencia: "Génesis 24-27"
        },
        {
            palabra: "Sara",
            prohibidas: ["Abraham", "Isaac", "Risa"],
            referencia: "Génesis 17-23"
        },
        {
            palabra: "Lot",
            prohibidas: ["Sodoma", "Esposa", "Sal"],
            referencia: "Génesis 19:1-29"
        },
        {
            palabra: "Melquisedec",
            prohibidas: ["Sacerdote", "Pan", "Vino"],
            referencia: "Génesis 14:18-20"
        },
        {
            palabra: "Enoc",
            prohibidas: ["Caminó con Dios", "Arrebatado", "Génesis"],
            referencia: "Génesis 5:21-24"
        },
        {
            palabra: "Caín",
            prohibidas: ["Abel", "Asesinato", "Marca"],
            referencia: "Génesis 4:1-16"
        },
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
            tema: "Segunda Venida",
            pasaje1: "Hechos 1:11",
            pasaje2: "Apocalipsis 22:20"
        },
        // ... 23 pares más ...
    ]
};

// ====================================================
// LÓGICA MULTIJUGADOR
// ====================================================
let players = [];
let currentPlayerIndex = 0;
let currentTabuIndex = 0;
let currentTriviaIndex = 0;
let selectedViolations = [];
let flippedCards = [];
let matchedPairs = 0;

// Función para crear inputs dinámicos
function createPlayerInputs(numberOfPlayers) {
    const container = document.getElementById('player-inputs-container');
    container.innerHTML = '';
    
    for(let i = 1; i <= numberOfPlayers; i++) {
        container.innerHTML += `
            <input type="text" 
                   id="player${i}" 
                   placeholder="Jugador ${i}" 
                   required>
        `;
    }
}

// Función para iniciar el juego
function startGame() {
    const numberOfPlayers = document.getElementById('player-count').value;
    players = [];
    
    for(let i = 1; i <= numberOfPlayers; i++) {
        const name = document.getElementById(`player${i}`).value || `Jugador ${i}`;
        players.push({
            name: name,
            score: 0
        });
    }
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    updateScoreboard();
}

// Actualizar marcador
function updateScoreboard() {
    const scoresContainer = document.getElementById('scores-container');
    const currentPlayer = document.getElementById('current-player-name');
    
    // Actualizar puntuaciones
    scoresContainer.innerHTML = players.map(player => `
        <div class="score-item">
            ${player.name}: <span>${player.score} pts</span>
        </div>
    `).join('');
    
    // Actualizar turno actual
    currentPlayer.textContent = players[currentPlayerIndex].name;
}

// Sistema de turnos
function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateScoreboard();
    showTurnPopup(players[currentPlayerIndex].name);
}

// Mostrar popup de turno
function showTurnPopup(playerName) {
    const popup = document.getElementById('turn-popup');
    const playerNameElement = document.getElementById('turn-player-name');
    
    playerNameElement.textContent = playerName;
    popup.style.display = 'flex';

    // Ocultar el popup después de 3 segundos
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

// ====================================================
// LÓGICA DEL TABÚ
// ====================================================
function loadTabuCard() {
    const card = bibleData.tabu[currentTabuIndex];
    const container = document.getElementById("game-container");
    
    container.innerHTML = `
        <div class="tabu-card">
            <h2>${card.palabra}</h2>
            <div class="prohibidas-box">
                <h4>Palabras prohibidas:</h4>
                ${card.prohibidas.map(word => `
                    <label class="violation-check">
                        <input type="checkbox" value="${word}">
                        ${word}
                    </label>
                `).join("")}
            </div>
            
            <div class="tabu-controls">
                <button onclick="handleTabuSuccess()">✅ Acierto (sin violaciones)</button>
                <button onclick="handleTabuFailure()">❌ Fallo</button>
            </div>
            
            <div class="guesser-selection" id="guesser-section">
                <h4>¿Quién adivinó?</h4>
                ${players.map((player, index) => `
                    <button onclick="assignGuesserPoints(${index})">
                        ${player.name}
                    </button>
                `).join("")}
            </div>
            
            <small>Referencia: ${card.referencia}</small>
        </div>
    `;
    
    // Inicializar selección
    selectedViolations = [];
    document.querySelectorAll('.violation-check input').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if(e.target.checked) {
                selectedViolations.push(e.target.value);
            } else {
                selectedViolations = selectedViolations.filter(word => word !== e.target.value);
            }
        });
    });
}

function handleTabuSuccess() {
    // Calcular puntos: +15 por acierto, -3 por cada violación
    const penalty = selectedViolations.length * 3;
    const totalPoints = 15 - penalty;
    
    players[currentPlayerIndex].score += Math.max(totalPoints, 0);
    
    // Mostrar resultado
    alert(`${players[currentPlayerIndex].name} obtiene ${totalPoints} puntos!`);
    nextTabuCard();
}

function handleTabuFailure() {
    alert("❌ Nadie adivinó la palabra");
    nextTabuCard();
}

function assignGuesserPoints(playerIndex) {
    players[playerIndex].score += 5; // Puntos extra por adivinar
    alert(`⭐ ${players[playerIndex].name} gana 5 puntos por adivinar!`);
    document.getElementById('guesser-section').style.display = 'none';
}

function nextTabuCard() {
    currentTabuIndex = (currentTabuIndex + 1) % bibleData.tabu.length;
    loadTabuCard();
    nextTurn();
}

// ====================================================
// LÓGICA DE TRIVIA
// ====================================================
function loadTriviaQuestion() {
    const question = bibleData.trivia[currentTriviaIndex];
    const container = document.getElementById("game-container");
    
    container.innerHTML = `
        <div class="card">
            <h3>${question.pregunta}</h3>
            <div class="opciones">
                ${question.opciones.map((op, i) => `
                    <button onclick="handleTriviaAnswer(${currentTriviaIndex}, ${i})">
                        ${op}
                    </button>
                `).join("")}
            </div>
            <small>Referencia: ${question.referencia}</small>
        </div>
    `;
}

function handleTriviaAnswer(questionIndex, selectedOption) {
    const correct = bibleData.trivia[questionIndex].respuesta === selectedOption;
    
    if (correct) {
        players[currentPlayerIndex].score += 10;
        alert(`✅ Correcto! +10 puntos para ${players[currentPlayerIndex].name}`);
    } else {
        alert(`❌ Incorrecto. Respuesta correcta: ${bibleData.trivia[questionIndex].opciones[bibleData.trivia[questionIndex].respuesta]}`);
    }
    
    currentTriviaIndex = (currentTriviaIndex + 1) % bibleData.trivia.length;
    nextTurn();
    loadTriviaQuestion();
}

// ====================================================
// LÓGICA DE MEMO
// ====================================================
function loadMemoGame() {
    const container = document.getElementById("game-container");
    const memoPairs = shuffleArray([...bibleData.memo.flatMap(pair => [pair.pasaje1, pair.pasaje2])]);
    
    container.innerHTML = `
        <div class="memo-grid">
            ${memoPairs.map(text => `
                <div class="memo-card" onclick="flipCard(this)">
                    <div class="front">?</div>
                    <div class="back">${text}</div>
                </div>
            `).join("")}
        </div>
    `;
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const text1 = card1.querySelector('.back').textContent;
    const text2 = card2.querySelector('.back').textContent;

    if (bibleData.memo.some(pair => 
        (pair.pasaje1 === text1 && pair.pasaje2 === text2) || 
        (pair.pasaje1 === text2 && pair.pasaje2 === text1)
    )) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === bibleData.memo.length) {
            alert(`🎉 ¡Felicidades! Han encontrado todos los pares.`);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

// ====================================================
// FUNCIONES AUXILIARES
// ====================================================
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ====================================================
// CARGAR JUEGO
// ====================================================
function loadGame(gameType) {
    const container = document.getElementById("game-container");
    container.innerHTML = "";

    switch (gameType) {
        case "tabu":
            currentTabuIndex = 0;
            loadTabuCard();
            break;

        case "trivia":
            currentTriviaIndex = 0;
            loadTriviaQuestion();
            break;

        case "memo":
            matchedPairs = 0;
            loadMemoGame();
            break;
    }
}
