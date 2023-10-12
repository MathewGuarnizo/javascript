
    function sumar(n1,n2){
        var resultado=n1+n2;
        var res=document.getElementById("resultado")
        if(n1!=0 && n2!=0){
            respuesta.style.display="block";
            res.innerHTML = `total: ${resultado}`;
            res.style.color="white";
    }else{
        respuesta.style.display="block";
        res.innerHTML = `verifique sus datos`;
        res.style.color="black";
    }
}
function restar(n1,n2){
    var resultado=n1-n2;
    var res=document.getElementById("resultado")
    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color="green";
    }
else{
    respuesta.style.display="block";
    res.innerHTML = `verifique sus datos`;
    res.style.color="red";
}}
function multiplicar(n1,n2){
    var resultado=n1*n2;
    var res=document.getElementById("resultado")
    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color="green";
}else{
    respuesta.style.display="block";
    res.innerHTML = `verifique sus datos`;
    res.style.color="red";
}}
function dividir(n1,n2){
    var resultado=n1/n2;
    var res=document.getElementById("resultado")
    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color="green";
}else{
    respuesta.style.display="block";
    res.innerHTML = `verifique sus datos`;
    res.style.color="red";
}}
function potencia(n1){
    var resultado=n1*n1;
    var res=document.getElementById("resultado")
    if(n1!=0 && n1!=0){
        respuesta.style.display="block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color="green";
}else{
    respuesta.style.display="block";
    res.innerHTML = `verifique sus datos`;
    res.style.color="red";
}}
function mostrar(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let opc=parseInt(document.getElementById("opc").value);
    switch(opc){
        case 1:
            sumar(n1,n2)
            break;
        case 2:
            restar(n1,n2)
            break;
        case 3:
            multiplicar(n1,n2)
            break;
        case 4:
            dividir(n1,n2)
            break;
        case 5:
            potencia(n1)
            break;
        default:
            alert("la opcion no es valida")
    }
}