function sectionTitle(){
	var currentTitle = $('.nav-menu ul li a').html();
	$('.pagetitle').html(currentTitle);
	console.log(currentTitle);
}

sectionTitle();