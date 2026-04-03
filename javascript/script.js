const galleryContainers= document.querySelectorAll('.group');

document.querySelectorAll('.row-click').forEach(fila => {
    fila.addEventListener('click', () => {
        window.location.href = fila.dataset.href;
    });
});

async function loadGallery() {
    try {
        const response = await fetch('../resourcesJSON/fotos.json');
        const fotos = await response.json();

        // Generamos el HTML con estructura de bloque (Figure)
        const htmlCompleto = fotos.map(foto => `
            <figure class="item-galeria">
                <a href="../${foto.name}.html">
                    <img class="imgFront" src="${foto.url}" alt="${foto.alt}">
                </a>
                <figcaption class="pie-foto">${foto.alt}</figcaption>
            </figure>
        `).join('');

        galleryContainers.forEach(container => {
            container.innerHTML = htmlCompleto;
        });
    } catch (error) {
        console.error("Error cargando la galería:", error);
    }
}
loadGallery();