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
	request.open("GET","https://kariedesign.000webhostapp.com/functions.php?name="+name+"&email="+email+"&password="+pass+"&org="+org+"&age="+age+"&phonenumber="+phone,true);
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
			if (this.responseText === "success") {
							alert(this.responseText);
				window.location.assign("addPost.html");
			};
		};
	}
	request.open("GET","https://kariedesign.000webhostapp.com/functions.php?email="+email+"&password="+pass,true);
	request.send();

}

function addPost(){
	var title = document.getElementById('title').value;
	var description = document.getElementById('description').value;

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if (this.status == 200 && this.readyState == 4) {
			if(this.responseText==="Report posted"){
			alert(this.responseText);
			};

		};
	}

	request.open("GET","https://kariedesign.000webhostapp.com/functions.php?title="+title+"&description="+description,true);
	request.send();
}
function move(){
	window.location.assign("register.html");
}


function move2(){
	window.location.assign("index.html");
}

