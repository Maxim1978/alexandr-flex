$(document).ready(function(){

// Медленный скролл к заголовкам (якорным ссылкам)	
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });		

// Кнопка скролла наверх 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
		$('.scrollup').fadeIn();
		} else {
		$('.scrollup').fadeOut();
		}
	});
	 
		$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1500);
		return false;
	});
 
// Слайдер Fancybox
	$(".gallery a").fancybox(); // выбор всех ссылок с классом gallery
	});

	// $(document).ready(function() {
	// 	$(".gallery1 a").fancybox(); // выбор всех ссылок с классом gallery
	// 	});
	$('[data-fancybox="gallery"]').fancybox({
	  thumbs : {
	    autoStart : true
	  },
	  buttons : [
	    'zoom',
	    'close'
	  ]
});

