const constraints = {
  'video': true,
  'audio': true
}

navigator.mediaDevices.getUserMedia(constraints)
  .then(stream => {
    console.log('Got MediaStream:', stream);
})
  .catch(error => {
    console.log('Error accessing media devices.', error);
});

