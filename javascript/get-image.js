import { error } from "node:console";
import { cloudinary } from "../javascript/index.js";
import strict from "node:assert/strict";
/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////

const mapInfo = new Map()

cloudinary.api
.resources_by_asset_folder('prueba', { 
    metadata: true, // Trae campos personalizados del fotógrafo
    context: true,  // Trae metadatos adicionales (como descripciones o captions)
})
.then(result => {
result.resources.forEach(img => {

    if (!mapInfo.has(img.public_id)){
    mapInfo.set(img.public_id, new Map());
    }
    const mapImg = mapInfo.get(img.public_id);

    mapImg.set('url', img.url);
    mapImg.set('contexto', img.context || "Sin descripción");

    console.log(`Guardado en Map: ${img.public_id}`);
});
console.log("Estructura completa:", mapInfo);
})
.catch(err => console.error(err));
