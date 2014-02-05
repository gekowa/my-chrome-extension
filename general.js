$().ready(function() {


});


var removeAds = function () {
	$("#qqaddiv").remove();
	$("#footer").remove();
};

setInterval(removeAds, 1500);