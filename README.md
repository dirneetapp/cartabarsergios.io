# Carta Interactiva para Bar Sergios

Esta es una aplicación web que permite mostrar y gestionar fácilmente la carta de un bar o restaurante. La aplicación está diseñada para ser intuitiva, visualmente atractiva y fácil de modificar sin necesidad de conocimientos técnicos avanzados.

## Características

- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla (móviles, tablets, ordenadores).
- **Secciones Personalizables**: Incluye las secciones solicitadas (Desayunos, Bocadillos, Croquetas, Especiales, Postres, Tablas, Sugerencias, Torradas, Vermuts, Tapas).
- **Panel de Administración**: Permite añadir, editar y eliminar elementos de la carta sin necesidad de modificar código.
- **Almacenamiento Local**: Los cambios se guardan en el navegador del usuario.
- **Exportación/Importación**: Permite exportar e importar los datos de la carta en formato JSON.
- **Elementos Destacados**: Posibilidad de marcar elementos como destacados.
- **Imágenes**: Soporte para añadir imágenes a cada elemento de la carta.

## Cómo Usar

### Visualización de la Carta

1. Abre el archivo `index.html` en un navegador web.
2. Navega entre las diferentes secciones utilizando el menú superior.
3. Cada sección muestra los elementos correspondientes con su nombre, descripción, precio e imagen (si está disponible).

### Administración de la Carta

1. Haz clic en el botón de engranaje (⚙️) situado en la esquina inferior derecha para abrir el panel de administración.
2. Selecciona la sección que deseas modificar en el desplegable.
3. Para añadir un nuevo elemento, haz clic en "Añadir Nuevo Elemento" y rellena el formulario.
4. Para editar un elemento existente, haz clic en el icono de edición (✏️) junto al elemento.
5. Para eliminar un elemento, haz clic en el icono de papelera (🗑️) junto al elemento.
6. Haz clic en "Guardar Todos los Cambios" para asegurar que los cambios se guarden permanentemente.

### Exportar/Importar Datos

- **Exportar**: Haz clic en "Exportar Datos" en el panel de administración para descargar un archivo JSON con todos los datos de la carta.
- **Importar**: Haz clic en "Importar Datos" y selecciona un archivo JSON previamente exportado para cargar esos datos en la carta.

## Personalización

### Cambiar el Logo

1. Reemplaza el archivo `logo.png` con tu propio logo (manteniendo el mismo nombre).
2. Para mejores resultados, utiliza una imagen cuadrada o circular con fondo transparente.

### Modificar Estilos

Puedes personalizar la apariencia editando el archivo `styles.css`. Algunos aspectos que podrías querer modificar:

- **Colores**: Busca los códigos de color (como `#e74c3c` o `#2c3e50`) y cámbialos por tus colores preferidos.
- **Fuentes**: Modifica las fuentes en la sección inicial del CSS donde se define `font-family`.
- **Espaciado**: Ajusta los valores de `padding` y `margin` para cambiar el espaciado entre elementos.

### Añadir o Eliminar Secciones

Si necesitas añadir o eliminar secciones, deberás modificar tres archivos:

1. **index.html**: Añade o elimina las secciones en el menú de navegación y en la estructura principal.
2. **script.js**: Actualiza el array de secciones en la función `renderAllSections`.
3. **menu-data.js**: Añade o elimina las secciones correspondientes en el objeto `defaultMenuData`.

## Consejos para un Mejor Rendimiento

- **Imágenes**: Utiliza imágenes optimizadas (comprimidas) para mejorar el tiempo de carga.
- **Elementos por Sección**: No sobrecargues las secciones con demasiados elementos para mantener la navegación fluida.
- **Respaldos**: Exporta regularmente los datos como copia de seguridad.

## Requisitos Técnicos

- Navegador web moderno (Chrome, Firefox, Safari, Edge).
- No requiere conexión a internet para funcionar (excepto para cargar imágenes externas si se utilizan URLs).

## Solución de Problemas

- **Los cambios no se guardan**: Asegúrate de hacer clic en "Guardar Todos los Cambios" después de realizar modificaciones.
- **Las imágenes no se muestran**: Verifica que las URLs de las imágenes sean correctas y accesibles.
- **Datos perdidos**: Utiliza la función de exportación regularmente para tener copias de seguridad de tus datos.

---

Desarrollado para Bar Sergios © 2025