const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');
const CN_HIDDEN = 'hidden';
const ONE_SECOND_IN_MILLISECOND = 1000;
const BUTTON_TEXT = '✖️';
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const toggleColon = (flag) => {
  const colon = clockContainer.querySelector('.colon');
  if (flag) {
    colon.classList.remove(CN_HIDDEN);
  } else {
    colon.classList.add(CN_HIDDEN);
  }
};

const getTime = (isBlinkable) => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds() % 2;
  const day = DAYS_OF_WEEK[date.getDay()];
  const dateString = `${new Date().toISOString().substr(0, 10).split('-').join('/')} (${day})`;
  clockTitle.innerHTML =
    `<div class="time"><span>${hour}</span><span class="colon">:</span><span>${minute}</span></div>` +
    `<div class="date"><span>${dateString}</span></div>`;
  isBlinkable && toggleColon(date.getSeconds() % 2 === 0);
};

const getTimeWithoutBlink = () => {
  const date = new Date();
  const time = date.toISOString().substr(11, 5);
  const day = DAYS_OF_WEEK[date.getDay()];
  clockTitle.innerText = `${time} (${day})`;
};

const init = () => {
  getTime(true); // for initial rendering
  setInterval(() => {
    getTime(true);
  }, ONE_SECOND_IN_MILLISECOND);
};

init();
