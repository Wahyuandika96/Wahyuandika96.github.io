// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var href = $(this).attr('href');
    
    //tangkap elemen ybs
    var elemenHref = $(href);
    console.log(elemenHref);
    
    // pindahkan scrollnya
    $('html , body').animate({
        scrollTop: $(elemenHref).offset().top - 50
         }, 1250, 'easeInOutExpo');
    
    

    e.preventDefault();

});


// parallax
//about
$(window).on('load', function(){
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
})


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    //portfolio
    if( wScroll > $('.Portfolio').offset().top - 300 ) {
        $('.Portfolio .thumbnail').each(function(i) {
            setTimeout(function(){
                $('.Portfolio .thumbnail').eq(i).addClass('muncul');     
            }, 300 * (i + 1));

        });
        
        
        
        
        
        
    };


});








