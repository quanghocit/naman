$('.your_goal').click(function(){
	$("#YourGoalContent").fadeIn(500);
	$("#ListYourGoal").hide();
})
$('.your_goal_back').click(function(){
	$("#YourGoalContent").hide();
	$("#ListYourGoal").fadeIn(500);
})