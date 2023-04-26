$("#form").validate({
    rules:{
        nombre: {
            ///El requiered sirve para que el input sea obligatorio y no se deje en blanco
            ///El milength el minimo de carcater largo de que debe tener 
            ///El maxlength el maximo de carcater de largo debe tener
            required: true,
            minlength: 4,
            maxlength: 30
        },
        apellido: {
            required: true,
            minlength: 4,
            maxlength: 30
        },
        correo:{
            ///El correo sirve para validar si pone un @
            required: true,
            email: true
        },
        rut:{
            required: true,
            minlength: 9
        },
        telefono: {
            required: false,
            minlength: 9
        },
        genero:{
            required: true
        },
        ciudad:{
            required: true
        },
        Comentario:{
            required: true,
            minlength: 50,
            maxlength: 120
        }
    },
    messages: {
        nombre: {
            required: "Por favor, ingresa tu nombre",
            minlength: "El nombre debe tener al menos 4 caracteres",
            maxlength: "El nombre no puede tener más de 30 caracteres"
        },
        apellido: {
            required: "Por favor, ingresa tu apellido",
            minlength: "El apellido debe tener al menos 4 caracteres",
            maxlength: "El apellido no puede tener más de 30 caracteres"
        },
        correo: {
            required: "Por favor, ingresa tu correo electrónico",
            email: "Por favor, ingresa un correo electrónico válido"
        },
        rut: {
            required: "Por favor, ingresa tu rut",
            minlength: "El rut ingresado debe tener 9 caracteres",
            maxlength: "El rut ingresado debe tener 9 caracteres como maximo"
        },
        telefono: {
            required: "Por favor, ingresa tu número de teléfono",
            minlength: "El numero de telefono debe tener 9 caracteres",
            maxlength: "El numero de telefono debe tener solo 9 caracteres"
        },
        genero: {
            required: "Por favor, selecciona tu género"
        },
        ciudad: {
            required: "Por favor, ingresa tu ciudad"
        },
        Comentario: {
            required: "Por favor, ingresa un comentario",
            minlength: "Ingrese un minimo de 50 caracteres",
            maxlength: "Ingrese un maximo de 120 caracteres"
        }
    }
})

// Mostrar Rut y ocultar Pasaporte
$(document).ready(function() {
    // Obtener el menú desplegable y el campo de entrada de Rut
    var documento = $("#documento");
    var campoRut = $("#campo_rut");
    
    // Mostrar u ocultar el campo de entrada de Rut según el valor seleccionado
    documento.on("change", function() {
      if (documento.val() === "rut") {
        campoRut.show();
      } else {
        campoRut.hide();
      }
    });
});

// Validar rut
var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}


$("#comprobacion_rut").click(function(){
	if (Fn.validaRut( $("#rut").val() )){
		$("#msgerror").html("El rut ingresado es válido");
	} else {
		$("#msgerror").html("El Rut no es válido");
	}
});

// Deshabilitar el botón de envío al cargar la página, para una mejor funcion
$("#enviar").prop("disabled", true);

// Funcion para detectar cuando se ingresa información veridica a los campos
$("input, select, textarea").on("keyup", function() {
    // Verificar si se han completado todos los campos requeridos
    if ($("#form").valid()) {
        // Habilitar el botón de envío
        $("#enviar").prop("disabled", false);
    } else {
        // Deshabilitar el botón de envío
        $("#enviar").prop("disabled", true);
    }
});

// Funcion que retornara cuando el boton para enviar los datos sea valido
$("#enviar").click(function(){
    if($("#form").valid() == false ){
        return;
    }
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let correo = $("#correo").val()
    let telefono = $("#telefono").val()
    let genero = $("#genero").val()
    let ciudad = $("#ciudad").val()
    let comentario = $("#Comentario").val()
    alert("Datos enviados correctamente.");
})