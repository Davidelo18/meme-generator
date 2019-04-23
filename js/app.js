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
    }

    let template = new Image();
    radioTemplate.forEach((radio, index, theArray) => {if (theArray[index].checked == true) template.src = memeTemplate[index].src});

    generateMeme(template);
    console.log(template);
});

function generateMeme(template) {
    memeCanvas.width = template.width;
    memeCanvas.height = template.height;
    ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
    ctx.drawImage(template, 0, 0);
}