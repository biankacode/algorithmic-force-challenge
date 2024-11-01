/* 7. El canto de los Ewoks (Contador de vocales)*/

function contadorDeVocales(vocales) {
    for (let i = 0; i < vocales.length; i++){
        if ("aeiou".includes(vocales[i]) ){
            return true 
        }
    }
    return false

}
console.log(contadorDeVocales("GATO"))