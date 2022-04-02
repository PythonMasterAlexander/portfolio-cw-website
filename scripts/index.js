import { workPlaces } from "./components/component.js";
import { listOfEducationContainer } from "./components/component.js";

/*
for(let i = 0; i < workPlaces.length; i++) {

  let listItem = document.createElement('li');
  listItem.innerText = workPlaces[i];

  listOfEducationContainer.append(listItem);
}*/

workPlaces.forEach(function(item) {
  let listItem = document.createElement('li');
  listItem.innerText = item;

  listOfEducationContainer.append(listItem);
});

