/**
 * 工具类
 */
;!function() {
	// ajax调用
	$.getResult = function(funcNo, param) {
		if (funcNo != 0)
			param.funcNo = funcNo;
		var url = 'http://120.78.215.211/servlet/json';
		$.ajax({
			url : url,
			type : 'post',
			cache : false,
			data : param,
			dataType : 'json',
			success : function(data) {
				return data;
			},
			error : function(data) {
				//
			}
		});
	};
	// 设置session
	$.setStorage = function(name, value) {
		return window.localStorage.setItem(name, value);
	};
	// 获取session
	$.getStorage = function(name) {
		return window.localStorage.getItem(name);
	};
	// 设置cookie，expMinute（分钟）
	$.setCookie = function(name, value, expMinute) {
		var exp = new Date();
		if ("" != expMinute && typeof (exp) != undefined)
			exp.setTime(exp.getTime() + expMinute * 60 * 1000);
		else
			exp.setTime(exp.getTime() + 10 * 60 * 1000);
		document.cookie = name + '=' + escape(value) + ';expires='
				+ exp.toGMTString();
	};
	// 获取cookie
	$.getCookie = function(name) {
		var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
		if (arr = document.cookie.match(reg))
			return unescape(arr[2]);
		else
			return null;
	}
}();
