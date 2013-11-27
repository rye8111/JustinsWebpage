function CSZ () {
	$("#contain").css({"margin-top": 0});
	var hi = $(document).height();
	var wan = $("#contain").height();
	hi -= wan;
	hi /= 2;
	$("#contain").css({"margin-top": hi});
};
function ADZ () {
	var dochi = $(document).height();
	dochi = (dochi - 240) / 2;
	$("#ads").css({"top": dochi});
};
function BAK () {
	var bachi = $(document).height();
	bachi = (bachi - 100) / 2;
	$("#fow").css({"top": bachi});
	var bacwi = $(document).width();
	bacwi = (bacwi - $("#comi").width());
	bacwi = bacwi / 2;
	bacwi = bacwi - 70;
	$("#fow").css({"right": bacwi});
};
function FOW () {
	var fowhi = $(document).height();
	fowhi = (fowhi - 100) / 2;
	$("#bak").css({"top": fowhi});
	var fowwi = $(document).width();
	fowwi = (fowwi - $("#comi").width());
	fowwi = fowwi / 2;
	fowwi = fowwi - 70;
	$("#bak").css({"left": fowwi});
};
$(window).load(
	function () {
  		$(CSZ);
		$(ADZ);
		$(BAK);
		$(FOW);
});
$(window).resize(
	function () {
		$(CSZ);
		$(ADZ);
		$(BAK);
		$(FOW);
});