$().ready(function() {


});


var removeBottomAds = function () {
	$(".ecom-ads-wrap").remove();
	$(".ui-reelList-viewport").css({
		"bottom": 0
	});

	$("#right-ads").remove();
};

setInterval(removeBottomAds, 1500);