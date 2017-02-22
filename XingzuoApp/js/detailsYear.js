$(function() {
	var zhi = sessionStorage.getItem("INDEX_START_EN");
	var INDEX_START_CH = sessionStorage.getItem("INDEX_START_CH");
	$(".star:eq(0)").html(INDEX_START_CH);

	$.ajax({ //数据的获取
		url: "http://route.showapi.com/872-1",
		type: "get",
		data: {
			"star": zhi,
			"showapi_appid": "28875",
			"showapi_sign": "04df5f955e264e49be1c0fca95a92ce2",
			"needYear": "1"
		}, //可以传数据
		dataType: "json", //返回的数据类型
		success: function(data) {
			$(".star:eq(0)").html(data.showapi_res_body.star);
			//console.log(data.showapi_res_body.year.summary_star)
			//data.showapi_res_body.channelList[0].name
			//$("table").append("<tr><td>"+(i+1)+"</td><td><a href=''>"+data.showapi_res_body.channelList[i].name+"</a></td></tr>");
			$(".info0:eq(0)").html(data.showapi_res_body.year.time);
			$(".info1:eq(0)").html(data.showapi_res_body.year.general_index);
			$(".info2:eq(0)").html(data.showapi_res_body.year.love_index);
			$(".info3:eq(0)").html(data.showapi_res_body.year.money_index);
			$(".info4:eq(0)").html(data.showapi_res_body.year.work_index);
			$(".info5:eq(0)").html(data.showapi_res_body.year.oneword);
			$(".info6:eq(0)").html(data.showapi_res_body.year.general_txt);
			$(".info7:eq(0)").html(data.showapi_res_body.year.love_txt);
			$(".info8:eq(0)").html(data.showapi_res_body.year.work_txt);
			$(".info9:eq(0)").html(data.showapi_res_body.year.money_txt);
			$(".info10:eq(0)").html(data.showapi_res_body.year.health_txt);

		},
		error: function() {
			alert("系统升级中");
		}
	});
});