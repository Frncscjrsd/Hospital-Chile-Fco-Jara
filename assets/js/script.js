// 1. Manejo del Entorno de Ejecución y Consola

// 1.1 - Configuración y uso de console.log()
console.log('Página cargada correctamente');


// 2. Manejo de Variables, Operadores y Prompt

// 2.1 - Solicitar información al usuario mediante prompt()
let nombre = prompt('Ingresa tu nombre');
let email = prompt('Ingresa tu correo electrónico');
let telefono = prompt('Ingresa tu número de teléfono');

// 2.2 - Mostrar los datos en la consola y en un alert
console.log(`Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`);
alert(`Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}`);

// 2.3 - Validación del email y teléfono
if (email.includes('@')) {
    console.log('Email válido');
} else {
    console.log('Email inválido');
    alert('Por favor, ingresa un email válido');
}

if (/^\d{9}$/.test(telefono)) {
    console.log('Número de teléfono válido');
} else {
    console.log('Número de teléfono inválido');
    alert('Por favor, ingresa un número de teléfono válido de 9 dígitos');
}


// 3. Ciclos e Iteraciones: Uso en la Interfaz

// 3.1 - Lista de doctores (usada en el ejemplo)
const doctores = [
    { nombre: 'Dra. María García', experiencia: 6, especialidad: 'Pediatría', imagen: 'assets/img/doctor2.jpg' },
    { nombre: 'Dra. Josefa García', experiencia: 2, especialidad: 'Pediatría', imagen: 'assets/img/doctor2.jpg' },
    { nombre: 'Dr. Roberto López', experiencia: 10, especialidad: 'Neurología', imagen: 'assets/img/doctor3.jpg'  },
    { nombre: 'Dr. Luis López', experiencia: 3, especialidad: 'Neurología', imagen: 'assets/img/doctor3.jpg'  },
    { nombre: 'Dra. Ana Martínez', experiencia: 8, especialidad: 'Oncología', imagen: 'assets/img/doctor4.jpg' },
    { nombre: 'Dr. Juan Pérez', experiencia: 30, especialidad: 'Cardiología', imagen: 'assets/img/doctor1.jpg' },

];

// 3.2 - Seleccionar el contenedor en el DOM para mostrar la lista de doctores
const contenedorDoctores = document.querySelector('.equipo-medico');

// 3.3 - Iterar sobre los doctores y agregarlos al DOM
doctores.forEach(doc => {
    if (doc.experiencia > 5) {  // Solo mostrar doctores con más de 5 años de experiencia
        const doctorDiv = document.createElement('div');
        doctorDiv.classList.add('doctor');
        doctorDiv.innerHTML = `
            <img src=${doc.imagen} >
            <h3>${doc.nombre}</h3>
            <p>Experiencia: ${doc.experiencia} años</p>
            <p>Especialidad: ${doc.especialidad}</p>
        `;
        contenedorDoctores.appendChild(doctorDiv);
    }
});

// 4. Manejo de Errores con try/catch y Debugging

// 4.1 - Manejo de errores con try/catch
try {
    // Simulando un error por teléfono vacío
    let telefono = undefined;
    if (!telefono) {
        throw new Error('El teléfono no puede estar vacío');
    }
} catch (error) {
    console.error('Error:', error.message);
    alert('Ocurrió un error: ' + error.message);
}

// 4.2 - Uso de debugger para depurar el código
debugger;  // La ejecución se pausará aquí en la consola del navegador para depuración
console.log('Este es un punto de depuración');

