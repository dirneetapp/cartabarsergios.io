// Variables globales
let menuData = {};
const MENU_DATA_KEY = 'barSergiosMenuData';
const ADMIN_PASSWORD = 'Sergios1928'; // Contraseña para el panel de administración (hash en producción)

// Elementos del DOM
const menuSections = document.querySelectorAll('.menu-section');
const navLinks = document.querySelectorAll('.nav-link');
const hamburgerBtn = document.getElementById('hamburger-btn');
const menuList = document.getElementById('menu-list');
const adminBtn = document.getElementById('show-admin');
const adminPanel = document.getElementById('admin-panel');
const closeAdminBtn = document.getElementById('close-admin');
const sectionSelector = document.getElementById('section-selector');
const itemForm = document.getElementById('item-form');
const adminItemsList = document.getElementById('admin-items-list');
const saveDataBtn = document.getElementById('save-data');
const exportDataBtn = document.getElementById('export-data');
const importDataBtn = document.getElementById('import-data');
const fileInput = document.getElementById('file-input');
const sugerenciasModal = document.getElementById('sugerencias-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalSugerenciasItems = document.getElementById('modal-sugerencias-items');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const closeLoginModalBtn = document.getElementById('close-login-modal');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos del menú
    loadMenuData();
    
    // Configurar eventos
    setupEventListeners();
    
    // Activar la primera sección por defecto
    activateSection('desayunos');
    
    // Mostrar modal de sugerencias al cargar la página
    showSugerenciasModal();
});

// Función para cargar los datos del menú
function loadMenuData() {
    // Intentar cargar desde localStorage
    const savedData = localStorage.getItem(MENU_DATA_KEY);
    
    if (savedData) {
        menuData = JSON.parse(savedData);
    } else {
        // Si no hay datos guardados, usar los datos por defecto
        menuData = defaultMenuData;
        // Guardar en localStorage
        localStorage.setItem(MENU_DATA_KEY, JSON.stringify(menuData));
    }
    
    // Renderizar los datos en las secciones
    renderMenuData();
}

// Función para renderizar los datos del menú
function renderMenuData() {
    // Recorrer cada sección del menú
    Object.keys(menuData).forEach(section => {
        const sectionItems = document.getElementById(`${section}-items`);
        if (sectionItems) {
            sectionItems.innerHTML = '';
            
            // Renderizar cada elemento de la sección
            menuData[section].forEach(item => {
                const menuItem = createMenuItem(item);
                sectionItems.appendChild(menuItem);
            });
        }
    });
    
    // Renderizar la lista de elementos en el panel de administración
    renderAdminItemsList();
}

// Función para configurar los event listeners
function setupEventListeners() {
    // Event listeners para la navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            activateSection(sectionId);
            
            // Cerrar el menú hamburguesa si está abierto
            if (menuList.classList.contains('active')) {
                menuList.classList.remove('active');
            }
        });
    });
    
    // Event listener para el botón hamburguesa
    hamburgerBtn.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });
    
    // Event listeners para el panel de administración
    adminBtn.addEventListener('click', showLoginModal);
    document.getElementById('nav-show-admin').addEventListener('click', function(e) {
        e.preventDefault();
        showLoginModal();
    });
    closeAdminBtn.addEventListener('click', toggleAdminPanel);
    
    // Event listener para el selector de sección en el panel de administración
    sectionSelector.addEventListener('change', renderAdminItemsList);
    
    // Event listener para el formulario de elementos
    itemForm.addEventListener('submit', handleItemFormSubmit);
    
    // Event listeners para los botones de exportar e importar datos
    saveDataBtn.addEventListener('click', saveMenuData);
    exportDataBtn.addEventListener('click', exportMenuData);
    importDataBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', importMenuData);
    
    // Event listeners para el modal de sugerencias
    closeModalBtn.addEventListener('click', closeSugerenciasModal);
    
    // Event listeners para el modal de login
    loginForm.addEventListener('submit', handleLoginFormSubmit);
    closeLoginModalBtn.addEventListener('click', closeLoginModal);
}

// Función para renderizar la lista de elementos en el panel de administración
function renderAdminItemsList() {
    const selectedSection = sectionSelector.value;
    adminItemsList.innerHTML = '';
    
    if (menuData[selectedSection]) {
        menuData[selectedSection].forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'item-actions';
            
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-item';
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            editBtn.addEventListener('click', () => editItem(selectedSection, index));
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-item';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.addEventListener('click', () => deleteItem(selectedSection, index));
            
            actionsDiv.appendChild(editBtn);
            actionsDiv.appendChild(deleteBtn);
            li.appendChild(actionsDiv);
            adminItemsList.appendChild(li);
        });
    }
}

// Función para crear un elemento del menú
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    if (item.featured) {
        menuItem.classList.add('featured');
    }
    
    let html = `
        <h3>${item.name}</h3>
        <p>${item.description || ''}</p>
        <div class="price">${item.price.toFixed(2)} €</div>
    `;
    
    if (item.featured) {
        html = `<span class="featured-badge">Destacado</span>` + html;
    }
    
    menuItem.innerHTML = html;
    return menuItem;
}

// Función para activar una sección
function activateSection(sectionId) {
    // Desactivar todas las secciones y enlaces
    menuSections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Activar la sección y enlace correspondiente
    const section = document.getElementById(sectionId);
    const link = document.querySelector(`a[href="#${sectionId}"]`);
    
    if (section && link) {
        section.classList.add('active');
        link.classList.add('active');
    }
}

// Función para mostrar el modal de login
function showLoginModal() {
    loginModal.classList.add('active');
}

// Función para cerrar el modal de login
function closeLoginModal() {
    loginModal.classList.remove('active');
    loginForm.reset();
}

// Función para manejar el envío del formulario de login
function handleLoginFormSubmit(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    
    if (password === ADMIN_PASSWORD) {
        closeLoginModal();
        toggleAdminPanel();
    } else {
        alert('Contraseña incorrecta');
    }
}

// Función para mostrar/ocultar el panel de administración
function toggleAdminPanel() {
    adminPanel.classList.toggle('active');
}

// Función para editar un elemento
function editItem(section, index) {
    const item = menuData[section][index];
    
    // Rellenar el formulario con los datos del elemento
    document.getElementById('item-name').value = item.name;
    document.getElementById('item-description').value = item.description || '';
    document.getElementById('item-price').value = item.price;
    document.getElementById('item-featured').checked = item.featured || false;
    
    // Guardar el ID del elemento que se está editando
    itemForm.dataset.editId = index;
    itemForm.dataset.editSection = section;
}

// Función para eliminar un elemento
function deleteItem(section, index) {
    if (confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
        menuData[section].splice(index, 1);
        renderMenuData();
    }
}

// Función para manejar el envío del formulario de elementos
function handleItemFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('item-name').value;
    const description = document.getElementById('item-description').value;
    const price = parseFloat(document.getElementById('item-price').value);
    const featured = document.getElementById('item-featured').checked;
    
    const section = sectionSelector.value;
    const editId = itemForm.dataset.editId;
    const editSection = itemForm.dataset.editSection;
    
    const newItem = {
        id: Date.now().toString(),
        name,
        description,
        price,
        featured
    };
    
    if (editId !== undefined && editSection) {
        // Editar elemento existente
        newItem.id = menuData[editSection][editId].id;
        // Preservar cualquier propiedad existente que no esté en el formulario, excepto 'image'
        const { image, ...oldItemWithoutImage } = menuData[editSection][editId];
        menuData[editSection][editId] = { ...oldItemWithoutImage, ...newItem };
    } else {
        // Añadir nuevo elemento
        if (!menuData[section]) {
            menuData[section] = [];
        }
        menuData[section].push(newItem);
    }
    
    // Limpiar el formulario y los datos de edición
    itemForm.reset();
    delete itemForm.dataset.editId;
    delete itemForm.dataset.editSection;
    
    // Actualizar la interfaz
    renderMenuData();
    saveMenuData();
}

// Función para guardar los datos del menú en localStorage
function saveMenuData() {
    localStorage.setItem(MENU_DATA_KEY, JSON.stringify(menuData));
    alert('Datos guardados correctamente');
}

// Función para exportar los datos del menú
function exportMenuData() {
    // Crear una copia de los datos para eliminar las referencias a imágenes
    const cleanData = {};
    
    // Recorrer cada sección y eliminar las referencias a imágenes
    Object.keys(menuData).forEach(section => {
        cleanData[section] = menuData[section].map(item => {
            // Crear un nuevo objeto sin la propiedad 'image'
            const { image, ...cleanItem } = item;
            return cleanItem;
        });
    });
    
    const dataStr = JSON.stringify(cleanData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'menu-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Función para importar los datos del menú
function importMenuData(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            // Asegurarse de que no haya referencias a imágenes en los datos importados
            const cleanData = {};
            Object.keys(data).forEach(section => {
                cleanData[section] = data[section].map(item => {
                    // Crear un nuevo objeto sin la propiedad 'image'
                    const { image, ...cleanItem } = item;
                    return cleanItem;
                });
            });
            
            menuData = cleanData;
            localStorage.setItem(MENU_DATA_KEY, JSON.stringify(menuData));
            renderMenuData();
            alert('Datos importados correctamente');
        } catch (error) {
            alert('Error al importar los datos: ' + error.message);
        }
    };
    reader.readAsText(file);
    
    // Limpiar el input de archivo
    fileInput.value = '';
}

// Función para mostrar el modal de sugerencias
function showSugerenciasModal() {
    // Cargar las sugerencias en el modal
    if (menuData.sugerencias && menuData.sugerencias.length > 0) {
        modalSugerenciasItems.innerHTML = '';
        
        menuData.sugerencias.forEach(item => {
            const menuItem = createMenuItem(item);
            modalSugerenciasItems.appendChild(menuItem);
        });
        
        // Mostrar el modal
        sugerenciasModal.classList.add('active');
    }
}

// Función para cerrar el modal de sugerencias
function closeSugerenciasModal() {
    sugerenciasModal.classList.remove('active');
}