const fs = require('fs').promises

const guardarArchivo = async (nombreArchivo, datos) => {
    try{
        await fs.writeFile(nombreArchivo, JSON.stringify(datos, null, 2));
        console.log(`Datos guardados en el archivo ${nombreArchivo}`)
    } catch (error) {
        console.log('Error al guardar los datos en el archivo:', error.message);
    }
};

module.exports = { guardarArchivo }
