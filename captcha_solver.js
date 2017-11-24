var btnGetImage = document.createElement('button');
btnGetImage.onclick = downloadCaptchaImage;

document.body.appendChild(btnGetImage);

var btnGetImageText = document.createTextNode("Get image");
btnGetImage.appendChild(btnGetImageText);

var btnWriteAnswer = document.createElement('button');
btnWriteAnswer.onclick = writeAnswerInCaptchaInput;
document.body.appendChild(btnWriteAnswer);

var btnWriteAnswerText = document.createTextNode("Write in input");
btnWriteAnswer.appendChild(btnWriteAnswerText);

function downloadCaptchaImage() {
    var canvas = getRawImage(config.captchaImage);

    var link = document.createElement('a');
    link.setAttribute('download', 'captcha.bmp');
    link.setAttribute('href', canvas.toDataURL('image/bmp'));

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function writeAnswerInCaptchaInput() {
    var inputElement = config.inputElement;
    inputElement.value = 'Hello World';
}

/**
 * Gets raw image data from Image element
 * @param {Image} img
 * @returns {HTMLElement} canvas
 */
function getRawImage(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    return canvas;
}
