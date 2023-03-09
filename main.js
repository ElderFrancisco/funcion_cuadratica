let numeroA = Number(prompt("numero de A"));
let exponenteA = Number(prompt("exponente de A"));
let numeroB = Number(prompt("numero de B"));
let numeroC = Number(prompt("numero de C"));

function verticeX(a,b) {
    return(
        -b/(2*a)
    )
}
resultadoVX = verticeX(numeroA,numeroB);
alert("El vertice en X es: " + resultadoVX);

function verticeY(a,e,b,c,vx) {
    let paA = a * (Math.pow(vx,e));
    let paB = b * vx;
    let paC = c;
    let resultado = paA + paB + paC;
    return(resultado);
}
resultadoVY = verticeY(numeroA,exponenteA,numeroB,numeroC,resultadoVX);
alert("El vertice en Y es: " + resultadoVY);

function raiz(a,b,c) {
    const raices = [];
    let raiz1 = (-b + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
    let raiz2 = (-b - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a);
    raices.push(raiz1);
    raices.push(raiz2);
    return(raices);
}
resultadoR = raiz(numeroA,numeroB,numeroC);
alert("Las raices son: " + resultadoR +"( la coma es separador de raices)");

function ordenadaAlOrigen(a,b,c) {
    let fx1 = a * (Math.pow(0,2));
    let fx2 = b * 0;
    let fx3 = c;
    let resultado = fx1 + fx2 + fx3;
    return(resultado);
}
resultadoOA = ordenadaAlOrigen(numeroA,numeroB,numeroC);
alert("La ordenada al origen es: " + resultadoOA);
