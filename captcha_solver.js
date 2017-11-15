var submitForm = document.getElementsByName('form1')[0];
var btnGetImage = document.createElement('button');
btnGetImage.onclick = getCaptchaImage;
document.body.appendChild(btnGetImage);

var btnGetImageText = document.createTextNode("Get image");
btnGetImage.appendChild(btnGetImageText);

var btnWriteAnswer = document.createElement('button');
btnWriteAnswer.onclick = writeAnswerInCaptchaInput;
document.body.appendChild(btnWriteAnswer);

var btnWriteAnswerText = document.createTextNode("Write in input");
btnWriteAnswer.appendChild(btnWriteAnswerText);

function getCaptchaImage() {
    var imageNode = submitForm.getElementsByTagName('img')[0];
    var rawImage = getRawImage(imageNode);

    var stringByteArray = "";
    for (var i = 0; i < rawImage.height * rawImage.width * 4; i++) {
        stringByteArray += rawImage.data[i] + ',';
    }

    location.href = 'data:text/plain:charset=utf-8,' + encodeURIComponent(stringByteArray);
}

function writeAnswerInCaptchaInput() {
    var inputForm = document.getElementsByName('noCaptcha')[0];
    inputForm.value = 'Hello World'
}

/**
 * Gets raw image data from Image element
 * @param {Image} img
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
