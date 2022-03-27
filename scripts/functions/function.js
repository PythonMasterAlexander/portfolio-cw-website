export const createElementFromArray = function(elementToCreat, array, containerElement) {

  for(let i = 0; i < array.length; i++) {
    let listItem = document.createElement(elementToCreat);
    listItem.innerText = array[i];

    return containerElement.append(listItem);
  }
}