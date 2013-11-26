$().ready(function() {


});


var removeBottomAds = function () {
	$(".ecom-ads-wrap").remove();
	$(".ui-reelList-viewport").css({
		"bottom": 0
	});
};

setInterval(removeBottomAds, 1500);