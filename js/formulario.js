$(document).ready(function(){

  //cambio de color del input
  $('input').mouseover(function(){
    $(this).addClass('focused-input');
  })

  $('input').mouseout(function(){
    $(this).removeClass('focused-input');
  })
});


//Función para saber si el usuario es mayor de edad

function Edad(){
  //recogemos la fecha de nacimiento introducida por el usuario
  var fechaNace = document.querySelector('input[type="date"]').value;
  //desgloso la fecha en día, mes y año por separado
  var values = fechaNace.split("-");
  var diaNace = parseInt(values[2]);
  var mesNace = parseInt(values[1]);
  var anoNace = parseInt(values[0]);

  //recogemos la fecha del día actual
  var fechaActual = new Date();
  //desglosamos la fecha actual 
  var dia = parseInt(fechaActual.getDate());
  var mes = parseInt(fechaActual.getMonth()) +1;
  var ano = parseInt(fechaActual.getFullYear());

  //mostramos error en caso de que sea menor, y volvemos a dejar el input vacío
  function menor(){
    alert('Debes ser mayor de edad para registrarte');
    document.getElementById("nacimiento").value = "dd/mm/aaaa";
  }

  //Condición para saber si es menor de edad
  //Si el año actual menos el año de nacimiento es igual a 17 años, seguimos preguntado por su mes y día
  //Si es igual o mayor a 18, entonces será mayor de edad
  if( ((ano - anoNace) <= 17)){
    menor();
  }else if( ((ano - anoNace) == 18) && (mes < mesNace )){
    menor();
  }else if( ((ano - anoNace) == 18) && (mes == mesNace ) && ( dia < diaNace)){
    menor();
  }else{
    console.log("MAYOR de edad");
  }
}



