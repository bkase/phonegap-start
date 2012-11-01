var takePicture = (function() { 
  var picSource, destType;

  // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
      alert("I'm all done");
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }

  return function() {
    picSource = navigator.camera.PictureSourceType;
    destType = navigator.camera.DestinationType;
    // Take picture using device camera, and retrieve image as base64-encoded string  
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
        { quality: 50, destinationType: destinationType.DATA_URL });
  };
})(); 
