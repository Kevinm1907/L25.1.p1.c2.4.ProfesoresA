/**
 * PROFESORES-A
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total.
Ejemplos de la corrida:
Nombre del profesor fijo: Carlos
Monto del bono: $25
Monto del sueldo: $100
Ingreso total del profesor Carlos: $125
Nombre del profesor fijo: Carolina
Monto del bono: $40
Monto del sueldo: $90
Ingreso total del profesor Carolina: $130 
*/

import Cl_fijo from "./Cl_fijo.js";

let fijo1 = new Cl_fijo("Carlos", 25, 100);
let fijo2 = new Cl_fijo("Carolina", 40, 90);

let salida = document.getElementById("salida");
salida.innerHTML = `REPORTE:<br>
<br>Nombre del profesor fijo: ${fijo1.nombre}
<br>Monto del bono: $${fijo1.bono}
<br>Monto del sueldo: $${fijo1.sueldo}
<br>Ingreso total del profesor ${fijo1.nombre}: $${fijo1.calcularIngresoTotal()}<br>
<br>Nombre del profesor fijo: ${fijo2.nombre}
<br>Monto del bono: $${fijo2.bono}
<br>Monto del sueldo: $${fijo2.sueldo}
<br>Ingreso total del profesor ${fijo2.nombre}: $${fijo2.calcularIngresoTotal()}
`;