// Generador automático de contenido bíblico (NVI)
const bibleData = {
    tabu: Array.from({ length: 50 }, (_, i) => ({
        palabra: `Personaje ${i + 1}`,
        prohibidas: ["Palabra1", "Palabra2", "Palabra3"],
        referencia: `Génesis ${i + 1}:${i + 1}`
    })),

    trivia: Array.from({ length: 50 }, (_, i) => ({
        pregunta: `Pregunta ${i + 1}: ¿Qué personaje hizo...?`,
        opciones: ["Opción A", "Opción B", "Opción C"],
        respuesta: Math.floor(Math.random() * 3),
        referencia: `Hechos ${i + 1}:${i + 1}`
    })),

    memo: Array.from({ length: 25 }, (_, i) => ({
        tema: `Tema ${i + 1}`,
        pasaje1: `Juan ${i + 1}:${i + 1}`,
        pasaje2: `Romanos ${i + 1}:${i + 1}`
    }))
};

// Cargar juego
function loadGame(gameType) {
    const container = document.getElementById("game-container");
    container.innerHTML = "";

    switch (gameType) {
        case "tabu":
            bibleData.tabu.forEach((card, index) => {
                container.innerHTML += `
                    <div class="card">
                        <h3>${card.palabra}</h3>
                        <p>🚫 Prohibido usar: ${card.prohibidas.join(", ")}</p>
                        <small>Referencia: ${card.referencia}</small>
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
                                <button onclick="checkAnswer(${index}, ${i})">
                                    ${op}
                                </button>
                            `).join("")}
                        </div>
                        <small>Ver: ${q.referencia}</small>
                    </div>
                `;
            });
            break;

        case "memo":
            container.innerHTML = `
                <div class="memo-grid">
                    ${bibleData.memo.flatMap(pair => [
                        `<div class="memo-card">${pair.tema}<br>${pair.pasaje1}</div>`,
                        `<div class="memo-card">${pair.tema}<br>${pair.pasaje2}</div>`
                    ]).join("")}
                </div>
            `;
            break;
    }
}

// Verificar respuesta (Trivia)
function checkAnswer(questionIndex, selectedOption) {
    const correct = bibleData.trivia[questionIndex].respuesta === selectedOption;
    alert(correct ? "✅ Correcto!" : "❌ Incorrecto. Revisa " + bibleData.trivia[questionIndex].referencia);
}
