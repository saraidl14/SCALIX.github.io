document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del carrusel
    const carruselWrapper = document.getElementById('carruselWrapper');
    const prevBtn = document.getElementById('carruselPrev');
    const nextBtn = document.getElementById('carruselNext');
    const indicatorsContainer = document.getElementById('carruselIndicators');
    
    // Verificar si los elementos existen
    if (!carruselWrapper || !prevBtn || !nextBtn || !indicatorsContainer) return;
    
    const items = carruselWrapper.querySelectorAll('.carrusel-item');
    const itemCount = items.length;
    let currentIndex = 0;
    
    // Crear indicadores
    for (let i = 0; i < itemCount; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('carrusel-indicator');
        if (i === 0) indicator.classList.add('active');
        
        indicator.addEventListener('click', () => {
            goToSlide(i);
        });
        
        indicatorsContainer.appendChild(indicator);
    }
    
    // Obtener todos los indicadores
    const indicators = indicatorsContainer.querySelectorAll('.carrusel-indicator');
    
    // Función para ir a una diapositiva específica
    function goToSlide(index) {
        if (index < 0) {
            index = itemCount - 1;
        } else if (index >= itemCount) {
            index = 0;
        }
        
        currentIndex = index;
        
        // Actualizar la posición del carrusel
        carruselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar indicadores activos
        indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Event listeners para los botones
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });
    
    // Autoplay opcional
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // Cambiar cada 5 segundos
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Iniciar autoplay
    startAutoplay();
    
    // Detener autoplay cuando el usuario interactúa con el carrusel
    carruselWrapper.addEventListener('mouseenter', stopAutoplay);
    prevBtn.addEventListener('mouseenter', stopAutoplay);
    nextBtn.addEventListener('mouseenter', stopAutoplay);
    indicatorsContainer.addEventListener('mouseenter', stopAutoplay);
    
    // Reanudar autoplay cuando el usuario deja de interactuar
    carruselWrapper.addEventListener('mouseleave', startAutoplay);
    prevBtn.addEventListener('mouseleave', startAutoplay);
    nextBtn.addEventListener('mouseleave', startAutoplay);
    indicatorsContainer.addEventListener('mouseleave', startAutoplay);
    
    // Para dispositivos táctiles
    let touchStartX = 0;
    let touchEndX = 0;
    
    carruselWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });
    
    carruselWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        
        // Detectar dirección del deslizamiento
        if (touchStartX - touchEndX > 50) {
            // Deslizamiento a la izquierda
            goToSlide(currentIndex + 1);
        } else if (touchEndX - touchStartX > 50) {
            // Deslizamiento a la derecha
            goToSlide(currentIndex - 1);
        }
        
        startAutoplay();
    }, { passive: true });
});