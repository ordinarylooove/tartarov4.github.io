const questions = [
    { text: '¿Has tenido fantasias con alguien dentro de esta habitacion?' },
    { text: '¿Encuentras atractivo alguien que conoces fuera de tu relacion?' },
    { text: '¿Has lamido mas de un pene o vagina?' },
    { text: '¿Estarias con alguien de color?' },
    { text: '¿Has estado con dos personas a la vez?' },
    { text: '¿Te gustaria mirar una orgia sin participar?' },
    { text: '¿Te gustaria ver a tu pareja con otra persona mientras te masturbas?' },
    { text: '¿Te has masturbado pensando en alguien que no sea tu pareja?' },
    { text: 'Te emborrachaste y te econtraste con un ex, se acostaron, ¿se lo contarias a tu pareja?' },
    { text: '¿Te atrae o te ha atraido el sexo opuesto alguna vez?' },
    { text: '¿Te has masturbado pensando en alguien conocido para ti y tu pareja?' },
    { text: '¿Te gustaria que te violara un extraterrestre?' },
    { text: '¿Serias infiel si estas muy drogad@ o ebri@?' },
    { text: '¿Has ido alguna despedida de soltero o soltera?' },
    { text: 'Estas solter@, entran en tu casa a robar, te amarran y te empiezan a tocar, el ladron@ te parece atractivo en todo aspecto, ¿te resistes?' },
    { text: '¿Alguna vez has besado al sexo opuesto?' },
    { text: '¿Alguna vez te ha tocado el sexo opuesto y has tocado al sexo opuesto?' },
    { text: '¿Te gusta la adrenalina de la infidelidad?' },
    { text: '¿Tu relacion es seria?' },
    { text: '¿Elijirias la proxima pareja de tu pareja?' },
    { text: '¿Te acostarias con un transgener@ atractiv@?' },
    { text: '¿Tienes amig@s que te han coqueteado?' },
    { text: '¿Has sido infiel imaginariamente?' },
    { text: '¿Has finjido orgasmos?' },
    { text: '¿Te has acostado con mas de una persona el mismo dia?' },
    { text: '¿Te gustaria ser tu sexo opuesto alguna vez?' },
    { text: '¿Has sentido tentacion a la infidelidad?' },
    { text: '¿Ocultas algo a tu pareja, un secreto?' },
    { text: '¿Tienes fantasias sexuales no realizadas?' },
    { text: '¿Te han visto desnud@ en publico?' },
    { text: '¿Has pensado en otra persona mientras lo haces con tu pareja?' },
    { text: '¿Te acabas de bañar, escuchas que tocan el timbre de tu puerta, abres en toalla, un o una tip@ muy atractivo para ti comienza inmediatamente a besarte de forma violenta, te empuja contra la pared, ¿lo hacen?' },
    { text: '¿Te gusta hacerlo al aire libre con la posibildad que te descubran?' },
    { text: '¿Has tendio relaciones con un trio?' },
    { text: '¿Te gustaria hacer un trio?' },
    { text: '¿Te gustaria acostarte con un desconoci@ que nunca mas veras en tu vida?' },
    { text: '¿Encuentras a tu pareja teniedo sexo con un o una prostitua, te unes?' },
    { text: '¿Te gustaria que el tamaño de los atributos de tu pareja fueran mas grandes?' },
    { text: '¿Te excitaria que te miraran teniedo sexo?' },
    { text: '¿Te has vestido con ropa de otro genero?' },
    { text: '¿quieres estar con un pene mas grande o una vagina mas estrecha?' },
    { text: '¿Alguna vez has confundido el nombre de tu pareja?' },
    { text: '¿Crees que alguien en la habitacion aparte de tu pareja quiere follarte?' },
    { text: '¿Piensas que tu pareja te ha mentido alguna vez?' },
    { text: '¿Dejarias a tu pareja por su gemel@ millonario?' },
    { text: '¿Te ha gustado mas el sexo con otra persona que no es tu pareja?' },
    { text: 'Fuiste infiel, lo cuentas a tu pareja?' },
    { text: '¿Eres mas adicto al sexo que la gente normal?' },
    { text: '¿Te gustaria acostarte con 4 personas diferentes pero atractivas en un mismo dia?' },
    { text: '¿estarias con un o una scort?' },
    // Agrega más preguntas según sea necesario
];

let currentQuestion = 0;

function initializeQuestion() {
    const questionText = document.getElementById('question-text');
    questionText.innerText = questions[currentQuestion].text;
}

function answerQuestion(answer) {
    showFingerprintScreen(() => {
        simulateFingerprintVerification(result => {
            showResult(answer, result);
        });
    });
}

function showResult(answer, result) {
    const resultContainer = document.getElementById('result-container');
    const questionText = document.getElementById('question-text');
    const resultText = document.getElementById('result-text');
    const questionContainer = document.getElementById('question-container');

    resultContainer.classList.remove('hidden');
    questionContainer.classList.add('hidden');
    questionText.innerText = questions[currentQuestion].text;

    if (result === 'Verdad') {
        resultText.innerText = '¡Verdad!';
    } else {
        resultText.innerText = `Castigo: ${getRandomPunishment()}`;
    }
}

function getRandomPunishment() {
    const punishments = [
        "Acaricia por debajo de la ropa entre las piernas a la persona a tu derecha por 5 segundos.",
        "quedate en ropa interior.",
        "bebe un trago al seco.",
        "ponte un condon tu o pon un condon a alguien.",
        "pasa la lengua por los labios de la persona a tu derecha.",
        "beso negro a quien elijas en la habitacion.",
        "quitale la ropa interior al de tu derecha.",
        "bebe un trago al seco.",
        "haz sexo oral por 20 segundos a cualquiera de la habitacion.",
        "acaricia y penetra con tus dedos por 20 segundos a la persona a tu izquierda.",
        "ten sexo por 20 segundos y di un nombre de tu mejor amig@ al oido de tu pareja mientras lo haces.",
        "tocate por 10 segundos con los ojos cerrados frente a todos.",
        "bebe un trago al seco.",
        "mira a los ojos a la persona de tu izquierda y dile te amo, lame sus labios.",
        "toca la mano de alguien que no sea tu pareja hasta la siguiente pregunta.",
        "lame los dedos e alquien que no sea tu pareja.",
        "bebe un trago.",
        "haz lo que mas le gusta en la cama a tu pareja durante 20 segundos.",
        "escupe entre las piernas de la persona a tu derecha.",
        "haz sexo oral por 10 segundos a una o mas personas de la habitacion, 10 seg por persona.",
        "Muestra tus partes intimas por 5 segundos.",
        "haz sexo oral a tu pareja mientras te toca otra persona del grupo, tu elijes la persona.",
        "masturba a dos personas a la vez por 20 segundos.",
        "pon un dildo dentro tuyo hasta 3 preguntas mas.",
        "ponle un dildo a alguien de la habitacion, lo tiene que tener hasta que acabe el juego.",
        "has sexo oral a una persona mientras otra te hace sexo oral a ti, elije tu los participantes",
        "todos se desnudan",
        "ponle aceite en las partes intimas de una persona en la habitacion, no puede ser tu pareja.",
        "ten sexo con tu pareja, todos miran, cada vez que lo meta tienes que decir un nombre de cada participante y mirarlo, 20 segundos.",
        "lluvia dorada, tu la recibes, elijes al participante.",
        "saca una foto de tu pareja desnuda, enviaselo a un participante.",
        "ponte un condon tu o pon un condon a alguien.",
        "besa a todos en la habitacion, que todos te toquen.",
        "si son mas de 2, uno de los participantes tiene que dejar el juego, no puede estar en la misma habitacion, tu elijes.",
        "invita algun participante nuevo a jugar, si no tienes a quien, puedes elejir un@ scort, los demas pagan.",
        "penetra a la persona de tu izquierda por 40 segundos, los demas no tienen que mirar.",
        "bebe 3 trago.",
        "que te hagan sexo oral una o mas personas tu elijes.",
        "el invitad@ o scort tiene que tener sexo duro contigo, los demas miran, 1 minuto.",
        "agarra un pene o un seno, que no sea el tuyo, hasta la siguiente pregunta.",
        "nombra 3 personas con las que te gustaria acostarte.",
        "Elige una o dos personas y ten sexo, el que acabe primero tiene que ser relevado por otra persona, hasta que quede uno solo sin acabar.",
    
        // Agrega más castigos según sea necesario
    ];
    return punishments[Math.floor(Math.random() * punishments.length)];
}

function nextAction() {
    currentQuestion++;
    const resultContainer = document.getElementById('result-container');
    const questionContainer = document.getElementById('question-container');

    if (currentQuestion < questions.length) {
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        initializeQuestion();
    } else {
        // Si no hay más preguntas, puedes realizar alguna acción adicional o reiniciar el cuestionario.
        resultContainer.innerHTML = ''; // Limpiar el contenido del contenedor de resultados
        currentQuestion = 0; // Reiniciar a la primera pregunta si se llega al final
        questionContainer.classList.remove('hidden');
        initializeQuestion();
    }
}

function showFingerprintScreen(callback) {
    const questionContainer = document.getElementById('question-container');
    const fingerprintContainer = document.getElementById('fingerprint-container');
    questionContainer.classList.add('hidden');
    fingerprintContainer.classList.remove('hidden');
    document.addEventListener('keydown', handleEnterKey);
    document.getElementById('fingerprint-container').addEventListener('click', function() {
        fingerprintContainer.classList.add('hidden');
        document.removeEventListener('keydown', handleEnterKey);
        callback();
    });
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        document.getElementById('fingerprint-container').click();
    }
}

function simulateFingerprintVerification(callback) {
    // Simular verificación de huella digital
    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'Verdad' : 'Castigo';
        callback(result);
    }, 2000); // Simular un proceso de verificación de 2 segundos
}

// Inicializar la primera pregunta al cargar la página
initializeQuestion();

const backgrounds = [
    'fondo1.jpg',
    'fondo2.jpg',
    'fondo3.jpg',
    'fondo4.jpg',
    'fondo5.jpg',
    'fondo6.jpg',
    'fondo7.jpg',
    'fondo8.jpg',
    'fondo9.jpg',
    'fondo10.jpg',
    'fondo11.jpg',
    'fondo12.jpg',
    'fondo13.jpg',
    'fondo14.jpg',
    'fondo15.jpg',
    'fondo16.jpg',
    'fondo17.jpg',
    'fondo18.jpg',
    'fondo19.jpg',
    'fondo20.jpg',
    'fondo21.jpg',
    'fondo22.jpg',
    'fondo23.jpg',
    'fondo24.jpg',
    'fondo25.jpg',
    'fondo26.jpg',
    'fondo27.jpg', // Agrega más fondos según sea necesario
];

let currentBackgroundIndex = 0;

// Función para cambiar la imagen de fondo
function changeBackground() {
    const body = document.body;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

// Llama a la función para cambiar el fondo al cargar la página
changeBackground();

// Puedes ajustar la frecuencia del cambio de fondo ajustando el valor en setInterval
setInterval(changeBackground, 3000); // Cambia cada 3 segundos (3000 milisegundos)