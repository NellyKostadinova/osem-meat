$('document').ready(() => {
  osemNav();
});

const osemNav = () => {
  $('header nav li li.active').closest('ul').css('display', 'block');
}