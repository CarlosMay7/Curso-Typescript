function mostrar(a: number, b:number, callback : (a:number) => void):void {
    let resultado = a + b;
    callback(resultado);
}

mostrar(3, 5, (x) => console.log(x))