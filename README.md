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

## Tecnologías y Metodologías Utilizadas

1. **Modularización de Estilos con SASS**: El proyecto utiliza el patrón 7-1 para organizar y gestionar los estilos con SASS. Este enfoque divide los archivos SASS en carpetas específicas para facilitar la modularización:
base/: Configuraciones globales como tipografías y variables.
components/: Estilos para elementos reutilizables como botones o formularios.
layout/: Estilos para la disposición general, como la cabecera y pie de página.
pages/: Estilos específicos para cada página (equipomedico.scss, contacto.scss).
themes/: Opcional, para manejar temas de colores o variaciones.
vendors/: Estilos externos o modificaciones a librerías como Bootstrap.
El archivo principal main.scss importa todos estos módulos.

2. **Metodología BEM (Block Element Modifier)**: Se aplicó BEM para garantizar que los nombres de clase sean claros y escalables, facilitando el mantenimiento. Ejemplo:
Bloque: services (componente principal).
Elemento: services__title (parte del bloque).
Modificador: services__button-link (variación del elemento).
Esto asegura consistencia y evita conflictos entre estilos.

3. **JavaScript avanzado**: El proyecto incluye funcionalidades interactivas mediante JavaScript avanzado.
Validación del formulario de contacto.
Interactividad en la barra de navegación (menú desplegable).
Animaciones ligeras para mejorar la experiencia de usuario.
Se evaluó el uso de TypeScript como alternativa para escalar el proyecto en el futuro.

## Contenido

1. **Archivos HTML**: index.html: Página principal.
equipomedico.html: Detalles del equipo médico.
contacto.html: Página de contacto.

2. **CSS y SASS**: Carpeta styles/: Contiene los archivos SASS organizados con el patrón 7-1.
main.css: Archivo CSS compilado.

3. **JavaScript**: Scripts personalizados en assets/js.

4. **Imágenes**: Ubicadas en assets/img.

## Instalación

**Opción 1**: Clonar el Repositorio

Clona este repositorio en tu terminal.
Instala las dependencias si utilizas un preprocesador como SASS.

Compila los archivos SASS ejecutando: sass styles/main.scss styles/main.css

Abre index.html en tu navegador para ver el sitio.

**Opción 2**: Descarga Directa

Descarga el archivo ZIP del proyecto.
Extrae el contenido y abre index.html en tu navegador.

## Créditos y Licencia

Proyecto desarrollado como parte del aprendizaje de desarrollo web avanzado. Todos los derechos reservados.
