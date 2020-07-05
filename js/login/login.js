mui.init();

var dom_login_btn = document.getElementById("login");
dom_login_btn.addEventListener('tap', function(e) {

	var sname = document.getElementById("account").value.trim();
	var spass = document.getElementById("password").value.trim();
	
	//用户输入检查
	if (sname.trim().length == 0) {
		mui.toast("用户名不能为空!");
		return;
	} else if (spass.trim().length == 0) {
		mui.toast("密码不能为空!!");
		return;
	} else {

		//要提交的地址和参数
		var url = 'https://www2.timuwork.com/post/user/login?uname=' + sname +
					'&upass=' + spass;
		localStorage.setItem('uname', sname);

		//调用MUI的ajax方法获取结果
		mui.ajax(url, {
			data: {},
			type: 'post',
			timeout: 10000,
			success: function(data) {
				if (data == 0) {
					mui.toast('登录失败，请检查用户名和密码');
				} else {
					console.log(data)
					mui.toast('登录成功!!');
					localStorage.setItem('uid', data);
					
					//登录完跳下一个窗口，我先给你们注释掉了
					mui.openWindow({
					    url: 'index.html'
					});
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('登录失败，请检查用户名和密码');
			}
		});
	}
});
