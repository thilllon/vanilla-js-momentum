const NUMBER_OF_IMAGES = 4;

const changeBodyBackgroundImage = () => {
  const imgNum = Math.ceil(Math.random() * NUMBER_OF_IMAGES);
  document.body.classList.add('__type' + imgNum);
};

// https://unsplash.com/documentation
const paintImage = () => {
  // fetch('https://api.unsplash.com/photos/random')
  //   .then((res) => {})
  //   .catch((rej) => {});
};

const init = () => {
  // paintImage();
  changeBodyBackgroundImage();
};

init();
