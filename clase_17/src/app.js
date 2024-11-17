const fs = require('fs');
const path = require('path');
const os = require('os');

const usuario = os.userInfo().username;
//console.log(usuario)

let rutaDocumentos;

if (os.platform() === 'win32') {
    rutaDocumentos = path.join('C:', 'Users', usuario, 'Documents');
} else {
    rutaDocumentos = path.join('home', usuario, 'Documents');
}

const contenido = 'Hola Alumnos De coder';

const archivoPath = path.join(rutaDocumentos, 'miArchivoCoder.txt');

fs.writeFile(archivoPath, contenido, (err) => {
    if (err) {
        console.log('Error al crear el archivo');
    } else {
        console.log(
            'Archivo guardado exitosamente en Documentos :',
            archivoPath,
        );
    }
});

/* ### Explicación:

1. **Obtener el nombre de usuario**: Usamos `os.userInfo().username` 
para obtener el nombre del usuario que está ejecutando el programa. 
Esto nos ayuda a construir la ruta correcta al directorio **Documentos**.
    
2. **Construir la ruta del directorio Documentos**: Dependiendo del sistema 
operativo (Windows o UNIX), usamos el módulo `path` para construir la ruta 
completa al directorio **Documentos** del usuario.
    
3. **Escribir el archivo**: Usamos el método `fs.writeFile()` para crear un 
archivo de texto (`miArchivo.txt`) en la carpeta **Documentos**. Si el 
archivo no existe, lo crea. Si ya existe, lo sobrescribe.
    
4. **Contenido del archivo**: La variable `contenido` es el texto que queremos 
escribir en el archivo. Puedes cambiar el contenido según lo que necesites. */
