// perfil.js - Script para la página de perfil

document.addEventListener("DOMContentLoaded", () => {
    console.log("Inicializando página de perfil...");
    
    // Verificar si hay un usuario autenticado
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
        console.log("Usuario no autenticado, redirigiendo...");
        window.location.href = "crear_cuenta.html";
        return;
    }
    
    // Cargar datos del usuario en la página
    cargarDatosUsuario(usuario);
    // Cargar pedidos del usuario
    cargarPedidosUsuario(usuario);
    // Cargar favoritos del usuario
    cargarFavoritosUsuario();
    
    // Gestionar navegación entre secciones
    inicializarNavegacion();
    
    // Inicializar botones de acción
    inicializarBotones();

    // Inicializar modales
    inicializarModales(usuario);
});

// Función para cargar los datos del usuario en la interfaz
function cargarDatosUsuario(usuario) {
    // Información básica
    document.getElementById("nombre-usuario").textContent = usuario.nombre || "No disponible";
    document.getElementById("apellido-usuario").textContent = usuario.apellido || "No disponible";
    document.getElementById("email-usuario").textContent = usuario.email || "No disponible";
    
    // Fecha de registro (formatear la fecha de loginTime)
    if (usuario.loginTime) {
        const fechaRegistro = new Date(usuario.loginTime);
        document.getElementById("fecha-registro").textContent = fechaRegistro.toLocaleDateString();
    } else {
        document.getElementById("fecha-registro").textContent = "Fecha no disponible";
    }
    
    // Imagen de perfil (si existiera)
    const profileImage = document.getElementById("profile-image");
    if (usuario.profileImage) {
        profileImage.src = usuario.profileImage;
    }
    
    console.log("Datos de usuario cargados correctamente");
}

// Función para cargar los favoritos del usuario
function cargarFavoritosUsuario() {
    const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritosContainer = document.getElementById("favoritos-container");
    const noFavoritos = document.getElementById("no-favoritos");
    
    if (favoritos.length === 0) {
        favoritosContainer.style.display = "none";
        noFavoritos.style.display = "block";
        return;
    }
    
    favoritosContainer.style.display = "grid";
    noFavoritos.style.display = "none";
    
    favoritosContainer.innerHTML = "";
    
    favoritos.forEach(favorito => {
        const favoritoItem = document.createElement("div");
        favoritoItem.className = "favorito-item";
        
        favoritoItem.innerHTML = `
            <img src="${favorito.image}" alt="${favorito.name}" onerror="this.src='img/profile.jpg'">
            <h3>${favorito.name}</h3>
            <div class="precio">€${favorito.price}</div>
            <div class="categoria">${favorito.category}</div>
            <button class="btn-remover" onclick="removerFavorito('${favorito.name}')">Remover</button>
        `;
        
        favoritosContainer.appendChild(favoritoItem);
    });
    
    console.log("Favoritos cargados:", favoritos.length);
}

// Función para remover un favorito
function removerFavorito(name) {
    let favoritos = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritos = favoritos.filter(item => item.name !== name);
    localStorage.setItem("favorites", JSON.stringify(favoritos));
    
    // Recargar la lista de favoritos
    cargarFavoritosUsuario();
    
    alert("Producto removido de favoritos");
}

// Función para gestionar la navegación entre secciones del perfil
function inicializarNavegacion() {
    const menuItems = document.querySelectorAll(".perfil-menu-item");
    const sections = document.querySelectorAll(".perfil-section");
    
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Obtener el ID de la sección a mostrar
            const targetId = item.getAttribute("href").substring(1);
            
            // Desactivar todos los elementos de menú y secciones
            menuItems.forEach(mi => mi.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));
            
            // Activar el elemento de menú seleccionado y su sección correspondiente
            item.classList.add("active");
            document.getElementById(targetId).classList.add("active");
        });
    });
    
    console.log("Navegación del perfil inicializada");
}

// Función para inicializar los botones de acción
function inicializarBotones() {
    // Botón de editar información
    const btnEditar = document.querySelector(".btn-editar");
    if (btnEditar) {
        btnEditar.addEventListener("click", () => {
            abrirModal("modal-editar");
        });
    }
    
    // Botón de cambiar contraseña
    const btnCambiarPass = document.querySelector(".btn-cambiar-pass");
    if (btnCambiarPass) {
        btnCambiarPass.addEventListener("click", () => {
            abrirModal("modal-pass");
        });
    }
    
    // Botón de eliminar cuenta
    const btnEliminar = document.querySelector(".btn-eliminar");
    if (btnEliminar) {
        btnEliminar.addEventListener("click", () => {
            const confirmar = confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.");
            if (confirmar) {
                // Eliminar datos del usuario
                localStorage.removeItem("usuario");
                alert("Tu cuenta ha sido eliminada correctamente.");
                window.location.href = "index.html";
            }
        });
    }
     // Funcionalidad de cierre de sesión (mantener para la página de perfil)
    const logoutBtn = document.querySelector('.btn-cerrar-sesion');

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("usuario");
            alert("Has cerrado sesión correctamente.");
            window.location.href = "index.html";
        });
    }
    
    // Toggles de configuración
    const toggles = document.querySelectorAll(".switch input");
    toggles.forEach(toggle => {
        toggle.addEventListener("change", () => {
            const setting = toggle.closest(".toggle-row").querySelector("span").textContent;
            const state = toggle.checked ? "activada" : "desactivada";
            console.log(`Configuración "${setting}" ${state}`);
            // Aquí se podría guardar la configuración en localStorage
        });
    });
    
    console.log("Botones de acción inicializados");
}

// ========== Modales ==========
function inicializarModales(usuario) {
    // Prefill de datos en editar
    const formEditar = document.getElementById("form-editar");
    const modalEditar = document.getElementById("modal-editar");
    const formPass = document.getElementById("form-pass");
    const modalPass = document.getElementById("modal-pass");

    if (formEditar && modalEditar) {
        formEditar.nombre.value = usuario.nombre || "";
        formEditar.apellido.value = usuario.apellido || "";
        formEditar.email.value = usuario.email || "";

        formEditar.addEventListener("submit", (e) => {
            e.preventDefault();
            const nuevoUsuario = {
                ...usuario,
                nombre: formEditar.nombre.value.trim(),
                apellido: formEditar.apellido.value.trim(),
                email: formEditar.email.value.trim()
            };
            localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
            cargarDatosUsuario(nuevoUsuario);
            cerrarModal(modalEditar);
            alert("Información actualizada");
        });
    }

    if (formPass && modalPass) {
        // Si no hay contraseña previa, ocultar campo "actual"
        const rowActual = document.getElementById("row-pass-actual");
        const tienePass = Boolean(usuario && usuario.password);
        if (!tienePass && rowActual) {
            rowActual.style.display = "none";
        }

        formPass.addEventListener("submit", (e) => {
            e.preventDefault();
            const actual = formPass.actual?.value || "";
            const nueva = formPass.nueva.value;
            const confirmar = formPass.confirmar.value;

            if (nueva.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres.");
                return;
            }
            if (nueva !== confirmar) {
                alert("Las contraseñas no coinciden.");
                return;
            }
            if (tienePass && usuario.password !== actual) {
                alert("La contraseña actual no es correcta.");
                return;
            }

            const actualizado = { ...usuario, password: nueva };
            localStorage.setItem("usuario", JSON.stringify(actualizado));
            cerrarModal(modalPass);
            alert("Contraseña actualizada");
        });
    }

    // Eventos de cierre por overlay o botones con data-close
    document.querySelectorAll('[data-close]').forEach((el) => {
        el.addEventListener('click', () => {
            const modal = el.closest('.perfil-modal') || el.parentElement?.closest?.('.perfil-modal');
            if (modal) cerrarModal(modal);
        });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.perfil-modal[aria-hidden="false"]').forEach((m) => cerrarModal(m));
        }
    });
}

function abrirModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
}

function cerrarModal(modal) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
}

// ========== Pedidos ==========
function cargarPedidosUsuario(usuario) {
    const pedidosSection = document.getElementById('pedidos');
    if (!pedidosSection) return;

    const contenedor = pedidosSection.querySelector('.info-container');
    if (!contenedor) return;

    const pedidos = (JSON.parse(localStorage.getItem('pedidos')) || [])
        .filter(p => !usuario?.email || p.usuarioEmail === usuario.email)
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // Limpiar contenido dinámico previo (dejamos botones si existen)
    contenedor.innerHTML = '';

    if (pedidos.length === 0) {
        const noItems = document.createElement('div');
        noItems.className = 'no-items';
        noItems.innerHTML = '<label>No has realizado ningún pedido todavía.</label>';
        contenedor.appendChild(noItems);
        const acciones = document.createElement('div');
        acciones.className = 'botones-accion';
        acciones.innerHTML = '<button class="btn-ver-catalogo" onclick="window.location.href=\'animales.html\'">Explorar Productos</button>';
        contenedor.appendChild(acciones);
        return;
    }

    pedidos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'info-card';
        const fecha = new Date(p.fecha).toLocaleString();
        const total = p.totals?.total || 0;
        const itemsHtml = (p.items || []).map(i => {
            const unidades = i.unidades || 1;
            return `<li>${i.nombre} x${unidades} — €${(i.precio || 0).toFixed(2)} c/u</li>`;
        }).join('');

        card.innerHTML = `
            <div class="info-row"><div class="info-label">Pedido:</div><div class="info-value">${p.id}</div></div>
            <div class="info-row"><div class="info-label">Fecha:</div><div class="info-value">${fecha}</div></div>
            <div class="info-row"><div class="info-label">Total:</div><div class="info-value">€${total.toFixed(2)}</div></div>
            <div class="info-row" style="border-bottom:none;">
                <div class="info-label">Artículos:</div>
                <div class="info-value"><ul style="padding-left:18px; margin:0;">${itemsHtml}</ul></div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}