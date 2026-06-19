document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de menú y la navegación
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    
    // Verificar que ambos elementos existan antes de añadir event listeners
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            // Toggle la clase 'active' en la navegación
            nav.classList.toggle('active');
            console.log('Menú toggle activado');
        });
    } else {
        // Intentar modo de diagnóstico alternativo si los selectores originales fallan
        console.log('Elementos no encontrados con los selectores originales');
        
        // Intenta con selectores alternativos
        const alternativeToggle = document.querySelector('.menu-toggle');
        const alternativeNav = document.querySelector('header nav');
        
        if (alternativeToggle && alternativeNav) {
            console.log('Elementos encontrados con selectores alternativos');
            alternativeToggle.addEventListener('click', function() {
                alternativeNav.classList.toggle('active');
                console.log('Menú toggle activado (método alternativo)');
            });
        } else {
            console.error('No se pudo encontrar el botón de menú o la navegación');
        }
    }
    
    // Cerrar menú al hacer clic en un enlace del menú
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Cerrar menú al hacer resize a pantalla grande
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const activeNav = document.querySelector('nav.active');
            if (activeNav) {
                activeNav.classList.remove('active');
            }
        }
    });
    
    // Código para las categorías del sidebar (si aplica)
    const sidebarHeaders = document.querySelectorAll('.sidebar-category h2');
    sidebarHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const contentId = this.id.replace('-header', '-content');
            const content = document.getElementById(contentId);
            if (content) {
                content.classList.toggle('hidden');
                this.classList.toggle('collapsed');
            }
        });
    });
});