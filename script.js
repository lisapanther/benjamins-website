
// var sections = [];
// $.each( $('.images section'), function( key, value ) {
// 	var section = {};
// 	section['name'] = $(this).attr('class');
// 	section['offset'] = $(this).offset().top;
// 	section['height'] = $(this).height();
// 	sections.push(section);
// });
// 
// $.each(sections , function( index, section ){
// 
// });

$(".images").scroll(function () {
	


		if ($(".images").scrollTop() + $(".images").height() > $('.images section.OnTHFtext').height()+$(".images section.fuck").height()-($(".images section.fuck img" ).last().height()/2)) { 
			$(".description section.fuck").css("display", "initial");
			$(".description section.OnTHFtext").css("display", "none");
	    } else {
	        $(".description section.fuck").css("display", "none");
			$(".description section.OnTHFtext").css("display", "initial");
	    }
		
	
	
    

});