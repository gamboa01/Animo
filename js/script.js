// Objeto con mensajes y nombres de archivos de audio (ej: "frase1.mp3")
const frasesConAudio = [
    { 
        texto:     "¡Tú dominas este tema, que no te ganen los nervios mi amor!",
        audio: "frase1.mp3"  
    },
    { 
        texto:     "Los nervios son normales, pero recuerda: Eres más capaz de lo que crees. ¡Tú puedes mi cielo!",
        audio: "frase2.mp3"  
    },
    { 
        texto:     "Confía en tu preparación. Has leído y eso se notará mi vida.",
        audio: "frase3.mp3"  
    },
    { 
        texto:     "Eres capaz de lograr todo lo que te propongas bebé.",
        audio: "frase4.mp3"  
    },
    { 
        texto:     "Tu sonrisa es mi motivación. ¡No dejes de hacerlo mañana mi niña!",
        audio: "frase5.mp3"  
    },
    { 
        texto:     "Recuerda que cada error es una oportunidad de aprender. ¡No temas equivocarte preciosa!",
        audio: "frase6.mp3"  
    },
    { 
        texto:     "Confía en ti misma como yo confío en ti guapa.",
        audio: "frase7.mp3"  
    },
    { 
        texto:     "No importa lo que pase, siempre estaré orgulloso de ti mi corazoncito.",
        audio: "frase8.mp3"  
    },
    { 
        texto:     "La seguridad no es saberlo todo, es confiar en que puedes manejar lo que venga. ¡Y tú PUEDES hermosa!",
        audio: "frase9.mp3"  
    },
    { 
        texto:     "Eres increíble, y mañana lo demostrarás amorcito.",
        audio: "frase10.mp3"  
    },
    { 
        texto:     "No te compares con los demás linda. Cada uno tiene su propia forma de hacer las cosas.",
        audio: "frase11.mp3"  
    },
    { 
        texto:     "Recuerda cariño que los grandes logros requieren esfuerzo.",
        audio: "frase12.mp3"  
    },
    { 
        texto:     "No dejes que el miedo te detenga. Usa esa energía para impulsarte mi princesa.",
        audio: "frase13.mp3"  
    },
    { 
        texto:     "La confianza en ti misma es la clave mi bonita.",
        audio: "frase14.mp3"  
    },
    { 
        texto: "Cada día es una nueva oportunidad para aprender y crecer amorchi.",
        audio: "frase15.mp3"  
    }
];

let audioActual = null; // Para controlar la reproducción

// Cambiar mensaje (ahora con audio)
document.getElementById('cambiarMensaje').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje');
    const botonEscuchar = document.getElementById('escucharVoz');
    const fraseAleatoria = frasesConAudio[Math.floor(Math.random() * frasesConAudio.length)];
    
    mensaje.textContent = `"${fraseAleatoria.texto}"`;
    botonEscuchar.dataset.audio = fraseAleatoria.audio;
    botonEscuchar.classList.remove('d-none'); // Mostrar botón
    
    // Restaurar ícono (por si estaba en "pausa")
    botonEscuchar.innerHTML = '<i class="fas fa-play me-2"></i> Escuchar';
});

// Reproducir audio al hacer clic en "Escuchar mi voz"
document.getElementById('escucharVoz').addEventListener('click', function() {
    const audioFile = this.dataset.audio;
    
    if (audioActual) {
        audioActual.pause(); // Detener audio anterior
    }
    
    audioActual = new Audio(`audios/${audioFile}`); // Ajusta la ruta
    audioActual.play().catch(e => console.log("Error al reproducir:", e));
    
    // Cambiar ícono a "reproduciendo"
    this.innerHTML = '<i class="fas fa-pause me-2"></i> Pausar';
    
    // Restaurar ícono al terminar
    audioActual.onended = () => {
        this.innerHTML = '<i class="fas fa-play me-2"></i> Escuchar';
    };
});