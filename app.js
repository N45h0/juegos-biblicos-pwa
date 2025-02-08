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
    ],

    memo: [
        {
            tema: "Salvación por fe",
            pasaje1: {
                cita: "Efesios 2:8-9",
                texto: "Porque por gracia ustedes han sido salvados mediante la fe..."
            },
            pasaje2: {
                cita: "Romanos 3:28",
                texto: "Sostenemos, pues, que el hombre es justificado por la fe..."
            }
        },
        {
            tema: "Amor al prójimo",
            pasaje1: {
                cita: "Mateo 22:39",
                texto: "Ama a tu prójimo como a ti mismo."
            },
            pasaje2: {
                cita: "Levítico 19:18",
                texto: "No te vengarás ni guardarás rencor... amarás a tu prójimo."
            }
        },
        {
            tema: "Resurrección",
            pasaje1: {
                cita: "1 Corintios 15:20",
                texto: "Mas ahora Cristo ha resucitado de los muertos..."
            },
            pasaje2: {
                cita: "Juan 11:25",
                texto: "Yo soy la resurrección y la vida. El que cree en mí, vivirá..."
            }
        },
        {
            tema: "Perdón",
            pasaje1: {
                cita: "Mateo 6:14",
                texto: "Si perdonan a otros sus ofensas, también los perdonará a ustedes su Padre..."
            },
            pasaje2: {
                cita: "Colosenses 3:13",
                texto: "De modo que se toleren unos a otros y se perdonen si alguno tiene queja..."
            }
        },
        {
            tema: "Creación",
            pasaje1: {
                cita: "Génesis 1:1",
                texto: "En el principio Dios creó los cielos y la tierra."
            },
            pasaje2: {
                cita: "Juan 1:3",
                texto: "Todas las cosas fueron hechas por medio de él, y sin él nada fue hecho..."
            }
        },
        {
            tema: "Pecado original",
            pasaje1: {
                cita: "Romanos 3:23",
                texto: "Pues todos han pecado y están privados de la gloria de Dios..."
            },
            pasaje2: {
                cita: "Romanos 6:23",
                texto: "La paga del pecado es muerte, mientras que la dádiva de Dios es vida eterna..."
            }
        },
        {
            tema: "Fe de Abraham",
            pasaje1: {
                cita: "Génesis 15:6",
                texto: "Abram creyó al Señor, y el Señor se lo reconoció como justicia."
            },
            pasaje2: {
                cita: "Romanos 4:3",
                texto: "Abraham creyó a Dios, y esto se le tomó en cuenta como justicia."
            }
        },
        {
            tema: "Segunda Venida",
            pasaje1: {
                cita: "Hechos 1:11",
                texto: "Este mismo Jesús, que ha sido llevado de entre ustedes al cielo, vendrá otra vez..."
            },
            pasaje2: {
                cita: "Apocalipsis 22:20",
                texto: "El que da testimonio de estas cosas dice: 'Sí, vengo pronto'. Amén. ¡Ven, Señor Jesús!"
            }
        },
        {
            tema: "Fidelidad de Dios",
            pasaje1: {
                cita: "Lamentaciones 3:22-23",
                texto: "Por la misericordia del Señor no hemos sido consumidos... grandes son su fidelidad."
            },
            pasaje2: {
                cita: "2 Timoteo 2:13",
                texto: "Si somos infieles, él sigue siendo fiel, porque no puede negarse a sí mismo."
            }
        },
        {
            tema: "Nueva vida en Cristo",
            pasaje1: {
                cita: "2 Corintios 5:17",
                texto: "Si alguno está en Cristo, nueva criatura es..."
            },
            pasaje2: {
                cita: "Romanos 6:4",
                texto: "Fuimos sepultados con él en su muerte... para que anduviéramos en vida nueva."
            }
        },
        {
            tema: "El amor de Dios",
            pasaje1: {
                cita: "Juan 3:16",
                texto: "Porque tanto amó Dios al mundo que dio a su Hijo unigénito..."
            },
            pasaje2: {
                cita: "1 Juan 4:9",
                texto: "Así manifestó Dios su amor entre nosotros: en que envió a su Hijo unigénito al mundo..."
            }
        },
        {
            tema: "El fruto del Espíritu",
            pasaje1: {
                cita: "Gálatas 5:22-23",
                texto: "El fruto del Espíritu es amor, alegría, paz, paciencia..."
            },
            pasaje2: {
                cita: "Efesios 5:9",
                texto: "El fruto de la luz consiste en toda bondad, justicia y verdad."
            }
        },
        {
            tema: "La oración",
            pasaje1: {
                cita: "Mateo 6:9-13",
                texto: "Ustedes deben orar así: 'Padre nuestro que estás en el cielo...'"
            },
            pasaje2: {
                cita: "Santiago 5:16",
                texto: "La oración del justo es poderosa y eficaz."
            }
        },
        {
            tema: "La humildad",
            pasaje1: {
                cita: "Filipenses 2:3",
                texto: "No hagan nada por egoísmo... sean humildes y consideren a los demás como superiores."
            },
            pasaje2: {
                cita: "1 Pedro 5:6",
                texto: "Humíllense, pues, bajo la poderosa mano de Dios, para que él los exalte a su debido tiempo."
            }
        },
        {
            tema: "Confianza en Dios",
            pasaje1: {
                cita: "Proverbios 3:5-6",
                texto: "Confía en el Señor con todo tu corazón... él enderezará tus sendas."
            },
            pasaje2: {
                cita: "Salmos 37:5",
                texto: "Encomienda al Señor tu camino; confía en él, y él actuará."
            }
        },
        {
            tema: "Consuelo en la aflicción",
            pasaje1: {
                cita: "Salmos 34:18",
                texto: "El Señor está cerca de los quebrantados de corazón..."
            },
            pasaje2: {
                cita: "2 Corintios 1:3-4",
                texto: "Dios nos consuela en todas nuestras tribulaciones, para que con ese mismo consuelo..."
            }
        },
        {
            tema: "Obediencia a Dios",
            pasaje1: {
                cita: "Juan 14:15",
                texto: "Si ustedes me aman, obedecerán mis mandamientos."
            },
            pasaje2: {
                cita: "1 Juan 5:3",
                texto: "En esto consiste el amor a Dios: en que obedezcamos sus mandamientos."
            }
        },
        {
            tema: "La gracia de Dios",
            pasaje1: {
                cita: "Tito 2:11",
                texto: "En verdad, Dios ha manifestado a toda la humanidad su gracia..."
            },
            pasaje2: {
                cita: "2 Corintios 12:9",
                texto: "Te basta con mi gracia, pues mi poder se perfecciona en la debilidad."
            }
        },
        {
            tema: "Sabiduría Divina",
            pasaje1: {
                cita: "Santiago 1:5",
                texto: "Si a alguno de ustedes le falta sabiduría, pídasela a Dios..."
            },
            pasaje2: {
                cita: "Proverbios 9:10",
                texto: "El temor del Señor es el principio de la sabiduría..."
            }
        },
        {
            tema: "Arrepentimiento",
            pasaje1: {
                cita: "Hechos 3:19",
                texto: "Por tanto, para que sean borrados sus pecados, arrepiéntanse y vuélvanse a Dios..."
            },
            pasaje2: {
                cita: "Lucas 13:3",
                texto: "Si no se arrepienten, todos perecerán igualmente."
            }
        },
        {
            tema: "Libertad en Cristo",
            pasaje1: {
                cita: "Gálatas 5:1",
                texto: "Cristo nos libertó para que vivamos en libertad..."
            },
            pasaje2: {
                cita: "Juan 8:36",
                texto: "Así que, si el Hijo los libera, serán ustedes verdaderamente libres."
            }
        },
        {
            tema: "El Reino de Dios",
            pasaje1: {
                cita: "Mateo 6:33",
                texto: "Busquen primeramente el reino de Dios y su justicia..."
            },
            pasaje2: {
                cita: "Romanos 14:17",
                texto: "El reino de Dios no es cuestión de comidas o bebidas, sino de justicia, paz y gozo..."
            }
        },
        {
            tema: "La armadura de Dios",
            pasaje1: {
                cita: "Efesios 6:11",
                texto: "Pónganse toda la armadura de Dios para que puedan hacer frente a las artimañas del diablo."
            },
            pasaje2: {
                cita: "2 Corintios 10:4",
                texto: "Las armas con las que luchamos no son del mundo, sino que tienen el poder de Dios..."
            }
        },
        {
            tema: "Esperanza eterna",
            pasaje1: {
                cita: "Romanos 15:13",
                texto: "Que el Dios de la esperanza los llene de toda alegría y paz mientras confían en él..."
            },
            pasaje2: {
                cita: "1 Pedro 1:3",
                texto: "Nos ha hecho nacer de nuevo para una esperanza viva mediante la resurrección de Jesucristo..."
            }
        },
        {
            tema: "La disciplina de Dios",
            pasaje1: {
                cita: "Hebreos 12:6",
                texto: "Porque el Señor disciplina a los que ama, y azota a todo el que recibe como hijo."
            },
            pasaje2: {
                cita: "Proverbios 3:11-12",
                texto: "No desprecies, hijo mío, la disciplina del Señor... porque el Señor disciplina a quienes ama."
            }
        },
        {
            tema: "El poder de la lengua",
            pasaje1: {
                cita: "Santiago 3:5-6",
                texto: "La lengua es un fuego, un mundo de maldad... contamina todo el cuerpo..."
            },
            pasaje2: {
                cita: "Proverbios 18:21",
                texto: "En la lengua hay poder de vida y muerte; quienes la aman comerán de su fruto."
            }
        },
        {
            tema: "Unidad en Cristo",
            pasaje1: {
                cita: "Efesios 4:3",
                texto: "Esfuércense por mantener la unidad del Espíritu mediante el vínculo de la paz."
            },
            pasaje2: {
                cita: "Juan 17:21",
                texto: "Para que todos sean uno, así como tú, Padre, estás en mí y yo en ti..."
            }
        },
        {
            tema: "La soberanía de Dios",
            pasaje1: {
                cita: "Daniel 4:35",
                texto: "Todos los pueblos de la tierra no son nada comparados con Él... hace lo que quiere..."
            },
            pasaje2: {
                cita: "Romanos 9:20-21",
                texto: "¿Quién eres tú, para pedirle cuentas a Dios? ¿Acaso no puede el alfarero hacer con el barro..."
            }
        },
        {
            tema: "La fe como victoria",
            pasaje1: {
                cita: "1 Juan 5:4",
                texto: "Todo el que ha nacido de Dios vence al mundo. Ésta es la victoria que vence al mundo: nuestra fe."
            },
            pasaje2: {
                cita: "Marcos 11:22-24",
                texto: "Tengan fe en Dios... todo lo que pidan en oración, créanlo, y se les concederá."
            }
        },
        {
            tema: "El gozo en el Señor",
            pasaje1: {
                cita: "Filipenses 4:4",
                texto: "Alégrense siempre en el Señor. Insisto: ¡Alégrense!"
            },
            pasaje2: {
                cita: "Nehemías 8:10",
                texto: "No se pongan tristes, pues el gozo del Señor es su fortaleza."
            }
        },
        {
            tema: "La verdad de la Palabra",
            pasaje1: {
                cita: "Juan 17:17",
                texto: "Santíficalos en la verdad; tu palabra es la verdad."
            },
            pasaje2: {
                cita: "2 Timoteo 3:16",
                texto: "Toda la Escritura es inspirada por Dios y útil para enseñar, reprender, corregir y educar..."
            }
        }
    ]
};

/*******************************************************
 * LÓGICA MULTIJUGADOR Y LOGIN/REGISTRO
 *******************************************************/

// Arreglos y variables para la parte multijugador
let players = [];
let currentPlayerIndex = 0;

// ======================
// REGISTRO
// ======================
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-pass').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registro exitoso
            const user = userCredential.user;
            console.log("Usuario registrado:", user.email);
            alert("¡Registro exitoso!");
        })
        .catch((error) => {
            console.error("Error al registrar:", error);
            alert("Error al registrar: " + error.message);
        });
});

// ======================
// LOGIN
// ======================
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login exitoso
            const user = userCredential.user;
            console.log("Usuario logueado:", user.email);
            alert("Inicio de sesión exitoso");
        })
        .catch((error) => {
            console.error("Error al iniciar sesión:", error);
            alert("Error al iniciar sesión: " + error.message);
        });
});

// ======================
// LOGIN CON GOOGLE
// ======================
const googleProvider = new firebase.auth.GoogleAuthProvider();
document.getElementById('google-btn').addEventListener('click', () => {
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            console.log("Logueado con Google:", result.user);
            alert("Inicio de sesión con Google exitoso");
        })
        .catch((error) => {
            console.error("Error con Google:", error);
            alert("Error con Google: " + error.message);
        });
});

// ======================
// ESCUCHAR ESTADO DE SESIÓN
// ======================
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("Usuario activo:", user.email);
        document.getElementById('player-setup-section').style.display = 'block';
        document.getElementById('user-info').textContent = `Hola, ${user.email}`;
        document.getElementById('logout-btn').style.display = 'inline-block';
    } else {
        console.log("No hay usuario en sesión");
        document.getElementById('player-setup-section').style.display = 'none';
        document.getElementById('user-info').textContent = "";
        document.getElementById('logout-btn').style.display = 'none';
    }
});

// ======================
// CERRAR SESIÓN
// ======================
function logout() {
    auth.signOut()
        .then(() => {
            alert("Sesión cerrada");
        })
        .catch((error) => {
            console.error("Error al cerrar sesión:", error);
        });
}

/*******************************************************
 * FUNCIONES PARA MULTIJUGADOR
 *******************************************************/

// Crear inputs de jugadores
function createPlayerInputs(numberOfPlayers) {
    const container = document.getElementById('player-inputs-container');
    container.innerHTML = '';

    for (let i = 1; i <= numberOfPlayers; i++) {
        container.innerHTML += `
      <input type="text" 
             id="player${i}" 
             placeholder="Jugador ${i}" 
             required>
    `;
    }
}

// Iniciar el juego
function startGame() {
    // Verificar si hay usuario logueado
    if (!auth.currentUser) {
        alert("Debes iniciar sesión para comenzar el juego.");
        return;
    }

    const numberOfPlayers = document.getElementById('player-count').value;
    players = [];

    for (let i = 1; i <= numberOfPlayers; i++) {
        const name = document.getElementById(`player${i}`).value || `Jugador ${i}`;
        players.push({
            name,
            score: 0
        });
    }

    // Ocultamos la pantalla de inicio y mostramos la de juego
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    updateScoreboard();
}

// Actualizar marcador
function updateScoreboard() {
    const scoresContainer = document.getElementById('scores-container');
    const currentPlayer = document.getElementById('current-player-name');

    scoresContainer.innerHTML = players.map(player => `
    <div class="score-item">
      ${player.name}: <span>${player.score} pts</span>
    </div>
  `).join('');

    currentPlayer.textContent = players[currentPlayerIndex].name;
}

// Cambiar turno
function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateScoreboard();
    showTurnPopup(players[currentPlayerIndex].name);
}

// Popup de turno
function showTurnPopup(playerName) {
    const popup = document.getElementById('turn-popup');
    const playerNameElement = document.getElementById('turn-player-name');

    playerNameElement.textContent = playerName;
    popup.style.display = 'flex';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 1500);
}

/*******************************************************
 * NOTIFICACIONES NO BLOQUEANTES
 *******************************************************/
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
