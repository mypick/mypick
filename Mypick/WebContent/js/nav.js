function goCalc(){
	var frm = document.getElementById("navFrm");
	frm.toUrl.value="Calc";
	frm.method="POST";
	frm.action=hostUrl+"/Calc/";
	frm.submit();
}
function goEncl(){
	var frm = document.getElementById("navFrm");
	frm.toUrl.value="Encl";
	frm.method="POST";
	frm.action=hostUrl+"/Encl/";
	frm.submit();
}
function goComm(){
	var frm = document.getElementById("navFrm");
	frm.toUrl.value="Comm";
	frm.method="POST";
	frm.action=hostUrl+"/Comm/";
	frm.submit();
}

function login(navForm){
	var frm = document.getElementById("navFrm");
	if (frm.loginEmail.value.length == 0) {
		alert("이메일을 입력하세요.");
		frm.loginEmail.focus();
		return;
	}
	if (frm.loginPw.value.length == 0) {
		alert("비밀번호를 입력하세요.");
		frm.loginPw.focus();
		return;
	}
	frm.cmd.value="login";
	frm.action=hostUrl+"/Control/Confirm";
	frm.method="post";
	frm.submit();	
}

function logout() {
	var frm = document.getElementById("navFrm");
	frm.cmd.value="logout";
	frm.action=hostUrl+"/Control/Confirm";
	frm.submit();
}

function signin(frm){
	frm.action=hostUrl+"/User/Signin";
	frm.method="post";
	frm.submit();	
}

