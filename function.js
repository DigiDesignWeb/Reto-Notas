//**Obtener el promedio de notas de un alumno considerando que la suma de notas debe ser el retorno de una función
//y el promedio el retorno de otra función. Las notas son: 6,8,9,2,5,10. //

 let notas = [6,8,9,2,5,10];

 function suma(notas){
    
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        //for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        suma += notas[i];
    }

    return suma;
 }

 const prom = suma(notas);
 let cant = notas.length;
 function promedio(prom,cant){

    let promedio = prom / cant;
    return promedio;

 }
 
 console.log("La suma de las notas es:", suma(notas));
 console.log("El promedio de las notas es:", promedio(prom,cant));
 