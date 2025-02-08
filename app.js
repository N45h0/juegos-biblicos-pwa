// Datos reales de juegos bíblicos (NVI)
const bibleData = {
    // TABU SIN DUPLICADOS Y CON CORRECCIÓN DE "TÚNICA"
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
            // Se corrige "Coatas" -> "Túnica"
            palabra: "José (hijo de Jacob)",
            prohibidas: ["Egipto", "Túnica", "Sueños"],
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
        }
    ],

 trivia: [
  // Pregunta 1
  {
    pregunta: "¿Quién construyó el arca?",
    opciones: ["Noé", "Moisés", "Abraham"],
    respuesta: 0,
    referencia: "Génesis 6:14"
  },
  // Pregunta 2
  {
    pregunta: "¿Qué apóstol negó a Jesús tres veces?",
    opciones: ["Pedro", "Juan", "Judas"],
    respuesta: 0,
    referencia: "Mateo 26:69-75"
  },
  // Pregunta 3
  {
    pregunta: "¿Qué mujer fue convertida en estatua de sal?",
    opciones: ["Eva", "Sara", "La esposa de Lot"],
    respuesta: 2,
    referencia: "Génesis 19:26"
  },
  // Pregunta 4
  {
    pregunta: "¿Qué apóstol era recaudador de impuestos?",
    opciones: ["Mateo", "Simón", "Bartolomé"],
    respuesta: 0,
    referencia: "Mateo 9:9"
  },
  // Pregunta 5
  {
    pregunta: "¿Cuántos días duró el diluvio?",
    opciones: [40, 150, 365],
    respuesta: 0,
    referencia: "Génesis 7:17"
  },
  // Pregunta 6
  {
    pregunta: "¿Qué apóstol era médico?",
    opciones: ["Lucas", "Marcos", "Mateo"],
    respuesta: 0,
    referencia: "Colosenses 4:14"
  },
  // Pregunta 7
  {
    pregunta: "¿Qué significa 'Emmanuel'?",
    opciones: ["Dios con nosotros", "Rey de reyes", "Príncipe de paz"],
    respuesta: 0,
    referencia: "Mateo 1:23"
  },
  // Pregunta 8
  {
    pregunta: "¿Dónde nació Jesús?",
    opciones: ["Belén", "Nazaret", "Jerusalén"],
    respuesta: 0,
    referencia: "Mateo 2:1"
  },
  // Pregunta 9
  {
    pregunta: "¿Quién traicionó a Jesús?",
    opciones: ["Judas Iscariote", "Pedro", "Tomás"],
    respuesta: 0,
    referencia: "Mateo 26:14-16"
  },
  // Pregunta 10
  {
    pregunta: "¿Qué apóstol escribió el libro de Apocalipsis?",
    opciones: ["Juan", "Pablo", "Pedro"],
    respuesta: 0,
    referencia: "Apocalipsis 1:1-2"
  },

  // A partir de aquí, 90 preguntas adicionales

  // Pregunta 11
  {
    pregunta: "¿Quién liberó a los israelitas de la esclavitud en Egipto?",
    opciones: ["Josué", "Moisés", "Aarón"],
    respuesta: 1,
    referencia: "Éxodo 3:10"
  },
  // Pregunta 12
  {
    pregunta: "¿Quién fue el primer hombre creado según la Biblia?",
    opciones: ["Adán", "Abel", "Enoc"],
    respuesta: 0,
    referencia: "Génesis 2:7"
  },
  // Pregunta 13
  {
    pregunta: "¿Cuál es el primer mandamiento de los Diez Mandamientos?",
    opciones: [
      "No tendrás dioses ajenos",
      "No mates",
      "No robes"
    ],
    respuesta: 0,
    referencia: "Éxodo 20:3"
  },
  // Pregunta 14
  {
    pregunta: "¿Quién era la madre de Isaac?",
    opciones: ["Rebeca", "Sara", "Lea"],
    respuesta: 1,
    referencia: "Génesis 21:1-3"
  },
  // Pregunta 15
  {
    pregunta: "¿Cómo se llamaba el hermano de Jacob que vendió su primogenitura?",
    opciones: ["Esaú", "Benjamín", "Judá"],
    respuesta: 0,
    referencia: "Génesis 25:31-33"
  },
  // Pregunta 16
  {
    pregunta: "¿Quién fue tragado por un gran pez al huir de la voluntad de Dios?",
    opciones: ["Jonás", "Moisés", "Elías"],
    respuesta: 0,
    referencia: "Jonás 1:17"
  },
  // Pregunta 17
  {
    pregunta: "¿En qué ciudad murallas se derrumbaron tras marchar alrededor de ellas?",
    opciones: ["Babilonia", "Jericó", "Nínive"],
    respuesta: 1,
    referencia: "Josué 6:20"
  },
  // Pregunta 18
  {
    pregunta: "¿Quién fue arrojado al foso de los leones por orar a Dios?",
    opciones: ["Daniel", "José", "Neemías"],
    respuesta: 0,
    referencia: "Daniel 6:16"
  },
  // Pregunta 19
  {
    pregunta: "¿Quién mató al gigante Goliat?",
    opciones: ["David", "Saúl", "Jonathan"],
    respuesta: 0,
    referencia: "1 Samuel 17:50"
  },
  // Pregunta 20
  {
    pregunta: "¿Quién fue la madre de Jesús?",
    opciones: ["Elisabet", "María", "Marta"],
    respuesta: 1,
    referencia: "Lucas 1:30-31"
  },
  // Pregunta 21
  {
    pregunta: "¿Cómo se llamaba el padre de Juan el Bautista?",
    opciones: ["Zacarías", "Nicodemo", "José"],
    respuesta: 0,
    referencia: "Lucas 1:13"
  },
  // Pregunta 22
  {
    pregunta: "¿Quién tenía una túnica de muchos colores?",
    opciones: ["Moisés", "José", "David"],
    respuesta: 1,
    referencia: "Génesis 37:3"
  },
  // Pregunta 23
  {
    pregunta: "¿En qué mar arrojó Moisés la vara para abrir un camino?",
    opciones: [
      "Mar de Galilea",
      "Mar Mediterráneo",
      "Mar Rojo"
    ],
    respuesta: 2,
    referencia: "Éxodo 14:21"
  },
  // Pregunta 24
  {
    pregunta: "¿Qué mujer fue conocida por esconder a los espías israelitas en Jericó?",
    opciones: ["Débora", "Raquel", "Rahab"],
    respuesta: 2,
    referencia: "Josué 2:1"
  },
  // Pregunta 25
  {
    pregunta: "¿Quién fue el primer rey de Israel?",
    opciones: ["Saúl", "David", "Salomón"],
    respuesta: 0,
    referencia: "1 Samuel 10:1"
  },
  // Pregunta 26
  {
    pregunta: "¿Quién sucedió a Moisés como líder de Israel?",
    opciones: ["Josué", "Caleb", "Aarón"],
    respuesta: 0,
    referencia: "Deuteronomio 34:9"
  },
  // Pregunta 27
  {
    pregunta: "¿Cuál era el nombre original de Abraham?",
    opciones: ["Abram", "Abel", "Labán"],
    respuesta: 0,
    referencia: "Génesis 17:5"
  },
  // Pregunta 28
  {
    pregunta: "¿Qué profeta desafió a los profetas de Baal en el monte Carmelo?",
    opciones: ["Eliseo", "Elías", "Isaías"],
    respuesta: 1,
    referencia: "1 Reyes 18:19-20"
  },
  // Pregunta 29
  {
    pregunta: "¿Quién fue la mujer que se hizo juez en Israel?",
    opciones: ["Rut", "Ester", "Débora"],
    respuesta: 2,
    referencia: "Jueces 4:4"
  },
  // Pregunta 30
  {
    pregunta: "¿Qué rey de Israel construyó el primer templo en Jerusalén?",
    opciones: ["David", "Salomón", "Roboam"],
    respuesta: 1,
    referencia: "1 Reyes 6:1"
  },
  // Pregunta 31
  {
    pregunta: "¿Quién fue tragado por la tierra junto a su familia por rebelarse contra Moisés?",
    opciones: ["Core", "Nadab", "Datán"],
    respuesta: 0,
    referencia: "Números 16:31-32"
  },
  // Pregunta 32
  {
    pregunta: "¿Qué profeta interpretó los sueños del faraón en Egipto?",
    opciones: ["Moisés", "José", "Daniel"],
    respuesta: 1,
    referencia: "Génesis 41:14-16"
  },
  // Pregunta 33
  {
    pregunta: "¿Qué mujer se convirtió en reina y salvó a su pueblo de un genocidio?",
    opciones: ["Ester", "Rut", "Rebeca"],
    respuesta: 0,
    referencia: "Ester 4:14-16"
  },
  // Pregunta 34
  {
    pregunta: "¿Quién fue visitado por el ángel Gabriel y quedó mudo por dudar?",
    opciones: ["Zacarías", "Simeón", "Caifás"],
    respuesta: 0,
    referencia: "Lucas 1:18-20"
  },
  // Pregunta 35
  {
    pregunta: "¿Quién sucedió al rey David en el trono?",
    opciones: ["Salomón", "Saúl", "Absalón"],
    respuesta: 0,
    referencia: "1 Reyes 2:12"
  },
  // Pregunta 36
  {
    pregunta: "¿Qué apóstol era conocido inicialmente como Saulo?",
    opciones: ["Pablo", "Pedro", "Santiago"],
    respuesta: 0,
    referencia: "Hechos 9:1-2"
  },
  // Pregunta 37
  {
    pregunta: "¿Quién fue el hermano mayor de Moisés y también su portavoz?",
    opciones: ["José", "Aarón", "Jetro"],
    respuesta: 1,
    referencia: "Éxodo 4:14"
  },
  // Pregunta 38
  {
    pregunta: "¿Cuántas plagas envió Dios sobre Egipto antes del éxodo?",
    opciones: [7, 10, 12],
    respuesta: 1,
    referencia: "Éxodo 7-12"
  },
  // Pregunta 39
  {
    pregunta: "¿Cómo se llama el lugar donde Dios confundió las lenguas?",
    opciones: ["Babel", "Betel", "Gilgal"],
    respuesta: 0,
    referencia: "Génesis 11:9"
  },
  // Pregunta 40
  {
    pregunta: "¿Quién ungió a Saúl y a David como reyes de Israel?",
    opciones: ["Gad", "Natán", "Samuel"],
    respuesta: 2,
    referencia: "1 Samuel 10:1; 16:13"
  },
  // Pregunta 41
  {
    pregunta: "¿Quién fue el principal autor de la mayoría de los Proverbios?",
    opciones: ["David", "Salomón", "Job"],
    respuesta: 1,
    referencia: "Proverbios 1:1"
  },
  // Pregunta 42
  {
    pregunta: "¿Cuál de estos libros pertenece al Pentateuco?",
    opciones: ["Josué", "Levítico", "Salmos"],
    respuesta: 1,
    referencia: "Levítico 1:1"
  },
  // Pregunta 43
  {
    pregunta: "¿Qué rey de Judá pidió 15 años más de vida a Dios?",
    opciones: ["Ezequías", "Josías", "Manasés"],
    respuesta: 0,
    referencia: "2 Reyes 20:1-6"
  },
  // Pregunta 44
  {
    pregunta: "¿Quién fue arrojado a un horno de fuego junto con Sadrac y Abed-nego?",
    opciones: ["Nabucodonosor", "Mesac", "Daniel"],
    respuesta: 1,
    referencia: "Daniel 3:19-20"
  },
  // Pregunta 45
  {
    pregunta: "¿Cómo se llamaba el jardín donde Dios puso a Adán y Eva?",
    opciones: ["Edén", "Getsemaní", "Gólgota"],
    respuesta: 0,
    referencia: "Génesis 2:15"
  },
  // Pregunta 46
  {
    pregunta: "¿A qué ciudad huían dos discípulos cuando se les apareció Jesús resucitado?",
    opciones: ["Emaús", "Betania", "Capernaúm"],
    respuesta: 0,
    referencia: "Lucas 24:13"
  },
  // Pregunta 47
  {
    pregunta: "¿Qué patriarca tuvo sueños proféticos que lo llevaron a Egipto como esclavo?",
    opciones: ["Isaac", "Jacob", "José"],
    respuesta: 2,
    referencia: "Génesis 37:5"
  },
  // Pregunta 48
  {
    pregunta: "¿Cuál fue el primer milagro de Jesús registrado en el Evangelio de Juan?",
    opciones: [
      "Multiplicación de los panes",
      "Sanar a un ciego",
      "Convertir el agua en vino"
    ],
    respuesta: 2,
    referencia: "Juan 2:1-11"
  },
  // Pregunta 49
  {
    pregunta: "¿Quién vio la zarza ardiente que no se consumía?",
    opciones: ["Elías", "Moisés", "Josué"],
    respuesta: 1,
    referencia: "Éxodo 3:2"
  },
  // Pregunta 50
  {
    pregunta: "¿Cuál es el nombre del discípulo que reemplazó a Judas Iscariote?",
    opciones: ["Matías", "Bernabé", "Esteban"],
    respuesta: 0,
    referencia: "Hechos 1:26"
  },
  // Pregunta 51
  {
    pregunta: "¿Quién dijo 'Yo soy el pan de vida'?",
    opciones: ["Pablo", "Jesús", "Juan el Bautista"],
    respuesta: 1,
    referencia: "Juan 6:35"
  },
  // Pregunta 52
  {
    pregunta: "¿Qué rey mandó a echar a Daniel en el foso de los leones?",
    opciones: ["Darío", "Ciro", "Nabucodonosor"],
    respuesta: 0,
    referencia: "Daniel 6:9-16"
  },
  // Pregunta 53
  {
    pregunta: "¿Quién fue la nuera de Noemí y bisabuela del rey David?",
    opciones: ["Ester", "Rut", "Raquel"],
    respuesta: 1,
    referencia: "Rut 4:17"
  },
  // Pregunta 54
  {
    pregunta: "¿Qué profeta fue llevado al cielo en un carro de fuego?",
    opciones: ["Eliseo", "Elías", "Enoc"],
    respuesta: 1,
    referencia: "2 Reyes 2:11"
  },
  // Pregunta 55
  {
    pregunta: "¿Qué hizo Jesús cuando sus discípulos discutían sobre quién sería el mayor?",
    opciones: [
      "Les dio una parábola",
      "Lavó sus pies",
      "Reprendió a Judas"
    ],
    respuesta: 1,
    referencia: "Juan 13:4-5"
  },
  // Pregunta 56
  {
    pregunta: "¿Qué esposo de Rut era descendiente de Judá?",
    opciones: ["Booz", "Mahlón", "Quelión"],
    respuesta: 0,
    referencia: "Rut 4:21-22"
  },
  // Pregunta 57
  {
    pregunta: "¿Quién dijo 'El Señor es mi pastor, nada me falta'?",
    opciones: ["Salomón", "David", "Asaf"],
    respuesta: 1,
    referencia: "Salmo 23:1"
  },
  // Pregunta 58
  {
    pregunta: "¿Cómo se llamaban los hijos de Zebedeo, también discípulos de Jesús?",
    opciones: [
      "Andrés y Simón",
      "Tomás y Mateo",
      "Jacobo y Juan"
    ],
    respuesta: 2,
    referencia: "Mateo 4:21"
  },
  // Pregunta 59
  {
    pregunta: "¿Quién es conocido como 'el apóstol de los gentiles'?",
    opciones: ["Pablo", "Juan", "Santiago"],
    respuesta: 0,
    referencia: "Romanos 11:13"
  },
  // Pregunta 60
  {
    pregunta: "¿Qué joven fue llamado tres veces por Dios mientras dormía?",
    opciones: ["David", "Samuel", "Jonatán"],
    respuesta: 1,
    referencia: "1 Samuel 3:4-10"
  },
  // Pregunta 61
  {
    pregunta: "¿Quién escribió la mayoría de las cartas del Nuevo Testamento?",
    opciones: ["Pedro", "Pablo", "Juan"],
    respuesta: 1,
    referencia: "Romanos 1:1"
  },
  // Pregunta 62
  {
    pregunta: "¿Qué hombre justo sobrevivió a la destrucción de Sodoma y Gomorra?",
    opciones: ["Lot", "Abraham", "Job"],
    respuesta: 0,
    referencia: "Génesis 19:29"
  },
  // Pregunta 63
  {
    pregunta: "¿Quién vio los cielos abiertos y al Hijo del Hombre de pie a la diestra de Dios?",
    opciones: ["Pablo", "Esteban", "Felipe"],
    respuesta: 1,
    referencia: "Hechos 7:55-56"
  },
  // Pregunta 64
  {
    pregunta: "¿A qué oficio se dedicaba Pablo para sostenerse?",
    opciones: ["Pescador", "Constructor de barcos", "Fabricante de tiendas"],
    respuesta: 2,
    referencia: "Hechos 18:3"
  },
  // Pregunta 65
  {
    pregunta: "¿Quién fue circuncidado a los ocho días de nacido, según la costumbre judía?",
    opciones: ["Pablo", "Timoteo", "Jesús"],
    respuesta: 2,
    referencia: "Lucas 2:21"
  },
  // Pregunta 66
  {
    pregunta: "¿Quién pronunció el famoso 'Sermón del Monte'?",
    opciones: ["Jesús", "Juan el Bautista", "Pedro"],
    respuesta: 0,
    referencia: "Mateo 5-7"
  },
  // Pregunta 67
  {
    pregunta: "¿Quién escribió el libro de Lamentaciones?",
    opciones: ["Daniel", "Jeremías", "Ezequiel"],
    respuesta: 1,
    referencia: "Lamentaciones 1:1"
  },
  // Pregunta 68
  {
    pregunta: "¿Qué profeta confrontó al rey David sobre su pecado con Betsabé?",
    opciones: ["Samuel", "Natán", "Gad"],
    respuesta: 1,
    referencia: "2 Samuel 12:1-7"
  },
  // Pregunta 69
  {
    pregunta: "¿Qué discípulo fue taxista antes de seguir a Jesús?",
    opciones: ["Mateo", "Tomás", "Felipe"],
    respuesta: 0,
    referencia: "Mateo 9:9"
    // Nota: Similar a la pregunta 4, pero no es exactamente la misma redacción.
  },
  // Pregunta 70
  {
    pregunta: "¿Cuál de estos personajes es mencionado como amigo de Dios?",
    opciones: ["Moisés", "Abraham", "Noé"],
    respuesta: 1,
    referencia: "Santiago 2:23"
  },
  // Pregunta 71
  {
    pregunta: "¿Cuál es la señal del pacto entre Dios y Noé después del diluvio?",
    opciones: ["El Arca", "El Arco Iris", "La Paloma"],
    respuesta: 1,
    referencia: "Génesis 9:13"
  },
  // Pregunta 72
  {
    pregunta: "¿Quién fue la madre de Samuel?",
    opciones: ["Penina", "Ana", "Miriam"],
    respuesta: 1,
    referencia: "1 Samuel 1:20"
  },
  // Pregunta 73
  {
    pregunta: "¿Quién dijo 'Yo y mi casa serviremos al Señor'?",
    opciones: ["Josué", "Caleb", "Gedeón"],
    respuesta: 0,
    referencia: "Josué 24:15"
  },
  // Pregunta 74
  {
    pregunta: "¿Cuál es el 'gran mandamiento' según Jesús?",
    opciones: [
      "Amarás al Señor tu Dios con todo tu corazón",
      "No matarás",
      "Perdona setenta veces siete"
    ],
    respuesta: 0,
    referencia: "Mateo 22:37-38"
  },
  // Pregunta 75
  {
    pregunta: "¿Quién acompañó a Pablo en su primer viaje misionero?",
    opciones: ["Silas", "Lucas", "Bernabé"],
    respuesta: 2,
    referencia: "Hechos 13:2"
  },
  // Pregunta 76
  {
    pregunta: "¿Qué discípulo caminó sobre el agua hacia Jesús?",
    opciones: ["Juan", "Pedro", "Andrés"],
    respuesta: 1,
    referencia: "Mateo 14:28-29"
  },
  // Pregunta 77
  {
    pregunta: "¿Cuál fue el motivo del primer asesinato registrado en la Biblia?",
    opciones: ["Venganza", "Envidia", "Codicia"],
    respuesta: 1,
    referencia: "Génesis 4:8"
  },
  // Pregunta 78
  {
    pregunta: "¿Quién es conocido como el 'profeta llorón'?",
    opciones: ["Ezequiel", "Jeremías", "Isaías"],
    respuesta: 1,
    referencia: "Jeremías 9:1"
  },
  // Pregunta 79
  {
    pregunta: "¿Quién dijo 'Tengo celos de ti con celo de Dios' a la iglesia de Corinto?",
    opciones: ["Pablo", "Pedro", "Apolos"],
    respuesta: 0,
    referencia: "2 Corintios 11:2"
  },
  // Pregunta 80
  {
    pregunta: "¿Qué instrumento tocaba David para calmar al rey Saúl?",
    opciones: ["Arpa", "Flauta", "Lira"],
    respuesta: 0,
    referencia: "1 Samuel 16:23"
  },
  // Pregunta 81
  {
    pregunta: "¿Quién fue la primera mujer según la Biblia?",
    opciones: ["Sara", "Eva", "Dina"],
    respuesta: 1,
    referencia: "Génesis 2:22"
  },
  // Pregunta 82
  {
    pregunta: "¿Quién tuvo un encuentro con Jesús en el camino a Damasco?",
    opciones: ["Pedro", "Pablo (Saulo)", "Lucas"],
    respuesta: 1,
    referencia: "Hechos 9:3-5"
  },
  // Pregunta 83
  {
    pregunta: "¿Qué libro inicia con las palabras 'En el principio creó Dios los cielos y la tierra'?",
    opciones: ["Génesis", "Éxodo", "Salmos"],
    respuesta: 0,
    referencia: "Génesis 1:1"
  },
  // Pregunta 84
  {
    pregunta: "¿Quién fue el sucesor de Elías en el ministerio profético?",
    opciones: ["Eliseo", "Jeremías", "Isaías"],
    respuesta: 0,
    referencia: "2 Reyes 2:9-12"
  },
  // Pregunta 85
  {
    pregunta: "¿Quién cayó de una ventana mientras Pablo predicaba y fue resucitado?",
    opciones: ["Eutico", "Tíquico", "Tito"],
    respuesta: 0,
    referencia: "Hechos 20:9-10"
  },
  // Pregunta 86
  {
    pregunta: "¿Quién escribió el Salmo 51 tras ser confrontado por su pecado?",
    opciones: ["Salomón", "Asaf", "David"],
    respuesta: 2,
    referencia: "Salmo 51:1"
  },
  // Pregunta 87
  {
    pregunta: "¿Cuál fue el oficio de Nehemías antes de reconstruir los muros de Jerusalén?",
    opciones: ["Carpintero", "Copero del rey", "Pastor de ovejas"],
    respuesta: 1,
    referencia: "Nehemías 1:11"
  },
  // Pregunta 88
  {
    pregunta: "¿Qué libro del Nuevo Testamento describe la expansión de la iglesia primitiva?",
    opciones: ["Hechos", "Romanos", "Apocalipsis"],
    respuesta: 0,
    referencia: "Hechos 1:8"
  },
  // Pregunta 89
  {
    pregunta: "¿Qué profeta predijo el nacimiento de Jesús en Belén?",
    opciones: ["Miqueas", "Zacarías", "Malaquías"],
    respuesta: 0,
    referencia: "Miqueas 5:2"
  },
  // Pregunta 90
  {
    pregunta: "¿Quién fue el padre de las doce tribus de Israel?",
    opciones: ["Abraham", "Jacob", "Isaac"],
    respuesta: 1,
    referencia: "Génesis 49:28"
  },
  // Pregunta 91
  {
    pregunta: "¿Cuál era el nombre de la esposa de Aquila con quien Pablo trabajó?",
    opciones: ["Priscila", "Lidia", "Febe"],
    respuesta: 0,
    referencia: "Hechos 18:2"
  },
  // Pregunta 92
  {
    pregunta: "¿Cuál de los siguientes NO es un evangelio?",
    opciones: ["Lucas", "Hechos", "Marcos"],
    respuesta: 1,
    referencia: "Nuevo Testamento"
  },
  // Pregunta 93
  {
    pregunta: "¿Quién fue el hombre más manso sobre la tierra según la Biblia?",
    opciones: ["David", "Abraham", "Moisés"],
    respuesta: 2,
    referencia: "Números 12:3"
  },
  // Pregunta 94
  {
    pregunta: "¿A quién llamó Jesús 'la vid verdadera' en el Evangelio de Juan?",
    opciones: [
      "A sí mismo",
      "A Israel",
      "A Juan el Bautista"
    ],
    respuesta: 0,
    referencia: "Juan 15:1"
  },
  // Pregunta 95
  {
    pregunta: "¿Quién escribió el libro de los Hechos de los Apóstoles?",
    opciones: ["Lucas", "Pablo", "Mateo"],
    respuesta: 0,
    referencia: "Hechos 1:1"
  },
  // Pregunta 96
  {
    pregunta: "¿Quién profetizó el cautiverio de Judá en Babilonia?",
    opciones: ["Ezequiel", "Jeremías", "Oseas"],
    respuesta: 1,
    referencia: "Jeremías 25:11"
  },
  // Pregunta 97
  {
    pregunta: "¿Cuál es el libro poético más extenso de la Biblia?",
    opciones: ["Proverbios", "Job", "Salmos"],
    respuesta: 2,
    referencia: "Salmos (150 capítulos)"
  },
  // Pregunta 98
  {
    pregunta: "¿Quién fue el primer mártir cristiano según el libro de Hechos?",
    opciones: ["Esteban", "Santiago", "Felipe"],
    respuesta: 0,
    referencia: "Hechos 7:59-60"
  },
  // Pregunta 99
  {
    pregunta: "¿Cuál de estas cartas paulinas se dirige a la iglesia en Filipos?",
    opciones: ["Efesios", "Filipenses", "Colosenses"],
    respuesta: 1,
    referencia: "Filipenses 1:1"
  },
  // Pregunta 100
  {
    pregunta: "¿Quién fue el suegro de Moisés que le aconsejó delegar responsabilidades?",
    opciones: ["Ragüel", "Jetro", "Balac"],
    respuesta: 1,
    referencia: "Éxodo 18:17-24"
  }
];

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

    // --- 23 pares adicionales ---

    {
        tema: "Fidelidad de Dios",
        pasaje1: "Lamentaciones 3:22-23",
        pasaje2: "2 Timoteo 2:13"
    },
    {
        tema: "Nueva vida en Cristo",
        pasaje1: "2 Corintios 5:17",
        pasaje2: "Romanos 6:4"
    },
    {
        tema: "El amor de Dios",
        pasaje1: "Juan 3:16",
        pasaje2: "1 Juan 4:9"
    },
    {
        tema: "El fruto del Espíritu",
        pasaje1: "Gálatas 5:22-23",
        pasaje2: "Efesios 5:9"
    },
    {
        tema: "La oración",
        pasaje1: "Mateo 6:9-13",
        pasaje2: "Santiago 5:16"
    },
    {
        tema: "La humildad",
        pasaje1: "Filipenses 2:3",
        pasaje2: "1 Pedro 5:6"
    },
    {
        tema: "Confianza en Dios",
        pasaje1: "Proverbios 3:5-6",
        pasaje2: "Salmos 37:5"
    },
    {
        tema: "Consuelo en la aflicción",
        pasaje1: "Salmos 34:18",
        pasaje2: "2 Corintios 1:3-4"
    },
    {
        tema: "Obediencia a Dios",
        pasaje1: "Juan 14:15",
        pasaje2: "1 Juan 5:3"
    },
    {
        tema: "La gracia de Dios",
        pasaje1: "Tito 2:11",
        pasaje2: "2 Corintios 12:9"
    },
    {
        tema: "Sabiduría Divina",
        pasaje1: "Santiago 1:5",
        pasaje2: "Proverbios 9:10"
    },
    {
        tema: "Arrepentimiento",
        pasaje1: "Hechos 3:19",
        pasaje2: "Lucas 13:3"
    },
    {
        tema: "Libertad en Cristo",
        pasaje1: "Gálatas 5:1",
        pasaje2: "Juan 8:36"
    },
    {
        tema: "El Reino de Dios",
        pasaje1: "Mateo 6:33",
        pasaje2: "Romanos 14:17"
    },
    {
        tema: "La armadura de Dios",
        pasaje1: "Efesios 6:11",
        pasaje2: "2 Corintios 10:4"
    },
    {
        tema: "Esperanza eterna",
        pasaje1: "Romanos 15:13",
        pasaje2: "1 Pedro 1:3"
    },
    {
        tema: "La disciplina de Dios",
        pasaje1: "Hebreos 12:6",
        pasaje2: "Proverbios 3:11-12"
    },
    {
        tema: "El poder de la lengua",
        pasaje1: "Santiago 3:5-6",
        pasaje2: "Proverbios 18:21"
    },
    {
        tema: "Unidad en Cristo",
        pasaje1: "Efesios 4:3",
        pasaje2: "Juan 17:21"
    },
    {
        tema: "La soberanía de Dios",
        pasaje1: "Daniel 4:35",
        pasaje2: "Romanos 9:20-21"
    },
    {
        tema: "La fe como victoria",
        pasaje1: "1 Juan 5:4",
        pasaje2: "Marcos 11:22-24"
    },
    {
        tema: "El gozo en el Señor",
        pasaje1: "Filipenses 4:4",
        pasaje2: "Nehemías 8:10"
    },
    {
        tema: "La verdad de la Palabra",
        pasaje1: "Juan 17:17",
        pasaje2: "2 Timoteo 3:16"
    }
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
// FUNCIONES DE NOTIFICACIÓN NO BLOQUEANTE
// ====================================================
function showNotification(message, isError = false) {
    const notificationArea = document.getElementById('notification-area');
    const notif = document.createElement('div');
    notif.classList.add('notification-popup');
    if (isError) {
        notif.classList.add('error');
    }
    notif.textContent = message;
    notificationArea.appendChild(notif);

    setTimeout(() => {
        notificationArea.removeChild(notif);
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
    
    // Inicializar selección de violaciones
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
    
    showNotification(
        `${players[currentPlayerIndex].name} obtiene ${Math.max(totalPoints, 0)} puntos!`
    );
    nextTabuCard();
}

function handleTabuFailure() {
    showNotification("❌ Nadie adivinó la palabra", true);
    nextTabuCard();
}

function assignGuesserPoints(playerIndex) {
    players[playerIndex].score += 5; // Puntos extra por adivinar
    showNotification(`⭐ ${players[playerIndex].name} gana 5 puntos por adivinar!`);
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
        showNotification(`✅ Correcto! +10 puntos para ${players[currentPlayerIndex].name}`);
    } else {
        const correctAnswer = bibleData.trivia[questionIndex].opciones[bibleData.trivia[questionIndex].respuesta];
        showNotification(`❌ Incorrecto. La respuesta era: ${correctAnswer}`, true);
    }
    
    currentTriviaIndex = (currentTriviaIndex + 1) % bibleData.trivia.length;
    nextTurn();
    loadTriviaQuestion();
}

// ====================================================
// LÓGICA DE MEMO (CON TURNOS Y PUNTOS)
// ====================================================
function loadMemoGame() {
    const container = document.getElementById("game-container");
    const memoPairs = shuffleArray([...bibleData.memo.flatMap(pair => [pair.pasaje1, pair.pasaje2])]);

    // Reiniciar estado
    flippedCards = [];
    matchedPairs = 0;

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
    // Permitir voltear hasta 2 cartas
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

    const isMatch = bibleData.memo.some(pair =>
        (pair.pasaje1 === text1 && pair.pasaje2 === text2) ||
        (pair.pasaje1 === text2 && pair.pasaje2 === text1)
    );

    if (isMatch) {
        // Suma puntos al jugador actual
        players[currentPlayerIndex].score += 5;
        matchedPairs++;
        showNotification(`¡Par encontrado! +5 puntos para ${players[currentPlayerIndex].name}`);
        
        flippedCards = [];

        // Comprobar si se encontraron todos los pares
        if (matchedPairs === bibleData.memo.length) {
            showNotification(`🎉 ¡Felicidades! Han encontrado todos los pares.`);
        }
        // OPCIONAL: Si quieres que el mismo jugador continúe cuando acierta, no hacemos nextTurn() aquí.
        // nextTurn(); // Descomenta si quieres que pase el turno tras acertar
    } else {
        // Esperar un segundo y voltear
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            // Si falla, pasa el turno
            nextTurn();
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
            loadMemoGame();
            break;
    }
}
