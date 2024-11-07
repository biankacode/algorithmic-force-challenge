/* 9. El entrenamiento Jedi (Generar tabla de multiplicar)
Contexto temático:
Los aprendices Jedi en el Templo deben memorizar tablas de multiplicar para mejorar su concentración 
y habilidades matemáticas. Ayuda a Anakin a generar la tabla de multiplicar de un número.

Objetivo:
Genera la tabla de multiplicar de un número dado.

Instrucciones:

La función debe recibir un número y generar su tabla de multiplicar hasta el 10.
Muestra los resultados en un formato claro.
Pista:
Utiliza un bucle para multiplicar el número dado por los números del 1 al 10. */

function multiplicar (num){
    for(let i = 0; i <= 10; i++){
        console.log(num,"x", i, "=", i * num);
        
    }
    return num
}
multiplicar(4)