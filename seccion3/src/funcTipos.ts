function suma(valor1: number, valor2:number):number {
    return valor1 + valor2;
}

let sumar2 : (a: number, b:number) => number; //Define la estructura
sumar2 = suma;

function imprimir():void {
    console.log(suma(2, 3));
}

console.log(sumar2(4,2));