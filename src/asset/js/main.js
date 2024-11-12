// ============== navbar =================
const navigation = document.querySelector('.nav__navigation');
const toggle = document.querySelector('.nav__toggle');
const close = document.querySelector('.nav__close');
const link = document.querySelectorAll('.nav__menu__item');
const icon = document.querySelectorAll('.nav__icon__item');

toggle.onclick = () => {
      navigation.classList.add('show-menu');
      link.forEach((item) => {
            item.classList.remove('nav__active');
      })
}
close.onclick = () => {
      navigation.classList.remove('show-menu');
}
document.addEventListener('click',(e) => {
      if(!toggle.contains(e.target) && !navigation.contains(e.target)) {
            navigation.classList.remove('show-menu');
      }
});