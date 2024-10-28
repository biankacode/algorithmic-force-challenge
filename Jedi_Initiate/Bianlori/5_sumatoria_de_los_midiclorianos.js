/* 5. Sumatoria de los midiclorianos (Sumatoria de un rango)
Contexto temático:
Qui-Gon Jinn está midiendo el nivel de midiclorianos en la sangre de Anakin.
Para saber si puede ser el Elegido, Qui-Gon debe calcular la sumatoria de los 
midiclorianos desde 1 hasta un número dado.

Objetivo:
Calcula la sumatoria de todos los números entre 1 y un número dado.

Instrucciones:

La función debe recibir un número entero n y devolver la suma de los números del 1 al n.
Usa un bucle para sumar todos los números.
Pista:
La suma de un rango se puede obtener agregando cada número secuencialmente.
 */


function sumando(numUsuario) {
    let suma = 0
        for (let i = 1; i <= numUsuario; i++ ){
        suma = suma + i; /* toma el valor actual de suma y agrégale el valor de i */
        
        } 
        return suma
}



console.log("la suma de los primeros 100 numeros es : " + sumando(6) );
