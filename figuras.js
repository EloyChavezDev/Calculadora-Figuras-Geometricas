//Codigo del Cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro de mi cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado*ladoCuadrado;
console.log("El area de mi cuadrado es " + areaCuadrada +"cm^2");
console.groupEnd ();

//Codigo del Triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo
    + "cm"
);

const alturaTriangulo =5.5;
console.log ("la altura del triangulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro de mi triangulo es " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area de mi triangulo es " + areaTriangulo +"cm^2");

console.groupEnd();

//Codigo Circulo
console.group("Circulos")
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

console.log("El radio del Circulo es " + radioCirculo + "cm");
console.log("El diametro del Circulo es " + diametroCirculo + "cm");
console.log("PI es " + PI + "cm");

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro de mi circulo es " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) *PI;
console.log("El area de mi circulo es " + areaCirculo + "cm^2");

console.groupEnd();