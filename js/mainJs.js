$('#nav-icon4-open').click(function() {
	$(".menuList").css('transform', 'scaleY(1)');
});
$('#nav-icon4-close').click(function() {
	$(".menuList").css('transform', 'scaleY(0)');
});
AOS.init({
	duration: 800
});