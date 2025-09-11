//inilicizacao aos

AOS.init({
    
    
    duration:2000,

})


//video

window.addEventListener("load", function () {
    let video = this.window.document.querySelector("#video")
    video.play();
    video.loop = true;

});





//galeria
$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.item',
    });

    $('.filterBtnGroup').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.filterBtnGroup li').removeClass('active');
        $(this).addClass('active');
    });
});



function validarFormulario() {

    //validar Nome----------------------------------------------------------------------
    if (document.getElementById('Nome').value.trim() == "") {

        alert('Campo nome é obrigatório');
        return false;

    }

   

    // validar Emaill------------------------------------------------------------------
    if (document.getElementById('Email').value.trim() == "") {

        alert('Campo E-mail é obrigatório');
        return false;

    }
    else {

        if (validEmail(document.getElementById('Email').value.trim()) == false) {

            alert('E-mail inválido ');
            return false;
        }
    }

 
    //função para validar E-mail---------------------------------------------------------------------------------------
    function validEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)

    }


    //faz o envio do formulario--------------------------------------------------------------------------------------
    document.getElementById('frmContato').submit();


}

  




































































































