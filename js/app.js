const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const generateBtn = document.getElementById('genereteBtn');
const memeForm = document.getElementById('memeForm');
const memeCanvas = document.getElementById('memeArea');
const ctx = memeCanvas.getContext('2d');

memeForm.addEventListener('submit', (e) => {
    if (topText.value == '' || bottomText.value == '') {
        e.preventDefault();
        alert('Write some text to meme');
    }

    
});

function generateMeme(template) {
    memeCanvas.width = template.width;
    memeCanvas.height = template.height;
    ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
    ctx.drawImage(template, 0, 0);
}