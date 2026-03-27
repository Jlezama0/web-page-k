

class useNav extends HTMLElement {
    connectedCallback(){

        this.innerHTML = `
            <nav>
                <a href="index.html">INDEX</a>
                <a href="photo.html">PHOTOGRAPHY</a>
                <a href="info.htm">INFO</a>
            </nav>
        `;
    }
}

customElements.define('use-nav', useNav);

class linkFonts extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet">
        `;
    }
}

customElements.define('link-fonts', linkFonts);

function autPhotos(infoPhotos){
    for(const i of infoPhotos){
        console.log(i);
    }
}
