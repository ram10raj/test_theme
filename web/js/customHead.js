
require([
        'jquery'
    ], function($){
      $(document).ready(function(){
 				if($('.nav-toggle').css('display') == 'none'){
 					$('.header.links li a.language').parent().after( "<br/>" );
 				} else {
 					$('.header.links br').remove()
 				}
 				var searchInput = document.getElementById('search');

 				$(searchInput).on('blur', function(){
 					if($('.nav-toggle').css('display') == 'none'){
 						if($(searchInput).val() != '' ) {
 							$(searchInput).css('width','100%');
 						} else {
 							$(searchInput).css('width','46px');
 					}
 				}
 			});
			if($('.nav-toggle').css('display') == 'block'){
                $('.page-wrapper').addClass('IContainer');
			}
			if($('#shopCollections').length > 0){
				if (window.location.search.indexOf('product_collection') < 1) {
					document.getElementById('shopCollections').style.display = "block";
				}
			}
			if($('.header.links > li > a.langLink').length > 0){
				var $ll = jQuery('.header.links > li > a.langLink').first().clone();
				$('.ves-menu nav.navigation .ves-megamenu').append($ll);	
			}
 		});
    });
