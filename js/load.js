/* ---------------------------------------------- /*
 * Animação de loader da página
 /* ---------------------------------------------- */
(function(){
    $(window).on('load', function() {
        $('.loader').delay(1400).fadeOut('fast');
        $('.page-loader').delay(1600).fadeOut('slow');
    });
})(jQuery);


