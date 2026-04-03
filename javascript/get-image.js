import { error } from "node:console";
import { cloudinary } from "../javascript/index.js";
import strict from "node:assert/strict";
import fs from 'fs';
import { url } from "node:inspector";
/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////

async function generateJSON() {

    try{
        const result = await cloudinary.api.resources_by_tag("img1", {
            context: true,
        });

        // Solo lo que necesita el HTML

        const galleyData = result.resources.map(img => ({
            url: img.secure_url,
            name: img.display_name,
            alt: img.context?.custom?.alt || img.display_name
        }));

        // Guardar el array

        fs.writeFileSync('./resourcesJSON/fotos.json', JSON.stringify(galleyData, null, 2));

        console.log("Archivo JSON generado con exito");

    }catch(error){
        console.error("Error al generar el Json:", error);
    }
    
}

cloudinary.api.tags()
    .then(result => {
        // 'result.tags' es un array de strings: ["img1", "proyecto1", "paisa"]
        const misTags = result.tags;
        
        console.log("Etiquetas encontradas en la cuenta:", misTags);
        
        // Aquí podrías guardarlas en un JSON si quieres que tu nav se cree solo
    })
    .catch(err => console.error("Error al obtener tags:", err));

generateJSON();

