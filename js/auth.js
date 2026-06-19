// auth.js - Script unificado para autenticación y gestión de sesión

document.addEventListener("DOMContentLoaded", () => {
    console.log("Inicializando sistema de autenticación...");
    
    // Referencias a elementos DOM
    const userMenuBtn = document.getElementById('userMenuBtn');
    const logoutBtn = document.getElementById("logout-btn");
    const dropdown = document.getElementById("dropdown");
    
    // Verificar si hay un usuario en localStorage
    const checkAuthStatus = () => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        console.log("Estado de autenticación:", usuario ? "Autenticado" : "No autenticado");
        
        // Actualizar visibilidad de elementos según estado de autenticación
        const authElements = document.querySelectorAll('.auth-only');
        const guestElements = document.querySelectorAll('.guest-only');
        
        if (usuario) {
            // Usuario autenticado
            authElements.forEach(el => el.style.display = 'block');
            guestElements.forEach(el => el.style.display = 'none');
        } else {
            // Usuario no autenticado
            authElements.forEach(el => el.style.display = 'none');
            guestElements.forEach(el => el.style.display = 'block');
        }
        
        return usuario;
    };
    
    // Ejecutar verificación al cargar la página
    const currentUser = checkAuthStatus();
    
    // Formulario de inicio de sesión (en la página Crear_Cuenta.html)
    const loginForm = document.querySelector("form");
    if (loginForm && window.location.href.includes("crear_cuenta.html")) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Obtener los campos del formulario (ajustar según tu estructura)
            const nombre = document.querySelector('input[name="nombre"]')?.value;
            const apellido = document.querySelector('input[name="apellido"]')?.value;
            const email = document.querySelector('input[name="email"]')?.value;
            
            if (nombre && apellido && email) {
                // Guardar datos en localStorage (persistencia de sesión)
                localStorage.setItem("usuario", JSON.stringify({ 
                    nombre, 
                    apellido, 
                    email,
                    loginTime: new Date().getTime()
                }));
                
                alert("Cuenta creada correctamente");
                window.location.href = "perfil.html";
            } else {
                alert("Por favor, completa todos los campos requeridos.");
            }
        });
    }
    
    // Cambiar comportamiento del botón de usuario para redirigir directamente
    if (userMenuBtn) {
        userMenuBtn.addEventListener('click', function() {
            // Si el usuario está autenticado, ir a la página de perfil
            // Si no está autenticado, ir a la página de creación de cuenta
            if (currentUser) {
                window.location.href = 'perfil.html';
            } else {
                window.location.href = 'crear_cuenta.html';
            }
        });
        
        // Ocultar el menú desplegable ya que no se usará
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }
    
    // Funcionalidad de cierre de sesión (mantener para la página de perfil)
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("usuario");
            alert("Has cerrado sesión correctamente.");
            window.location.href = "index.html";
        });
    }
    
    // Opcional: Expiración de sesión después de cierto tiempo
    if (currentUser && currentUser.loginTime) {
        const sessionDuration = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
        const currentTime = new Date().getTime();
        
        if (currentTime - currentUser.loginTime > sessionDuration) {
            console.log("Sesión expirada, cerrando sesión...");
            localStorage.removeItem("usuario");
            checkAuthStatus();
        }
    }
    
    console.log("Sistema de autenticación inicializado correctamente");
});