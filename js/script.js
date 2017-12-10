function registerUser() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;
	var org = document.getElementById('org').value;
	var age = document.getElementById('age').value;
	var phone= document.getElementById('phone').value;

	var request = new XMLHttpRequest();

	request.onreadystatechange=function() {
		if (this.status == 200 && this.readyState == 4) {
			document.getElementById('mes').value=this.responseText;
		};
	}
	request.open("GET","http://localhost/MobileWeb/Final%20Project/App/App/Logic/functions.php?name="+name+"&email="+email+"&password="+pass+"&org="+org+"&age="+age+"&phonenumber="+phone,true);
	request.send();
}

function loginUser(){
	var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;

	var request = new XMLHttpRequest();

	request.onreadystatechange=function() {
		// alert(this.status +" and "+this.readyState);
		if (this.status == 200 && this.readyState == 4) {
			//document.getElementById('mes').value=this.responseText;
			alert(this.responseText);
			if (this.responseText === "success") {
							alert(this.responseText);
				window.location.assign("http://localhost/MobileWeb/Final%20Project/App/App/newPost.html");
			};
		};
	}
	request.open("GET","http://localhost/MobileWeb/Final%20Project/App/App/Logic/functions.php?email="+email+"&password="+pass,true);
	request.send();

}