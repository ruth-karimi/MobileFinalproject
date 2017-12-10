function takePicture(){
	navigator.camera.getPicture(onSuccess, onFail,
{
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.CAMERA
});
}

function onSuccess(imageData) {
    var image = document.getElementById('img');
   image.src = "data:image/jpeg;base64," + imageData;
}
 
function onFail(message) {
    alert('Failed because: ' + message);
}


// Reposition the popover if the orientation changes.
window.onorientationchange = function() {
    var cameraPopoverHandle = new CameraPopoverHandle();
    var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
    cameraPopoverHandle.setPosition(cameraPopoverOptions);
}

function attachImage(){
	navigator.camera.getPicture(onSuccess1, onFail1,
{
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
});
}

function onSuccess1(imageData) {
    var image = document.getElementById('img');
   image.src = "data:image/jpeg;base64," + imageData;
}
 
function onFail1(message) {
    alert('Failed because: ' + message);
}