let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelectorAll('.container .thumb');

btnNext.onclick = () => moveItemsOnClick('next');
btnPrev.onclick = () => moveItemsOnClick('prev');

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if (type === 'next') {
        list.append(listItems[0]);
        thumb.append(thumbItems[0]);
        container.classList.add('next');
        
    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('prev');
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('prev');
    }, 3000);
}
