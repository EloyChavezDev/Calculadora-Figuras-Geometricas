//Codigo del Cuadrado
function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrada (lado){
    return lado*lado
}

//Codigo del Triangulo
function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura)/2;
}

//Codigo Circulo
const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI
}

//Codigo Traingulo Isoseles
function alturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 != lado2) {
        alert ("Los lados a y b no son iguales, No es un triangulo Isoseles");
    } else {
        alturaIsoseles = Math.sqrt(lado1**2 - (base**2/ 4));
        alert(alturaIsoseles);
    }
} 

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada (value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("Inputbase");
    const value = Number(input.value);
    const value2 = Number (input2.value);
    const value3 = Number (input3.value); 

    const perimetrot = perimetroTriangulo(value,value2,value3);
    alert(perimetrot);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("Inputbase");
    const input4 = document.getElementById("Inputaltura");
    const value = Number (input3.value);
    const value1 = Number (input4.value);

    const areat = areaTriangulo(value,value1);
    alert(areat);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroC = perimetroCirculo (value);
    alert(perimetroC);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const areaC = areaCirculo (value);
    alert(areaC);
}

function calcularAlturaTriangulo(){
    const input = document.getElementById("IsoLado1");
    const input2 = document.getElementById("IsoLado2");
    const input3 = document.getElementById("Isobase");
    const value = Number(input.value);
    const value2 = Number (input2.value);
    const value3 = Number (input3.value); 

    const alturaIso = alturaTrianguloIsosceles (value,value2,value3);
   
}