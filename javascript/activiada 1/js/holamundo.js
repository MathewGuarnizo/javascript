nacimiento=parseInt(prompt("Ingrese tu año de nacimiento"));
console.log(typeof(nacimiento));

const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento;


var nombres=prompt("Ingresa tu nombre");

if(edad<=8){
    document.write("Bienvenido niñ@ " + nombres + " usted tiene " + edad + " años de edad y es un niño")
}
else if(edad<=17){
    document.write("Bienvenido joven " + nombres + " usted tiene " + edad + " años de edad y es un joven")
}
else{
    document.write("Bienvenido adulto " + nombres + " usted tiene " + edad + " años de edad y es mayor de edad")
}
