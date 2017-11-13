function getCaptchaImage() {
    var imageNode = submitForm.getElementsByTagName('img')[0];

    var result = getBase64Image(imageNode);
    alert(result);
}

function writeAnswerInCaptchaInput() {
    var inputForm = document.getElementsByName('noCaptcha')[0];
    inputForm.value = 'Hello World'
}

var submitForm = document.getElementsByName('form1')[0];
var btnGetImage = document.createElement('button');
btnGetImage.onclick = getCaptchaImage;
document.body.appendChild(btnGetImage);

var btnGetImageText = document.createTextNode("Get Base64 image");
btnGetImage.appendChild(btnGetImageText);

var btnWriteAnswer = document.createElement('button');
btnWriteAnswer.onclick = writeAnswerInCaptchaInput;
document.body.appendChild(btnWriteAnswer);

var btnWriteAnswerText = document.createTextNode("Write in input");
btnWriteAnswer.appendChild(btnWriteAnswerText);

// From https://stackoverflow.com/a/934925
function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
