/* 10. La temperatura de Tatooine (Conversión de grados Celsius a Fahrenheit)
Contexto temático:
En Tatooine, las temperaturas son extremas. Anakin necesita convertir las temperaturas de
 grados Celsius a Fahrenheit para saber si es seguro salir al desierto.

Objetivo:
Crea una función que convierta una temperatura de grados Celsius a Fahrenheit.

Instrucciones:

La función debe recibir una temperatura en grados Celsius y devolver la temperatura en grados 
Fahrenheit.
La fórmula de conversión es: F = (C * 9/5) + 32.
Pista:
Aplica la fórmula correctamente dentro de la función para hacer la conversión. */
function convercion (celsius){
    let resultado = (celsius * 9/5) + 32
    return resultado
}

console.log(convercion(32));
