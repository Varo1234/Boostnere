window.addEventListener('scroll', function() {
    const slideBottomElements = document.querySelectorAll('.animate-slide-bottom');
    const rotateIn2CwElements = document.querySelectorAll('.animate-rotate-in-2-fwd-cw');
    const swingInTopFwdElements = document.querySelectorAll('.animate-swing-in-top-fwd');
    const trackingInExpandElements = document.querySelectorAll('.animate-tracking-in-expand');
    const slideInTopElements = document.querySelectorAll('.animate-slide-in-top');

    slideBottomElements.forEach(function(elemento) {
        const rect = elemento.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // El elemento está en el viewport
            elemento.classList.add('slide-bottom');
        } else {
            // Opcional: Remueve la clase si quieres que la animación se active cada vez que entre al viewport.
            elemento.classList.remove('slide-bottom');
        }
    });
    rotateIn2CwElements.forEach(function(elemento) {
        const rect = elemento.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // El elemento está en el viewport
            elemento.classList.add('rotate-in-2-fwd-cw');
        } else {
            // Opcional: Remueve la clase si quieres que la animación se active cada vez que entre al viewport.
            elemento.classList.remove('rotate-in-2-fwd-cw');
        }
    });
    swingInTopFwdElements.forEach(function(elemento) {
        const rect = elemento.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // El elemento está en el viewport
            elemento.classList.add('swing-in-top-fwd');
        } else {
            // Opcional: Remueve la clase si quieres que la animación se active cada vez que entre al viewport.
            elemento.classList.remove('swing-in-top-fwd');
        }
    });
    trackingInExpandElements.forEach(function(elemento) {
        const rect = elemento.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // El elemento está en el viewport
            elemento.classList.add('tracking-in-expand');
        } else {
            // Opcional: Remueve la clase si quieres que la animación se active cada vez que entre al viewport.
            elemento.classList.remove('tracking-in-expand');
        }
    });
    slideInTopElements.forEach(function(elemento) {
        const rect = elemento.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // El elemento está en el viewport
            elemento.classList.add('slide-in-top');
        } else {
            // Opcional: Remueve la clase si quieres que la animación se active cada vez que entre al viewport.
            elemento.classList.remove('slide-in-top');
        }
    });
});