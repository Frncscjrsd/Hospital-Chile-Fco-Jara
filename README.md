# Hospital Privado

Este proyecto consiste en la estructura de la página web de un hospital privado. La página incluye secciones como una barra de navegación, servicios médicos ofrecidos, testimonios de pacientes, y un pie de página con enlaces útiles y opciones de suscripción.

## Descripción

Este archivo HTML proporciona una página web inicial con las siguientes secciones:

1. **Encabezado (Header)** - Contiene la barra de navegación con enlaces a diferentes secciones de la página.
2. **Bienvenida** - Una introducción al hospital y sus valores.
3. **Servicios** - Presenta los servicios médicos disponibles en el hospital.
4. **Testimonios** - Incluye opiniones de pacientes sobre el servicio recibido.
5. **Equipo Médico** - Información sobre los especialistas del hospital.
6. **Contacto** - Un formulario para consultas y datos de contacto del hospital.
7. **Pie de Página (Footer)** - Enlaces a información adicional, políticas y suscripción al newsletter.

## Funcionalidades

- Solicitar al usuario su nombre, email y número de teléfono.
- Validar el email y número de teléfono proporcionados por el usuario.
- Mostrar los datos ingresados por el usuario en la consola y en un mensaje de alerta.
- Iterar sobre un array de objetos con información sobre los doctores y mostrar solo los que tienen más de 5 años de experiencia en el hospital.
- Uso de `try/catch` para manejo de errores y `debugger` para depuración.
- Mostrar los detalles del equipo médico en la página web utilizando JavaScript.

## Tecnologías y Metodologías Utilizadas

1. **Modularización de Estilos con SASS**: El proyecto utiliza el patrón 7-1 para organizar y gestionar los estilos con SASS. Este enfoque divide los archivos SASS en carpetas específicas para facilitar la modularización:
    - **base/**: Configuraciones globales como tipografías y variables.
    - **components/**: Estilos para elementos reutilizables como botones o formularios.
    - **layout/**: Estilos para la disposición general, como la cabecera y pie de página.
    - **pages/**: Estilos específicos para cada página (equipomedico.scss, contacto.scss).
    - **themes/**: Opcional, para manejar temas de colores o variaciones.
    - **vendors/**: Estilos externos o modificaciones a librerías como Bootstrap.
    El archivo principal `main.scss` importa todos estos módulos.

2. **Metodología BEM (Block Element Modifier)**: Se aplicó BEM para garantizar que los nombres de clase sean claros y escalables, facilitando el mantenimiento. Ejemplo:
    - **Bloque**: services (componente principal).
    - **Elemento**: services__title (parte del bloque).
    - **Modificador**: services__button-link (variación del elemento).
    Esto asegura consistencia y evita conflictos entre estilos.

3. **JavaScript avanzado**: El proyecto incluye funcionalidades interactivas mediante JavaScript avanzado.
    - Validación del formulario de contacto.
    - Interactividad en la barra de navegación (menú desplegable).
    - Animaciones ligeras para mejorar la experiencia de usuario.
    - Se evaluó el uso de TypeScript como alternativa para escalar el proyecto en el futuro.

### Event Loop en JavaScript:
JavaScript usa un **event loop** para manejar la ejecución de código. Existen dos partes principales:
- **Call Stack**: El lugar donde se colocan las funciones que se ejecutan de manera sincrónica. Si una función se ejecuta de manera sincrónica, se coloca en la pila de llamadas (call stack).
- **Heap**: Memoria donde se almacenan los objetos y datos.
- **Event Queue**: Cola donde se colocan las tareas asincrónicas (por ejemplo, eventos, promesas) que se ejecutan después de que la pila de llamadas esté vacía.

El **event loop** monitorea la pila de llamadas y la cola de eventos, ejecutando las tareas cuando la pila está vacía.

### Scope de las Variables:
- **`let` y `const`**: Tienen un scope de bloque, es decir, están disponibles solo dentro del bloque donde se definen (por ejemplo, dentro de una función o un `if`).
- **`var`**: Tiene un scope de función, lo que significa que está disponible en toda la función en la que se declara, incluso fuera de bloques como `if` o `for`.

### Uso de `try/catch` y Debugger:
- El bloque `try/catch` se utiliza para manejar errores de manera controlada. Si ocurre un error dentro del bloque `try`, el código en `catch` se ejecutará para manejarlo.
- El uso de `debugger` permite pausar la ejecución del código y revisar las variables en ese momento en el navegador para facilitar la depuración.

## Cambios Recientes: **Equipo Médico**

1. **Renderización Dinámica del Equipo Médico**: Se ha implementado la renderización dinámica del equipo médico. Los perfiles de los doctores (nombre, especialidad, descripción, imagen) ahora se cargan automáticamente desde un array de objetos usando JavaScript, y se muestran de manera ordenada en la página de **Equipo Médico**.
2. **Eliminación de duplicados**: Se ha corregido un problema donde los perfiles de los doctores se repetían en la página.

## Contenido

1. **Archivos HTML**:
    - `index.html`: Página principal.
    - `equipomedico.html`: Detalles del equipo médico.
    - `contacto.html`: Página de contacto.

2. **CSS y SASS**:
    - Carpeta `styles/`: Contiene los archivos SASS organizados con el patrón 7-1.
    - `main.css`: Archivo CSS compilado.

3. **JavaScript**:
    - Scripts personalizados en `assets/js`.

4. **Imágenes**:
    - Ubicadas en `assets/img`.

## Instalación

**Opción 1**: Clonar el Repositorio

1. Clona este repositorio en tu terminal.
2. Instala las dependencias si utilizas un preprocesador como SASS.
3. Compila los archivos SASS ejecutando: `sass styles/main.scss styles/main.css`.
4. Abre `index.html` en tu navegador para ver el sitio.

**Opción 2**: Descarga Directa

1. Descarga el archivo ZIP del proyecto.
2. Extrae el contenido y abre `index.html` en tu navegador.

## Créditos y Licencia

Proyecto desarrollado como parte del aprendizaje de desarrollo web avanzado. Todos los derechos reservados.
