var cord;
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
	onDeviceReady();
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

	request.open("GET","https://kariedesign.000webhostapp.com/functions.php?title="+title+"&description="+description+"&location="+cord+,true);
	request.send();
}
function move(){
	window.location.assign("register.html");
}


function move2(){
	window.location.assign("index.html");
}

// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//

//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
	cord = position.coords.latitude+","+position.coords.longitude;
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

