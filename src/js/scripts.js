jQuery(function() {
	var social = jQuery('.share-links'),
		container = jQuery('#masonry-break'),
		article = jQuery('.node-bold-ideas'),
		article = jQuery('.node-bold-ideas'),
		readMoreButtonOpen = jQuery('#ideawall-readmore__button--open'),
		readMoreButtonClose = jQuery('#ideawall-readmore__button--close'),
		readMoreContainer = jQuery('.ideawall-readmore__info-container'),
		mappingreadMoreButtonOpen = jQuery('#mapping-intro__readmore-button--open'),
		mappingreadMoreButtonClose = jQuery('#mapping-intro__readmore-button--close'),
		mappingreadMoreContainer = jQuery('.mapping-intro__readmore-info-container');

	social.appendTo(article);
	readMoreButtonOpen.click(function() {
		readMoreContainer.slideDown(500).attr('aria-hidden', 'false').css('visibility', 'visible');
	})
	readMoreButtonClose.click(function() {
		readMoreContainer.slideUp(500, function() {
			jQuery(this).attr('aria-hidden', 'true').css('visibility', 'hidden')
		});
	})
	mappingreadMoreButtonOpen.click(function() {
		mappingreadMoreContainer.attr('aria-hidden', 'false').css('visibility', 'visible').slideDown(500,function(){
			container.masonry({
				columnWidth: 1,
				itemSelector: '.mason-item'
			});
		})
	})
	mappingreadMoreButtonClose.click(function() {
		mappingreadMoreContainer.slideUp(500, function() {
			jQuery(this).attr('aria-hidden', 'true').css('visibility', 'hidden');
			container.masonry({
				columnWidth: 1,
				itemSelector: '.mason-item'
			});
		});
	})
});