const myHeading = document.querySelector('h3');
myHeading.textContent = canidrink(20);

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function canidrink(age) {
  if(age > 20) {
    return 'yep';
  }
  else {
    return 'nope';
  }
}

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

