

const cajaTexto= document.querySelector(".caja-texto");

const cajaMensaje= document.querySelector(".caja-mensaje");

function copiar(){
    var mensajeaCopiar = cajaMensaje.value;
    navigator.clipboard.writeText(mensajeaCopiar);
    cajaMensaje.value=""  
    cajaTexto.value=""
}




function botonEncriptar(){
    const textoEncriptado = encriptar(cajaTexto.value)
    cajaMensaje.value = textoEncriptado
    cajaMensaje.style.backgroundImage = "none"
    cajaTexto.style.backgroundImage = "none"

}


function encriptar(stringEncriptada) {

    let codigoFuente= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < codigoFuente.length; i++){
    
        if(stringEncriptada.includes(codigoFuente[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(codigoFuente[i][0], codigoFuente[i][1])

        }
    
    }   
    return stringEncriptada
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(cajaTexto.value)
    cajaMensaje.value = textoDesencriptado
    cajaMensaje.style.backgroundImage = "none"
    cajaTexto.style.backgroundImage = "none"
    
}


function desencriptar(stringDesencriptada) {

    let codigoFuente= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < codigoFuente.length; i++){
    
        if(stringDesencriptada.includes(codigoFuente[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(codigoFuente[i][1], codigoFuente[i][0])

        }
    
    }   
    return stringDesencriptada
}

