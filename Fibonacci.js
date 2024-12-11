//Mostrar en consola la secuencia de Fibonacci: 
//Entre los números 0 y 1000.
//Números pares entre 0 y 1000.
//Números impares entre 0 y 1000.


const fibo = [0,1];
const limit = 1000;
const pares = []
const impares = []


//let max = fibo.length - 1;
//console.log(max, limit)

for (let i = 2; i <= limit; i++) {
    //const element = array[index];

    let numF = fibo[i - 1] + fibo[i - 2];
    
    if (numF >= limit) {

        break
    }
    fibo[i] = numF

    if(fibo[i] % 2 === 0){
        pares.push(fibo[i])
    }
    else{
        impares.push(fibo[i])
    }

}

//console.log(fibo[fibo.length - 2])
//console.log(fibo.length)
console.log("Secuencia de Fibonacci ",fibo)
console.log("Números pares ",pares)
console.log("Números impares ",impares)
