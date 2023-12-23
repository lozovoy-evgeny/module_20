"use strict";
// Функция проверки состояния радиокнопок, возвращает порядковый номер выбранной кнопки
function checkRadioButtons (array) {
  x = 1;
  for (var element of array) {
    if (element.checked) {
      return x;
    }
    x++;
  }
}

// Функция для обновления контента в realize-conteiner
function updateBox() {
  var radios1 = document.getElementsByName('radio1');

  let x = 1;
// Сначала все элементы прячем
  for (let index of radios1) {
    let box = document.getElementById(`box${x}`);
    box.style.display = 'none';

    x++;
  }
// Показываем только те элементы, которые требуются в зависимости от порядкового номера радио-кнопки
  var radio = checkRadioButtons(radios1);

  let box = document.getElementById(`box${radio}`);
  box.style.display = 'flex';
}

// Функция для обновления контента в completed-projects-description
function handleRadioClick1() {

  var radios2 = document.getElementsByName('radio2');
  let x = 1;
// Сначала все элементы прячем ии выключаем уникальные стили
  for (let index of radios2) {
    let projectsBox = document.getElementById(`projectsBox${x}`);
    let infoProjects = document.getElementById(`infoProjects${x}`);
    let imgProjects = document.getElementById(`imgProjects${x}`);

    projectsBox.style.display = 'none';
    infoProjects.className = `completed-projects-info-visualization-${x} off`;
    imgProjects.style.display = 'none';

    x++;
  }
 // Показываем только те элементы, которые требуются в зависимости от порядкового номера радио-кнопки 
  var radio = checkRadioButtons(radios2);

  let projectsBox = document.getElementById(`projectsBox${radio}`);
  let infoProjects = document.getElementById(`infoProjects${radio}`);
  let imgProjects = document.getElementById(`imgProjects${radio}`);


  projectsBox.style.display = 'grid';
  infoProjects.className = `completed-projects-info-visualization-${radio} on`;
  imgProjects.style.display = 'grid';
}
// Функции для изменения значений радио-кнопок стрелками
function arrowLeft() {
  if (document.getElementById('radioProjects1').checked) {
    document.getElementById('radioProjects3').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects3').checked) {
    document.getElementById('radioProjects2').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects2').checked) {
    document.getElementById('radioProjects1').checked = true;
    handleRadioClick1();
  }
}

function arrowRight() {
  if (document.getElementById('radioProjects1').checked) {
    document.getElementById('radioProjects2').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects2').checked) {
    document.getElementById('radioProjects3').checked = true;
    handleRadioClick1();
  } else if (document.getElementById('radioProjects3').checked) {
    document.getElementById('radioProjects1').checked = true;
    handleRadioClick1();
  }
}
// Слушатели радиокнопок
const radioButtons = document.querySelectorAll('input[name="radio1"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', updateBox);
});

const radioButtons1 = document.querySelectorAll('input[name="radio2"]');
radioButtons1.forEach(radio => {
  radio.addEventListener('click', handleRadioClick1);
});

// Запуск видео на странице
var playButton = document.getElementById("playButton");
var myVideo = document.getElementById("myVideo");

playButton.addEventListener('click', function() {
  if (myVideo.paused) {
    myVideo.setAttribute("controls", "controls");
    myVideo.play();
    playButton.style.visibility = "hidden";
  } else {
    myVideo.pause();
  }
});

// Слайдер блока completed-projects-description
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  })

  if (slideIndex === 0) {
    projectsBox1.style.display = 'grid';
  } else {
    projectsBox1.style.display = 'none';
  }
  if (slideIndex === 1) {
    projectsBox2.style.display = 'grid';
  } else {
    projectsBox2.style.display = 'none';
  }
  if (slideIndex === 2) {
    projectsBox3.style.display = 'grid';
  } else {
    projectsBox3.style.display = 'none';
  };
}

updateSlider();

// Слайдер блока realize-mobile
const sliderRealize = document.querySelector('.slider-realize');

const prevButtonRealize = document.querySelector('.prev-button-realize');
const nextButtonRealize = document.querySelector('.next-button-realize');

const slidesRealize = Array.from(sliderRealize.querySelectorAll('img'));

const slideCountRealize = slidesRealize.length;

let slideIndexRealize = 0;

prevButtonRealize.addEventListener('click', showPreviousSlideRealize);
nextButtonRealize.addEventListener('click', showNextSlideRealize);

function showPreviousSlideRealize() {
  slideIndexRealize = (slideIndexRealize - 1 + slideCountRealize) % slideCountRealize;
  updateSliderRealize();
}

function showNextSlideRealize() {
  slideIndexRealize = (slideIndexRealize + 1) % slideCountRealize;
  updateSliderRealize();
}

function updateSliderRealize() {
  slidesRealize.forEach((slide, index) => {
    if (index === slideIndexRealize) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  })
}

updateSliderRealize();