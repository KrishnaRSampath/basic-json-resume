$(document).ready(function(){

//asdfasdf

	$.getJSON("resume.json", function(data){

		//Header content
		$('div#resume-header').append("<h2>" + data[0].name + "</h2>");
		$('div#resume-header').append("<h3>" + data[1].email + "</h3>");
		$('div#resume-header').append("<h3>" + data[2].phone + "</h3>");


		$('div#resume-portfolio').prepend("<h3>Portfolio</h3>");

		$.each(data[3].portfolio, function(key, val){
			var anchorRef = "href = " + "\"" + val.site + "\"";  
			var targetSetting = "target = " + "\"" + "_blank" + "\"";
			$('ul#portfolio-list').append("<li><a " + anchorRef + " " + targetSetting + ">" + val.site + "</a></li>");
		});

		$('div#resume-skills').append("<h3>Skills</h3>");

		//Map skills information into html scaffold
		$.each(data[4], function(index, group){

			$.each(group, function(index, group){

				//Create div sections 
				$.each(group, function(descriptor, group){

					var divIDStr = "id = " + descriptor;
					var ulIDStr = "id = " + descriptor + "-ul";
					$('div#resume-skills').append("<div " + divIDStr +"><ul " + ulIDStr + "></ul></div>");

				});

				$.each(group, function(descriptor, group){
					$.each(group, function(index, pair){
				
						var divSelectorStr = "div#" + descriptor;
						var ulSelectorStr = "ul#" + descriptor + "-ul";
						$.each(pair, function(key, val){
							if (key == "description")
							{
								$(divSelectorStr).prepend("<h4>" + val + "</h4>");
							}
							else
							{
								$(ulSelectorStr).append("<li>" + val + "</li>");
							}
						});
					});
				});
			});

		});

		$('div#resume-work-history').append("<h3>Work History</h3>");

		//Map work history into html scaffold
		$.each(data[5], function(index, group){
			
			$.each(group, function(index, group){

				$.each(group, function(descriptor, group){

					var divClassStr = "class = " + descriptor;
					var divIDStr = "id = " + descriptor + "-" + (index + 1);
					var ulIDStr = "id = " + descriptor + "-ul-" + (index + 1);
					
					$('div#resume-work-history').append("<div " + divIDStr + " " + divClassStr + ">" + "<ul " + ulIDStr + "></ul></div>");

				});
				
				$.each(group, function(descriptor, group){

					var ulIDSelector = "ul#" + descriptor + "-ul-" + (index + 1);

					$.each(group, function(pairindex, pair){

						$.each(pair, function(key, val){

							/* TODO:  Add class and ID differentiators for the different types of job position information/descriptions. */
							var liIDSelectorStr = "id = " + key + "-li-" + (index + 1);
							var liClassSelectorStr = "class = " + key;

							if (key == "position-start")
								$(ulIDSelector).append("<li " + liIDSelectorStr + " " + liClassSelectorStr + ">" + "Start: " + val + "</li>");
							else if (key == "position-end")
								$(ulIDSelector).append("<li " + liIDSelectorStr + " " + liClassSelectorStr + ">" + "End: " + val + "</li>");
						    else
								$(ulIDSelector).append("<li " + liIDSelectorStr + " " + liClassSelectorStr + ">" + val + "</li>");

						});
						
					});

				});

			});
		});

		$('div#resume-education').append("<h3>Education</h3>");
		//Map education history into html scaffold
		$.each(data[6], function(index, group){
			$.each(group, function(index, group){
				$.each(group, function(descriptor, group){
					console.log(descriptor);
					console.log(group);

					var divClassStr = "class = " + descriptor;  
					var divIDStr = "id = " + descriptor + "-" + (index + 1);  
					var ulIDStr = "id = " + descriptor + "-ul-" + (index + 1);  

					$('div#resume-education').append("<div " + divIDStr + " " + divClassStr + ">" + "<ul " + ulIDStr + "></ul></div>");
				});

				$.each(group, function(descriptor, group){

					var ulIDSelector = "ul#" + descriptor + "-ul-" + (index + 1);

					$.each(group, function(pairindex, pair){

						$.each(pair, function(key, val){

							/* TODO:  Add class and ID differentiators for the different types of job position information/descriptions. */
							var liIDSelectorStr = "id = " + key + "-li-" + (index + 1);
							var liClassSelectorStr = "class = " + key;
							$(ulIDSelector).append("<li " + liIDSelectorStr + " " + liClassSelectorStr + ">" + val + "</li>");

						});
						
					});

				});
			});

		});
	});

});
