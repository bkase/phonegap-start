var takePicture = (function() { 
  var picSource, destType;

  // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageURI) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      //var smallImage = document.getElementById('smallImage');

      //// Unhide image elements
      ////
      //smallImage.style.display = 'block';

      //// Show the captured photo
      //// The inline CSS rules are used to resize the image
      ////
      //smallImage.src = "data:image/jpeg;base64," + imageData;
      var image = document.getElementById('smallImage');
      image.src = imageURI;
      alert("I'm all done");
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }

  return function() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
        { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
  };
})(); 
