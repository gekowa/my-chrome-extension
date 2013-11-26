var begin = new Date(), i,
	removeAds = function () {
		$("iframe, ins").each(function (i, ele) {
			if (/tanxssp/.test(ele.id) ||
				/baidu/.test(ele.id) ||
				/cpro/.test(ele.id) ||
				/aswift/.test(ele.id)) {
				$(ele).remove();
			}
		});



		if (new Date() - begin >= 20000) {
			clearInterval(i);
		}
	};

i = setInterval(removeAds, 1);
