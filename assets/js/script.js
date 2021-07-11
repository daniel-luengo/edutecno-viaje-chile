
    $(function(){

        /* Efecto smoth scroll */
        $("a").click(function(event){
            event.preventDefault();

            var enlace = this.hash;

            $("html").animate({
                scrollTop: $(enlace).offset().top ,
            }, 800)

        });




        /* Habilitamos los tooltips */
        $('[data-toggle="tooltip"]').tooltip()


        /* Activamos modales*/
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })
    
    }) 
    