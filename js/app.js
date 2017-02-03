$(document).ready(function(){

	$("#btn").addClass("disabled");
	$("#user,#pass,#mail").keyup(function(){
		var u= $("#user").val().length;
		var p =$("#pass").val().length;
		var m =$("#mail").val().length;
		
		/*$("#tuser").text(u);*/
		//$("#tpass").text(p);
		if(u==0){
			$("#tuser").addClass("no");
		}
		else if(u<6){
			$("#tuser").removeClass("no");
			$("#tuser").text("Less than 6").addClass("red");
		}
		else if(u>=6){
			$("#tuser").removeClass("no");
			$("#tuser").text(" ");	
		}

		

		if(p==0){
			$("#tpass").addClass("no");
		}
		else if(p<6){
			$("#tpass").removeClass("no");
			$("#tpass").text("Length at least 6").addClass("red");
		}
		else if(p>=6){
			$("#tpass").removeClass("no");
			$("#tpass").text(" ");	
		}

		if(u>=6 && p>=6 && m>0){
			$("#btn").removeClass("disabled");
		}
		else{
			$("#btn").addClass("disabled");
		}
	});

	$("#btn").click(function(){
		var n = $("#user").val();
		alert("Welcome "+n);
	});


});