AOS.init({
	duration: 1500
});

$('#nav-icon4-open').click(function() {
	$(".menuList").css('transform', 'scaleY(1)');
	$("#content").hide();
});
$('#nav-icon4-close').click(function() {
	$(".menuList").css('transform', 'scaleY(0)');
	$("#content").show();
});

$(function() {
    $(".datepicker").datepicker({
    	beforeShow: function(input, inst) {
	       	$('#ui-datepicker-div').removeClass(function() {
	           return $('input').get(0).id; 
	      	});
	       	$('#ui-datepicker-div').addClass(this.id);
	   	},
    	minDate: 0,
    	maxDate: "+1M +10D",
    	showOn: "both", 
      	buttonImage: "../assets/icon/chevron-compact-down.png",
      	buttonImageOnly: true,
      	// buttonText: '<!-- <i class="bi bi-chevron-compact-down text-white"></i> -->'
    });
 });

$(".ui-datepicker-trigger").click(function() {
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#header_title").offset().top
    }, 500);
})

// $(".retreat").hover(function() {
// 	$(this).find('.retreat_content_title').addClass('fade-in');
// 	$(this).find('.retreat_content_text').addClass('fade-in');
// })

if (screen.width <= 578) {
	$("body *").removeAttr('data-aos-delay');
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}