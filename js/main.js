const conteiner = document.querySelector('.conteiner');

//pop it item
const popitConteniner = document.querySelector('.popit'),
    popitItem = popitConteniner.querySelectorAll('.popit-item');

popitItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('popit-item_insert');
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