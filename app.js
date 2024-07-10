function esconderImagen(){
    const elementos = document.getElementsByClassName("div__salida__texto__imagen");
    
    for (let i = 0; i < elementos.length; i++) {
        let div = elementos[i];
        
        // Eliminar la imagen dentro del div
        const imagen = div.querySelector("img");
        const h1 = div.querySelector("h1");
        if (imagen) {
            imagen.remove();
            h1.remove();
        }
        // Cambiar el contenido del div 
     } 
    }

function reemplazar(){
    let text_entrada=(document.getElementById("textarea").value).toLowerCase();
    let resultado = '';
    esconderImagen();

    let llaves={
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat",
    }
    for (let i = 0; i < text_entrada.length; i++) {
        let letra = text_entrada[i];
        if (llaves.hasOwnProperty(letra)) {
            resultado += llaves[letra];
        } else {
            // Si no, dejar la letra como está
            resultado += letra;
        }
        var text = document.getElementById("parrafo");
        text.innerHTML=resultado;

        }
        accionBotonCopiar();

}

function reemplazarValores(){
    let text_entrada=(document.getElementById("textarea").value).toLowerCase();
    let resultado = '';
    esconderImagen();

    let llaves={
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u",
    }
    let i = 0;

    // Recorrer cada posición de la entrada
    while (i < text_entrada.length) {
        let reemplazado = false;

        // Recorrer cada clave en el objeto de llaves
        for (let key in llaves) {
            // Si la subsecuencia actual coincide con una clave del objeto
            if (text_entrada.substring(i, i + key.length) === key) {
                // Añadir el valor correspondiente al resultado
                resultado += llaves[key];
                // Saltar adelante en la entrada por la longitud de la clave
                i += key.length;
                reemplazado = true;
                break;
            }
        }
        if (!reemplazado) {
            resultado += text_entrada[i];
            i++;
        }
    }
     let text = document.getElementById("parrafo");
     text.innerHTML=resultado;
      

        // Si no se encontró una coincidencia, añadir el carácter actual al resultado
     
        accionBotonCopiar();
}

function encriptar(){
    let text_entrada=document.getElementById("textarea").value;
        if(text_entrada){
            reemplazar();    
        }
        else{
            alert("Ingrese un texto")
        }
        }
function accionBotonCopiar(){
    let botonCopiar=document.getElementById("botonCopiar");
    botonCopiar.style.display='block';
}

function desencriptar(){
    let text_entrada=document.getElementById("textarea").value;
     if(text_entrada){
            reemplazarValores();    
        }
     else{
            alert("Ingrese un texto")
        }
 }

 function copiarTexto() {
    let parrafo = document.getElementById('parrafo');
    
    // Crea un rango de selección
    var range = document.createRange();
    range.selectNode(parrafo);

    // Selecciona el contenido del párrafo
    window.getSelection().removeAllRanges(); // Limpiar selecciones previas
    window.getSelection().addRange(range);

    // Copia el texto seleccionado
    document.execCommand('copy');

    // Limpiar la selección
    window.getSelection().removeAllRanges();

    // Alerta o mensaje opcional
    alert('Texto copiado al portapapeles!');
}