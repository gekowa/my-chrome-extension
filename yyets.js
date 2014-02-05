

// $().ready(function () {
// 	$("#ad_couplet").remove();
// });

// var adCouplet = setInterval(function () {
// 	if ($("#ad_couplet").length > 0) {
// 		$("#ad_couplet").remove();
// 		clearInterval(adCouplet);
// 	}
// }, 100);

// var footRightBottom = setInterval(function () {
// 	if ($("#ft_right_bottom").length > 0) {
// 		$("#ft_right_bottom").remove();
// 		clearInterval(footRightBottom);
// 	}
// }, 100);



var removeElement = function (id, interval) {
	window[id] = setInterval(function () {
		if ($("#" + id).length > 0) {
			$("#" + id).remove();
			clearInterval(window[id]);
		}
	}, 100);
};

removeElement("ad_couplet", 100);
removeElement("ft_right_bottom", 100);
removeElement("cs_right_bottom", 100);

var begin = new Date(), i,
	removeAds = function () {
		$("iframe, ins, div").each(function (i, ele) {
			if (/tanxssp/.test(ele.id) ||
				/baidu/.test(ele.id) ||
				/cpro/.test(ele.id) ||
				/aswift/.test(ele.id) ||
				/xcy/.test(ele.id) ||
				/MZADX/.test(ele.id) ||
				/__QY/.test(ele.id)) {
				$(ele).remove();
			}
		});



		if (new Date() - begin >= 20000) {
			clearInterval(i);
		}
	};

i = setInterval(removeAds, 1);
