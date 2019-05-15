
function ejecuta(){
   
   document.querySelector("#boton").onclick=enviarComentario;
   
}



function revisarEmail(email){
    var verdad=false;
    var i;
    for(i=0; i<email.length; i++){
        if(email.charAt(i)==='@'){
            verdad=true;
        }
    }
    return verdad;
}  

function enviarComentario(){
    var nombre     = document.getElementById("nombre").value;
    var email      = document.getElementById("correo").value;
    var comentario = document.getElementById("mensaje").value;
    if ( !(nombre==="" || comentario==="" || email==="" )){
      if(revisarEmail(email)===true){
        alert("El mensaje ha sido enviado correctamente");
        return true;
    }else{
        alert("El formato del campo email no es correcto");
    }
  }else{
      alert("Algun campo del formulario esta vacio");
  }
  // Devulve false para evitar que la página se refresque al hacer submit
  return false;
}

window.onload=ejecuta;

