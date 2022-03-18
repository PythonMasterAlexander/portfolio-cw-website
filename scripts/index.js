import { workPlaces } from "./components/component.js";

const listOfEducationContainer = document.querySelector('.main-container__work-container-list');

workPlaces.forEach((workPlace) => {

  const liElement = document.createElement('li');
  liElement.innerText = workPlace;

  listOfEducationContainer.append(liElement);
});