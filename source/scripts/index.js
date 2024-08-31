/* в этот файл добавляет скрипты*/
const buttonDropList = document.querySelector('.navigation__drop');
const dropListNav = document.querySelector('.navigation__drop-list');

if (buttonDropList && dropListNav) {
  buttonDropList.addEventListener('click', (evt) => {
    evt.preventDefault();
    dropListNav.classList.toggle('navigation__drop-list--show');
  });
}
