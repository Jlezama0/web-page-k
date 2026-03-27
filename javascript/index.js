import 'dotenv/config';

// Require the cloudinary library
import {v2 as cloudinary} from 'cloudinary'

//Return "https" URLs by setting secure: true
cloudinary.config({
    secure: true
});
export { cloudinary };
// Log the configuration
//console.log("Variable de entorno:", process.env.CLOUDINARY_URL);