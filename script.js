const share = document.querySelectorAll('.card-share');
const author = document.querySelector('.card-author');
const menu = document.querySelector('.share-menu');
const media = window.matchMedia("(min-width: 650px)")

share.forEach((e) => {
    e.addEventListener('click', function () {
        hide(media, author, menu);
    })
})

function hide(x, y) {
}

function hide(size, x, y) {
    if (size.matches) {
        if (y.classList.contains('hidden')) {
            y.classList.remove('hidden');
        } else {
            y.classList.add('hidden');
        }
    } else {
        if (x.classList.contains('hidden')) {
            x.classList.remove('hidden');
            y.classList.add('hidden');
        }

        else {
            y.classList.remove('hidden');
            x.classList.add('hidden');
        }
    }
}