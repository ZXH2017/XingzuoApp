$(function() {
	var zhi = sessionStorage.getItem("INDEX_START_EN");
	var INDEX_START_CH = sessionStorage.getItem("INDEX_START_CH");
	$(".star:eq(0)").html(INDEX_START_CH);

	$.ajax({ //数据的获取
		url: "http://route.showapi.com/872-1?",
		type: "get",
		data: {
			"star": zhi,
			"showapi_appid": "28875",
			"showapi_sign": "04df5f955e264e49be1c0fca95a92ce2",
			"needTomorrow": "1"
		}, //可以传数据
		dataType: "json", //返回的数据类型
		success: function(data) {
			$(".star:eq(0)").html(data.showapi_res_body.star);
			//console.log(data.showapi_res_body.tomorrow.summary_star)
			//data.showapi_res_body.channelList[0].name
			//$("table").append("<tr><td>"+(i+1)+"</td><td><a href=''>"+data.showapi_res_body.channelList[i].name+"</a></td></tr>");
			switch(data.showapi_res_body.tomorrow.summary_star) {
				case 1:
					$(".summary_star").addClass("info11");
					break;
				case 2:
					$(".summary_star").addClass("info12");
					break;
				case 3:
					$(".summary_star").addClass("info13");
					break;
				case 4:
					$(".summary_star").addClass("info14");
					break;
				case 5:
					$(".summary_star").addClass("info15");
					break;
			}
			$(".info2:eq(0)").html(data.showapi_res_body.tomorrow.lucky_num);
			$(".info3:eq(0)").html(data.showapi_res_body.tomorrow.grxz);
			$(".info4:eq(0)").html(data.showapi_res_body.tomorrow.day_notice);
			$(".info5:eq(0)").html(data.showapi_res_body.tomorrow.love_txt);
			$(".info6:eq(0)").html(data.showapi_res_body.tomorrow.work_txt);
			$(".info7:eq(0)").html(data.showapi_res_body.tomorrow.money_txt);

		},
		error: function() {
			alert("系统升级中");
		}
	});
});