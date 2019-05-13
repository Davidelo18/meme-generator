const memeTemplate = document.querySelectorAll('.meme-template');
const radioTemplate = document.querySelectorAll('.radio-template');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const generateBtn = document.getElementById('genereteBtn');
const memeForm = document.getElementById('memeForm');
const memeCanvas = document.getElementById('memeArea');
const ctx = memeCanvas.getContext('2d');

memeCanvas.height = memeCanvas.width = 0;

memeForm.addEventListener('submit', (e) => {
    if (topText.value == '' || bottomText.value == '') {
        e.preventDefault();
        alert('Write some text to meme');
        return false;
    } else if () {
        e.preventDefault();
        alert('Choose one template to meme');
        return false;
    }

    let template = new Image();
    radioTemplate.forEach((radio, index, theArray) => {if (theArray[index].checked == true) template.src = memeTemplate[index].src});

    generateMeme(template, topText.value, bottomText.value);
});

function generateMeme(template, top, bottom) {
    memeCanvas.width = template.width;
    memeCanvas.height = template.height;
    ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
    ctx.drawImage(template, 0, 0);

    const fontSize = memeCanvas.width / 15;
    ctx.font = `${fontSize}px Impact`; 
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    ctx.textAlign = 'center';

    ctx.textBaseline = 'top';
    ctx.fillText(top.toUpperCase(), memeCanvas.width / 2, 5, memeCanvas.width);
    ctx.strokeText(top.toUpperCase(), memeCanvas.width / 2, 5, memeCanvas.width);

    ctx.textBaseline = 'bottom';
    ctx.fillText(bottom.toUpperCase(), memeCanvas.width / 2, memeCanvas.height, memeCanvas.width);
    ctx.strokeText(bottom.toUpperCase(), memeCanvas.width / 2, memeCanvas.height, memeCanvas.width);
}