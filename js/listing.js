/*
	Custom Plugin for listing items that will set <ul> to set number of list items. 
	If list items reach the set [amount] a new UL wraps. Can be adjusted for TR / TDs as well. 
*/
function setListing( defaults ){
	var settings = $.extend({
		wrapper : $(this),
		item : 'li',
		amount  : 4,
		wrapperWidth : '100%'

	}, defaults);

		var selector = settings.wrapper.find(settings.item);
		var amount = settings.amount

// Wrap another UL every li item
	for ( var i  = 0; i  < selector.length; i+=amount ) {
			selector.slice(i, i+amount).wrapAll('<ul class="mod-listing"></ul>');
		}
		 
		var totalList = settings.wrapper.find('mod-listing');
		var listCount = totalList.length
		var ulWidth = Math.ceil( settings.wrapperWidth / listCount );

		totalList.css({ 'width' : ulWidth })

	}


// Load JS File
setListing({
	wrapper: $('.mod-list'),
	item: '.mod-list-item',
	amount : 3,
});