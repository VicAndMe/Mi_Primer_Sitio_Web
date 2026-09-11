function mostrarSeccion(idSeccion) {
            // 1. Ocultar todas las secciones quitándoles la clase 'active-section'
            let secciones = document.querySelectorAll('.content-section');
            secciones.forEach(function(seccion) {
                seccion.classList.remove('active-section');
            });

            // 2. Mostrar solo la sección que coincida con el ID recibido
            let seccionActiva = document.getElementById(idSeccion);
            if (seccionActiva) {
                seccionActiva.classList.add('active-section');
            }
        }