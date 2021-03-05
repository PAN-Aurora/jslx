


var vm = new Vue({
	el: '#app',

	data:{
		FHBUTTON_ID: '',	//主键ID
		pd: [],				//存放字段参数
		code: '',			//包裹按钮的代码
		msg:'add'
    },

	methods: {

        //初始执行
        init() {
        	var FID = getUrlKey('FID');	//当接收过来的FID不为null时,表示此页面是修改进来的
        	if(null != FID){
        		this.msg = 'edit';
        		this.FHBUTTON_ID = FID;
        		this.getData();
        	}
        },

        //去保存
    	save: function (){
            if (!validateForm()) {
                return false;
            }

    		$("#showform").hide();
    		$("#jiazai").show();

            //发送 post 请求提交保存
            $.ajax({
	            	xhrFields: {
	                    withCredentials: true
	                },
					type: "POST",
					url: httpurl+'fhbutton/'+this.msg,
			    	data: {FHBUTTON_ID:this.FHBUTTON_ID,NAME:this.pd.NAME,SHIRO_KEY:this.pd.SHIRO_KEY,BZ:this.pd.BZ,tm:new Date().getTime()},
					dataType:"json",
					success: function(data){
                        if("success" == data.result){
                        	message('success', '保存成功', 1000);
                        	setTimeout(function(){
                        		top.Dialog.close();//关闭弹窗
                            },1000);
                        }else if ("exception" == data.result){
                        	showException("按钮模块",data.exception);//显示异常
                        	$("#showform").show();
                    		$("#jiazai").hide();
                        }
                    }
				}).done().fail(function(){
                   message('warning', '请求服务器无响应，稍后再试!', 1000);
                   $("#showform").show();
           		   $("#jiazai").hide();
                });
    	},

    	//根据主键ID获取数据
    	getData: function(){
    		//发送 post 请求
            $.ajax({
            	xhrFields: {
                    withCredentials: true
                },
				type: "POST",
				url: httpurl+'fhbutton/goEdit',
		    	data: {FHBUTTON_ID:this.FHBUTTON_ID,tm:new Date().getTime()},
				dataType:"json",
				success: function(data){
                     if("success" == data.result){
                     	vm.pd = data.pd;							//参数map
                     	vm.changecode(data.pd.SHIRO_KEY);			//包裹按钮的代码
                     }else if ("exception" == data.result){
                     	showException("按钮模块",data.exception);	//显示异常
                     	$("#showform").show();
                 		$("#jiazai").hide();
                     }
                  }
			}).done().fail(function(){
                  message('warning', '请求服务器无响应，稍后再试!', 1000);
                  $("#showform").show();
          		  $("#jiazai").hide();
               });
    	},

    	//拼代码
    	changecode: function(value){
    		this.code = '<a v-show="'+value+'" class="btn btn-light btn-sm">按钮</a>';
    	},
	},

	mounted(){
        this.init();
    }
})
