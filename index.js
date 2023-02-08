
//Inicialización de Variables
let numero1 = 0;
let numero2 = 0;
let refoperaciones = 0;
let textoabajo = document.getElementById("visorabajo");
let textoarriba = document.getElementById("visorarriba");

//Obtencion datos de numeros e inicialización de variables



const n0 = document.getElementById("n0");
num0 = Number(n0.innerHTML)
function print0(){
    if (numero1 > 0  && numero1 <= 9){numero1 = Number(numero1 + "0")
    textoabajo.textContent = numero1
    refpunto = 1; }
    else if (numero1 > 9 && numero2 > 0 && refoperaciones === 1)
    { numero2 = Number(numero2 + "0" )
    textoabajo.textContent = numero2; } }
n0.addEventListener("click", print0);

const n1 = document.getElementById("n1");
num1 = Number(n1.innerHTML)
function print1(){
    if (numero1 === 0 )
         {numero1 = Number(1);
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0)
     { numero1 = Number(numero1 + "1")
     textoabajo.textContent = numero1
      }
    else if (numero2 === 0 && refoperaciones === 1){
        refpunto = 1;
        numero2 = 1;
       textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2}
    else if(numero2 < 10 && refoperaciones === 1){numero2 = Number(numero2 + "1" )
       textoabajo.textContent = numero2;}}
n1.addEventListener("click", print1);

const n2 = document.getElementById("n2");
num2 = Number(n2.innerHTML)
function print2(){
    if (numero1 === 0 ){numero1 = Number(2);
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0)
    { numero1 = Number(numero1 + "2")
    textoabajo.textContent = numero1
    }
    else if (numero2 === 0 && refoperaciones === 1)
    {
        refpunto = 1;
        numero2 = 2;
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "2" )
    textoabajo.textContent = numero2;}}
n2.addEventListener("click", print2);

const n3 = document.getElementById("n3");
num3 = Number(n3.innerHTML)
function print3(){
    if (numero1 === 0 ){numero1 = Number(3);
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0)
    { numero1 = Number(numero1 + "3")
    textoabajo.textContent = numero1
    }
    else if (numero2 === 0 && refoperaciones === 1)
    {   refpunto = 1;
        numero2 = 3;
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "3" )
    textoabajo.textContent = numero2;}}
n3.addEventListener("click", print3);

const n4 = document.getElementById("n4");
num4 = Number(n4.innerHTML)
function print4(){
    if (numero1 === 0 )
    {numero1 = 4;
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0)
    { numero1 = Number(numero1 + "4")
    textoabajo.textContent = numero1}
    else if (numero2 === 0 && refoperaciones === 1)
    {numero2 = 4
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2;}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "4" )
    textoabajo.textContent = numero2;}}
n4.addEventListener("click", print4);

const n5 = document.getElementById("n5");
num5 = Number(n5.innerHTML)
function print5(){
    if (numero1 === 0 ){ numero1 = 5;
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0){ numero1 = Number(numero1 + "5")
    textoabajo.textContent = numero1}
    else if (numero2 === 0 && refoperaciones === 1)
    {   refpunto = 1;
         numero2 = 5
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2;}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "5" )
    textoabajo.textContent = numero2;}}
n5.addEventListener("click", print5);

const n6 = document.getElementById("n6");
num6 = Number(n6.innerHTML)
function print6(){
    if (numero1 === 0 ){ numero1 = 6;
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0)
    { numero1 = Number(numero1 + "6")
    textoabajo.textContent = numero1}
    else if (numero2 === 0 && refoperaciones === 1)
    {   refpunto = 1;
        numero2 = 6
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2;}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "6" )
    textoabajo.textContent = numero2;}}
n6.addEventListener("click", print6);

const n7 = document.getElementById("n7");
num7 = Number(n7.innerHTML)
function print7(){
    if (numero1 === 0 ){ numero1 = 7;
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0){ numero1 = Number(numero1 + "7")
    textoabajo.textContent = numero1}
    else if (numero2 === 0 && refoperaciones === 1)
    {   refpunto = 1;
        numero2 = 7
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2;}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "7" )
    textoabajo.textContent = numero2;}}
n7.addEventListener("click", print7);


const n8 = document.getElementById("n8");
num8 = Number(n8.innerHTML)
function print8(){
    if (numero1 === 0 ){numero1 = 8;
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0){ numero1 = Number(numero1 + "8")
    textoabajo.textContent = numero1}
    else if (numero2 === 0 && refoperaciones === 1)
    {   refpunto = 1;
        numero2 = 8
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2;}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "8" );
    textoabajo.textContent = numero2}}
n8.addEventListener("click", print8);


const n9 = document.getElementById("n9");
num9 = Number(n9.innerHTML)
function print9(){
    if (numero1 === 0 ){  numero1 = 9;
        textoabajo.textContent = numero1}
    else if    (numero1 <= 9 && refoperaciones === 0){ numero1 = Number(numero1 + "9")
    textoabajo.textContent = numero1}
    else if (numero2 === 0 && refoperaciones === 1)
    {   refpunto = 1;
        numero2 = 9
        textoarriba.textContent = guardaoperaciones;
        textoabajo.textContent = numero2;}
    else if(numero2 < 10 && refoperaciones === 1)
    {numero2 = Number(numero2 + "9" )
    textoabajo.textContent = numero2;}} 
n9.addEventListener("click", print9);




//Obtencion datos de operaciones e inicialización de sus variables 

//Historial
let Historial = [];


   //Signos
const suma = document.getElementById("suma");
let refsuma = 0
function printsuma(){
    console.log(suma.innerHTML);
    refresta = 0;
    refporcentaje = 0;
    refsuma = refsuma + 1;
    textoabajo.textContent = "+"
    textoarriba.textContent = numero1
    operaciones();
}
suma.addEventListener("click", printsuma);

const resta = document.getElementById("resta");
let refresta = 0
function printresta(){
    console.log(resta.innerHTML);
    refsuma = 0;
    refporcentaje = 0;
    refresta = refresta + 1;
    textoabajo.textContent = "-"
    textoarriba.textContent = numero1
    operaciones();
}
resta.addEventListener("click", printresta);

const division = document.getElementById("division");
let refdivision = 0
function printdivision(){
    console.log(division.innerHTML);
    refsuma = 0;
    refresta = 0;
    refporcentaje = 0;
    refdivision = refdivision + 1;
    textoabajo.textContent = "÷"
    textoarriba.textContent = numero1
    operaciones();
}
division.addEventListener("click", printdivision);

const multiplicacion = document.getElementById("multiplicacion");
let refmultiplicacion = 0
function printmultiplicacion(){
    console.log(multiplicacion.innerHTML);
    refsuma = 0;
    refresta = 0;
    refdivision = 0;
    refporcentaje = 0;
    refmultiplicacion = refmultiplicacion + 1;
    textoabajo.textContent = "*"
    textoarriba.textContent = numero1
    operaciones();
}
multiplicacion.addEventListener("click", printmultiplicacion);

const porcentaje = document.getElementById("porcentaje");
let refporcentaje = 0
let porcentajeSaver;
function printporcentaje(){
    console.log(porcentaje.innerHTML);
    porcentajeSaver = numero2;
    numero2 = ((numero2*numero1)/100)
    console.log(numero2)
    refporcentaje = 1;
}  ;
porcentaje.addEventListener("click", printporcentaje);


const masmenos = document.getElementById("masmenos");
let refmasmenos = 0
function printmasmenos(){
    console.log(masmenos.innerHTML);
      if (refmasmenos === 0){
        refsuma = refsuma +1;
        refresta = 0;
        refmasmenos = refmasmenos + 1;
        textoabajo.textContent = "+"
        textoarriba.textContent = numero1;
        console.log(refmasmenos);
        console.log(refsuma);
      }  
      else if (refmasmenos === 1) {
        refresta = refresta +1;
        refsuma = 0;
        textoabajo.textContent = "-"
        textoarriba.textContent = numero1;
        refmasmenos = 0;
        console.log(refmasmenos);
        console.log(refresta);
      }
     
    
    operaciones();
}
masmenos.addEventListener("click", printmasmenos);



//Operaciones
let guardaoperaciones;

function operaciones(){
    if (refsuma  > 0){guardaoperaciones = (numero1+ " + ")
    refoperaciones = refoperaciones + 1; } 
    else if (refsuma < 1 && refresta > 0){guardaoperaciones = (numero1+ " - ") ; 
    refoperaciones = refoperaciones + 1;}
    else if (refsuma < 1 && refresta < 1  && refdivision > 0){guardaoperaciones = (numero1+ " ÷ ") ; 
    refoperaciones = refoperaciones + 1;}
    else if (refsuma < 1 && refresta < 1  && refdivision < 1 && refmultiplicacion === 1){guardaoperaciones = (numero1+ " * ") ; 
    refoperaciones = refoperaciones + 1;}
     
} 

let dataEntry;
let result;
let dataOperation;
const resultado = document.getElementById("igual");
const historialresult = document.getElementById("historialresult");
function printigual(){
    numero1 = (Number(numero1));
    numero2 = (Number(numero2));
    console.log(numero1)
    console.log(numero2)
    if (refsuma === 1){
        if (refporcentaje > 0){
            dataEntry = (numero1 +" + "+porcentajeSaver+"%"+" = "+(numero1+numero2));
            result = (numero1+numero2);
          dataOperation = (numero1 +" + "+porcentajeSaver+"%"+" = ");
          textoarriba.textContent = (numero1 +" + "+porcentajeSaver+"%"+" = ");
          textoabajo.textContent = (numero1+numero2);
          
        }
        else {
            dataEntry = (numero1 +" + "+numero2+" = "+(numero1+numero2));
            result = (numero1+numero2);
          dataOperation = (numero1 +" + "+numero2);
          textoarriba.textContent = (numero1 +" +  "+numero2+" = ");
          textoabajo.textContent = (numero1+numero2);
        }

    
    
    }
    else if (refresta === 1){
        if(refporcentaje > 0){
            console.log(numero1-numero2);
            dataEntry = (numero1 +" - "+porcentajeSaver+"%"+" = "+(numero1-numero2));
            result = (numero1-numero2);
             dataOperation = (numero1 +" - "+porcentajeSaver+"%"+" = ");
            textoarriba.textContent = (numero1 +" -  "+porcentajeSaver+"%"+" = ");
            textoabajo.textContent = (numero1-numero2);

        }

        else{
            console.log(numero1-numero2);
            dataEntry = (numero1 +" - "+numero2+" = "+(numero1-numero2));
            result = (numero1-numero2);
             dataOperation = (numero1 +" - "+numero2);
            textoarriba.textContent = (numero1 +" -  "+numero2+" = ");
            textoabajo.textContent = (numero1-numero2);
        }
       
    }
    else if (refdivision === 1){
        console.log(numero1/numero2);
        result = (numero1/numero2);
        dataOperation = (numero1 +" ÷ "+numero2);
        dataEntry = (numero1 +" ÷ "+numero2+" = "+(numero1/numero2));
        textoarriba.textContent = (numero1 +" ÷  "+numero2+" = ");
        textoabajo.textContent = (numero1/numero2);
    }
    else if (refmultiplicacion === 1){
        console.log(numero1*numero2);
        result = (numero1*numero2);
        dataOperation = (numero1 +" * "+numero2);
        dataEntry = (numero1 +" * "+numero2+" = "+(numero1*numero2));
        textoarriba.textContent = (numero1 +" *  "+numero2+" = ");
        textoabajo.textContent = (numero1*numero2);
    }

  

    console.log(dataOperation);
    console.log(result);
   
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth()+1;
    let anio = hoy.getFullYear();
    let Historfile = document.createElement("tr");
    Historfile.innerHTML = `
     
        <td>${dia+"/"+mes+"/"+anio}</td>
        <td style="    padding-left: 50px;
        ">${dataOperation}</td>
        <td  style="    padding-left: 95px;
        ">${result}</td>
    `
    historialresult.appendChild(Historfile);


    Historial.push(dataEntry);

    refoperaciones = 0;
    refsuma = 0;
    refresta = 0;
    refdivision = 0;
    refmultiplicacion = 0;
    refpunto = 0;
    numero1 = 0;
    numero2 = 0;
}
resultado.addEventListener("click", printigual);




//Caracteres Especiales 
const ce = document.getElementById("ce");
function printce(){
    numero1 = 0;
    numero2 = 0
    textoabajo.textContent = 0;
    textoarriba.textContent = "";
    console.log(ce.innerHTML);
    refoperaciones = 0;

}
ce.addEventListener("click", printce);


const cbutton = document.getElementById("cbutton");
function printc(){
    if (numero1 > 0 && refoperaciones === 0 && numero2 === 0)
    {
        numero1 = 0;
        textoabajo.textContent = 0;
        textoarriba.textContent = "";

    }
    else if (numero1 > 0 && refoperaciones > 0 && numero2 === 0 ){
        textoabajo.textContent = numero1;
    textoarriba.textContent = "";  
    refoperaciones = 0;
    refsuma = 0;
    refresta = 0;
    refdivision = 0;
    refmultiplicacion = 0;  
refoperaciones = 0;  }
    else if (numero1 > 0 && refoperaciones > 0 && numero2 > 0){
         if(refsuma === 1){
            textoabajo.textContent = " + " ;
            textoarriba.textContent = numero1
            numero2 = 0;   
         }
         if(refresta === 1){
            textoabajo.textContent = " - " ;
            textoarriba.textContent = numero1
            numero2 = 0;   
         }
         if(refdivision === 1){
            textoabajo.textContent = " ÷ " ;
            textoarriba.textContent = numero1;
            numero2 = 0;   
         }
         if(refmultiplicacion === 1){
            textoabajo.textContent = " * " ;
            textoarriba.textContent = numero1;  
            numero2 = 0; 
         }
       
           }

}
cbutton.addEventListener("click", printc);

let refpunto = 0;
const punto = document.getElementById("punto");
function printpunto(){
    console.log(".");
    if(numero2 === 0 ){
        numero1 = numero1+".";
    }
    else if(numero1 > 0 && refpunto > 0)
       numero2 = numero2 +".";
}
punto.addEventListener("click", printpunto);

//Historial
function agregarHistorial () {
   
}

