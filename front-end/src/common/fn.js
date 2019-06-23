/*
    公共方法定义，供其他地方调用
*/
export default {
	//格式化日期的方法
	dateFormat:function(val,fm){
		if(!val) return;
        if(String(val).length<13) val=val*1000;
		var date = new Date(val),
			o = {
				"M+" : date.getMonth()+1, //month
				"d+" : date.getDate(), //day
				"h+" : date.getHours(), //hour
				"m+" : date.getMinutes(), //minute
				"s+" : date.getSeconds(), //second
				"q+" : Math.floor((date.getMonth()+3)/3), //quarter
				"S" : date.getMilliseconds() //millisecond
			},
			format = fm || 'yyyy-MM-dd';
		if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
		(date.getFullYear()+"").substr(4- RegExp.$1.length));
		for(var k in o)if(new RegExp("("+ k +")").test(format))
		format = format.replace(RegExp.$1,
		RegExp.$1.length==1? o[k] :
		("00"+ o[k]).substr((""+ o[k]).length));
		return format;
	},

	/*大于等于零的整数，保留两位小数点*/
	number(num){
		var re = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
        var re1 = /^[1-9]\d*|0$/
		if(re.test(parseFloat(num)) || re1.test(parseFloat(num))){
			return parseFloat(num).toFixed(2);
		}else{
			return 0.00;
		}
	},
    /**
     * 判断对像是否为空
     * **/
    isEmptyObject(data){
        for(var key in data){
            return false;
        }
        return true;
    },
    /**
     * 获取当前时间
     * fm,form
     * {data} fm-要转换成什么样的格式
     * {data} form,是否有指定的时间段
     * **/
    getNowDate:function(data){
        var form = data.form;
        var format = typeof form != 'undefined'?'yyyy-MM-dd':data.fm || 'yyyy-MM-dd';
        var date = new Date(),
            o = {
                "M+" : date.getMonth()+1, //month
                "d+" : date.getDate(), //day
                "h+" : date.getHours(), //hour
                "m+" : date.getMinutes(), //minute
                "s+" : date.getSeconds(), //second
                "q+" : Math.floor((date.getMonth()+3)/3), //quarter
                "S" : date.getMilliseconds() //millisecond
            };
        if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
            (date.getFullYear()+"").substr(4- RegExp.$1.length));
        for(var k in o)if(new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length==1? o[k] :
                    ("00"+ o[k]).substr((""+ o[k]).length));
        typeof form != 'undefined'?format += ' ' + form:'';
        // console.log('formasfasdft',format);
        return format;
    },

    /*获取用户cookie*/
    getCookie(objname){
        var arrstr = document.cookie.split("; ");
        for(var i = 0;i < arrstr.length;i ++){
            var temp = arrstr[i].split("=");
            if(temp[0] == objname) return decodeURI(temp[1]);
        }
    },

    //生成唯一的uuid值传回后台
    uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;

        if (len) {
          // Compact form
          for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
          // rfc4122, version 4 form
          var r;

          // rfc4122 requires these characters
          uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
          uuid[14] = '4';

          // Fill in random data.  At i==19 set the high bits of clock sequence as
         // per rfc4122, sec. 4.1.5
         for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
              r = 0 | Math.random()*16;
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
          }
        }

        return uuid.join('');
    },
    
    //乘积精度
    accuracy(arg1,arg2){
        if(!arg1 || isNaN(Number(arg1))){
            return 0;
        }
        var m=0,s1=arg1.toString().replace(" ",""),s2=arg2.toString().replace(" ","");
        try{m+=s1.split(".")[1].length}catch(e){}
        try{m+=s2.split(".")[1].length}catch(e){}
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
    }     
}