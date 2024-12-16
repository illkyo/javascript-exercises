const removeFromArray = function(array, ...elementsToRemove) {
  let newArray = [];
  for (const element of array) {
    let removeElement = false;
    for (const elementToRemove of elementsToRemove) {
      if (element === elementToRemove) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      newArray.push(element);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
