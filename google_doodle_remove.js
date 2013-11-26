$().ready(function() {


});


var i,
	removeDoodle = function () {
		$("#hplogo").after("<img id='normal-logo' src='/images/srpr/logo11w.png' width='269' height='95' />");
		$("#hplogo").remove();

		if ($("#hplogo").length === 0) {
			clearInterval(i);
		}
	};

removeDoodle();
i = setInterval(removeDoodle, 1);