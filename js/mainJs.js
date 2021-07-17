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
    });
 });

// $(".retreat").hover(function() {
// 	$(this).find('.retreat_content_title').addClass('fade-in');
// 	$(this).find('.retreat_content_text').addClass('fade-in');
// })