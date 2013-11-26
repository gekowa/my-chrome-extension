$().ready(function() {


});

var removeFloatingAd = function () {
	if ($(".decoupledCapital").length > 0) {
		$(".decoupledCapital").remove();
		$(".first-home-section").removeClass("small-home-section");
		$(".capital-column").remove();
		$(".home-capital").remove();

		var success = $(".decoupledCapital").length === 0;
		console.log("Ext_GROOVESHARK: " + success);
		return success;
	} else {
		console.log("Not found yet!!");
		return false;
	}
}, startupInt;

startupInt = setInterval(function () {
	if(removeFloatingAd()) {
		clearInterval(startupInt);
		setInterval(removeFloatingAd, 10000);
	}
}, 1000);