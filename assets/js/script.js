
    $(function(){

        /* Efecto smoth scroll */
        $("a").click(function(event){
            event.preventDefault();

            var enlace = this.hash;

            $("html").animate({
                scrollTop: $(enlace).offset().top ,
            }, 800)

        });
    
    }) 