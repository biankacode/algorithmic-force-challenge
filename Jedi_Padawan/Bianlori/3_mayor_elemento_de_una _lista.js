/* 3. El Mayor Caballero Jedi (Mayor elemento de una lista)
Contexto temático:
En una competición para determinar quién es el Jedi más fuerte, 
los Padawans deben encontrar al Jedi con el mayor nivel de poder. 
Debes hacerlo sin usar la Fuerza... ni la función max().

Objetivo:
Encuentra el elemento más grande de una lista de números.

Instrucciones:

Escribe una función que reciba una lista de números y devuelva el mayor 
número sin usar la función incorporada max().
Recorre la lista para comparar cada número.
Pista:
Mantén una variable que guarde el número más grande hasta el momento mientras recorres la lista. */

const numeros = [9,10,20]

function numeroMayor(numeros) {
    let mayor = numeros[0];/* iniciamos con la primera pocicion del array */
    for (let i = 1 ; i < numeros.length; i++){
      
        if (numeros [i] > mayor) {// Comparamos el elemento actual con el mayor
            mayor = numeros[i] // Si es mayor, actualizamos el valor de 'mayor'
        }
    }

    return mayor 
}
console.log(numeroMayor(numeros));
 