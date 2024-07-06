"use strict";
function mostrar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}
mostrar(3, 5, (x) => console.log(x));
//# sourceMappingURL=callbacks.js.map