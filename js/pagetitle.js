// page title
// Will generate the page title of the page as the headline tag. Useful for Sitefinity headline tags
function pageTitle( titleClass ){

	var selector = $(titleClass);
	var currentTitle = $(document).attr('title');
	var pageHeading = selector.html(''+ currentTitle +'');

	return selector; 
}

pageTitle('.pageheading h1');