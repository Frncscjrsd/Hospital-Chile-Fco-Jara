// Módulo3: Taller 2

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

const doctores = [
    { nombre: 'Dra. María García', experiencia: 6, especialidad: 'Pediatría', imagen: 'assets/img/doctores/doctor2.jpg' },
    { nombre: 'Dra. Josefa García', experiencia: 2, especialidad: 'Pediatría', imagen: 'assets/img/doctores/doctor2.jpg' },
    { nombre: 'Dr. Roberto López', experiencia: 10, especialidad: 'Neurología', imagen: 'assets/img/doctores/doctor3.jpg'  },
    { nombre: 'Dr. Luis López', experiencia: 3, especialidad: 'Neurología', imagen: 'assets/img/doctores/doctor3.jpg'  },
    { nombre: 'Dra. Ana Martínez', experiencia: 8, especialidad: 'Oncología', imagen: 'assets/img/doctores/doctor4.jpg' },
    { nombre: 'Dr. Juan Pérez', experiencia: 30, especialidad: 'Cardiología', imagen: 'assets/img/doctores/doctor1.jpg' },
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

try {
    let telefono = undefined;
    if (!telefono) {
        throw new Error('El teléfono no puede estar vacío');
    }
} catch (error) {
    console.error('Error:', error.message);
    alert('Ocurrió un error: ' + error.message);
}

// 4.2 - Uso de debugger para depurar el código
debugger;
console.log('Este es un punto de depuración');

// Módulo 3: Laboratorio Virtual 1

const doctoresJSON = [
    {
        nombre: "Dr. Juan Pérez",
        especialidad: "Cardiología",
        experiencia: 10,
        disponibilidad: {
            lunes: "9:00 AM - 1:00 PM",
            martes: "2:00 PM - 6:00 PM",
            miercoles: "9:00 AM - 1:00 PM"
        },
        contacto: {
            telefono: "123-456-7890",
            email: "juan.perez@hospital.com"
        }
    },
    {
        nombre: "Dra. Ana Gómez",
        especialidad: "Pediatría",
        experiencia: 7,
        disponibilidad: {
            lunes: "10:00 AM - 3:00 PM",
            jueves: "1:00 PM - 5:00 PM",
            viernes: "8:00 AM - 12:00 PM"
        },
        contacto: {
            telefono: "987-654-3210",
            email: "ana.gomez@hospital.com"
        }
    }
];

// Ejemplo de acceso a los datos
const [doctor1, doctor2] = doctoresJSON;
console.log(doctor1.nombre);
console.log(doctor2.contacto.email);

// Datos del equipo médico
const equipoMedico = [
    {
        nombre: "Dr. Juan Pérez",
        especialidad: "Cardiología",
        descripcion: "Experto en enfermedades del corazón y en brindar tratamientos personalizados.",
        img: "assets/img/doctores/doctor1.jpg"
    },
    {
        nombre: "Dra. María García",
        especialidad: "Pediatría",
        descripcion: "Comprometida con la salud y el bienestar de los más pequeños.",
        img: "assets/img/doctores/doctor2.jpg"
    },
    {
        nombre: "Dr. Roberto López",
        especialidad: "Neurología",
        descripcion: "Experto en trastornos del sistema nervioso y en investigaciones innovadoras.",
        img: "assets/img/doctores/doctor3.jpg"
    },
    {
        nombre: "Dra. Ana Martínez",
        especialidad: "Oncología",
        descripcion: "Enfocada en ofrecer esperanza y apoyo en el tratamiento del cáncer.",
        img: "assets/img/doctores/doctor4.jpg"
    }
];

// Función para renderizar el equipo médico
function renderizarEquipo() {
    console.log("Renderizando equipo...");
    const contenedor = document.querySelector(".equipo-medico");

    // Limpiar el contenedor antes de agregar nuevos elementos
    contenedor.innerHTML = "";

    equipoMedico.forEach(doc => {
        const div = document.createElement("div");
        div.classList.add("doctor");

        div.innerHTML = `
            <img src="${doc.img}" alt="${doc.nombre}">
            <h3>${doc.nombre}</h3>
            <p>Especialidad: ${doc.especialidad}</p>
            <p>${doc.descripcion}</p>
        `;
        contenedor.appendChild(div);
    });
}

// Llamada a la función para cargar el equipo médico cuando la página cargue
document.addEventListener("DOMContentLoaded", renderizarEquipo);

// 1. Programación Funcional en JavaScript

// Implementación de currying para calcular el costo total de los servicios
const calcularCosto = precio => consultas => precio * consultas;

// Función flecha para calcular el tiempo promedio de espera de los pacientes
const calcularPromedioEspera = (tiemposEspera) => tiemposEspera.reduce((total, tiempo) => total + tiempo, 0) / tiemposEspera.length;

// Recursión para calcular el total de horas de consulta de un doctor
const calcularTotalHoras = (horas, dias) => dias === 0 ? horas : calcularTotalHoras(horas + 8, dias - 1);

// Composición de funciones para aplicar descuentos
const aplicarDescuento = descuento => costo => costo - (costo * descuento);

// Ejemplo de uso
const costoConsulta = calcularCosto(20); // 20 es el precio por consulta
const costoTotal = costoConsulta(5); // 5 consultas
const descuentoAplicado = aplicarDescuento(0.1)(costoTotal); // 10% de descuento

console.log(`Costo Total: $${costoTotal}`);
console.log(`Costo con Descuento: $${descuentoAplicado}`);

// 2. Programación Orientada a Eventos y Asíncrona

// Capturar el envío del formulario
const formulario = document.querySelector('#formulario-contacto');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente');
});

// Evento personalizado para simular la llegada de un nuevo paciente
const eventoNuevoPaciente = new Event('nuevoPaciente');
document.dispatchEvent(eventoNuevoPaciente);

document.addEventListener('nuevoPaciente', () => {
    alert('¡Nuevo paciente ha llegado!');
});

// Simulación de llamada a API con async/await
const obtenerDatosDoctores = async () => {
    try {
        let respuesta = await fetch('https://api.doctores.com');
        if (!respuesta.ok) throw new Error('Error al obtener los datos');
        let datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error:', error);
    }
};
obtenerDatosDoctores();

// 3. Programación Orientada a Objetos en JavaScript

// Clase Doctor
class Doctor {
    constructor(nombre, especialidad, experiencia) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._experiencia = experiencia;
        this.pacientesAtendidos = 0;
    }

    mostrarInfo() {
        console.log(`Doctor: ${this.nombre}, Especialidad: ${this.especialidad}, Experiencia: ${this._experiencia} años`);
    }

    atenderPaciente() {
        this.pacientesAtendidos += 1;
    }

    get experiencia() {
        return this._experiencia;
    }

    set experiencia(value) {
        if (value < 0) {
            console.log('La experiencia no puede ser negativa');
        } else {
            this._experiencia = value;
        }
    }
}

// Subclase Cirujano que extiende Doctor
class Cirujano extends Doctor {
    constructor(nombre, especialidad, experiencia, operacionesRealizadas) {
        super(nombre, especialidad, experiencia);
        this.operacionesRealizadas = operacionesRealizadas;
    }

    calcularOperaciones() {
        return this.operacionesRealizadas * 200;
    }
}

// Crear un nuevo doctor y utilizar su método
let drCarlos = new Cirujano('Dr. Carlos Pérez', 'Cirugía', 15, 50);
drCarlos.mostrarInfo();
console.log('Total operaciones: ', drCarlos.calcularOperaciones());


