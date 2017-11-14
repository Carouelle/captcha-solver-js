function getCaptchaImage() {
    var imageNode = submitForm.getElementsByTagName('img')[0];

    var rawImage = getRawImage(imageNode);
    
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

/**
 * Gets raw image data from img node
 * @param {Node} img
 * @returns {ImageData}
 */
function getRawImage(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
