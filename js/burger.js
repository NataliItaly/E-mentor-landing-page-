const burgerBtn = document.querySelector('.burger__button');
const headerLinks = document.querySelectorAll('.header__link');
const BODY = document.body;
const headerList = document.querySelector('.header__list');

burgerBtn.addEventListener('click', function() {
    console.log(burgerBtn);
    BODY.classList.toggle('block');
    headerList.classList.toggle('header__list_open');
});

if (headerList.classList.contains('header__list_open')) {
    headerList.addEventListener('click', function(event) {
        if (event.target.classList.contains('header__link')) {
            BODY.classList.remove("block");
            headerList.classList.remove("header__list_open");
        }
    });
}