const LocStor_USERNAME = 'userName';
const CN_DISP_NONE = 'display-none';
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('#greeting');

const saveName = (name) => {
  localStorage.setItem('userName', name);
};

const handleClick = (event) => {
  event.preventDefault();
  localStorage.removeItem(LocStor_USERNAME);
  loadName();
};

const handleSubmit = (event) => {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue.split(' ').join('').length > 0) {
    saveName(inputValue);
    paintGreeting(inputValue);
    input.value = '';
    form.classList.add(CN_DISP_NONE);
  }
};

const askForName = () => {
  greeting.classList.add(CN_DISP_NONE);
  form.classList.remove(CN_DISP_NONE);
  form.addEventListener('submit', handleSubmit);
};

const paintGreeting = (userName) => {
  let greetingMessage;
  let currentHour = new Date().getHours();
  if (5 <= currentHour && currentHour < 12) {
    greetingMessage = 'Good morning';
  } else if (12 <= currentHour && currentHour < 18) {
    greetingMessage = 'Good afternoon';
  } else if (18 <= currentHour && currentHour < 22) {
    greetingMessage = 'Good evening';
  } else {
    greetingMessage = 'Good night';
  }
  form.classList.add(CN_DISP_NONE);
  greeting.innerText = `${greetingMessage}, ${userName}`;
  greeting.classList.remove(CN_DISP_NONE);
  greeting.addEventListener('click', handleClick);
};

const loadName = () => {
  const userName = localStorage.getItem(LocStor_USERNAME);
  if (userName) {
    paintGreeting(userName);
  } else {
    askForName();
  }
};

const init = () => {
  loadName();
};

init();
