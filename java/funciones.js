  $("#form").validate({
    rules:{
        nombre: {
            ///El requiered sirve para que el input sea obligatorio y no se deje enblanco
            ///El milength el minimo de carcater largo de que debe tener 
            ///El maxlength el maximo de carcater de largo debe tener
            required: true,
            minlength: 4,
            maxlenght: 30
        },
        apellido: {
            required: true,
            minlength: 4,
            maxlenght: 30
        },
        correo:{
            ///El correo sirve para validar si pone un @
            required: true,
            correo: true
        },
        telefono: {
            required: true   
        },
        genero:{
            required: true
        },
        ciudad:{
            required: true
        },
        Comentario:{
            required: true
        }
    }
  })
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
  })