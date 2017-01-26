'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});

	// fuction projectclick()
	var showing = false;
	$(".project").click(function(e) {
		e.preventDefault();
		var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    if (description.length == 0) {
			 showing = true;
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
			if (showing) {
				$('.project-description').fadeOut();
				showing = false;
			}  else {
				$('.project-description').fadeIn();
			  showing = true;
			}
    }
	});

}
