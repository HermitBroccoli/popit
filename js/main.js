const conteiner = document.querySelector('.conteiner');

//pop it item
const popitConteniner = document.querySelector('.popit'),
    popitItem = popitConteniner.querySelectorAll('.popit-item'),
    audio = document.querySelector('audio');

audio.pause();
audio.currentTime = 0;

popitItem.forEach(item => {
    item.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        item.classList.toggle('popit-item_insert');
        audio.play();
    });
});

//btns
const conteinerBtns = conteiner.querySelector('.btns'),
    clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    for (let i = 0; i < popitItem.length; i++) {
        popitItem[i].classList.remove('popit-item_insert');
    }
})