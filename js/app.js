"use strict"
$(document).ready(function(){
var resultList=$("#resultList");
resultList.text("inject by the jquery ");
var toggleButton=$("#toggleButton");
toggleButton.on("click",function(){
	resultList.toggle(500);
	if(toggleButton.text()==="Hide"){
		toggleButton.text("Show");
	} else {
		toggleButton.text("Hide");
	}

});
var results=[{
			title:"java",
			instructro:"Saurab shukla ",
			lavel:"Beginner",
			total_videos:10
	    },{
			title:"c++",
			instructro:"dollu maorua ",
			lavel:"Midium",
			total_videos:10
		},{
			title:"c",
			instructro:"Sachin  ",
			lavel:"Advanc",
			total_videos:10
		},{
			title:".net",
			instructro:"Anura ",
			lavel:"Beginner",
			total_videos:10
			
 }];
  resultList.empty();
   $.each(results,function(i,item){
   	var newResult= $("<div class='result'>"+
   	"<div class='title'>"+item.title+"</div>"+
   	"<div>"+"Lavel :"+item.lavel+"</div>"+
   	"<div>"+"Total Videos :"+item.total_videos+"</div>"+
   	"<div>"+"instructor :"+item.instructor+"</div>"+
   	"</div>");
   	resultList.append(newResult);
    
    newResult.hover(function(){
    	$(this).css("background-color","lightgray");
    },function(){
     $(this).css("background-color","white");
    }
    )

   })
}); 