
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

const borrarAcentos = (str) => {      // Función para quitar las acentuaciones a las letras
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
    } 



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)

    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"

    

}



function encriptar(stringEncriptado) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = borrarAcentos(stringEncriptado).toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptado.includes(matrizCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEncriptado;
    
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    

    

}


function desencriptar(stringDesencriptado) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringDesencriptado.includes(matrizCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
        
    }
    return stringDesencriptado;
    
}


function copiar() {

    var copiaTxt = document.getElementById("resultado");

    copiaTxt.select();
    copiaTxt.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiaTxt.value);

}
