
// Changes text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = "Text has been changed!";
  }
  
  // Modifies CSS styles via JavaScript
  function toggleStyle() {
    const textElement = document.getElementById('dynamicText');
    textElement.style.color = textElement.style.color === 'red' ? 'blue' : 'red';
    textElement.style.fontWeight = textElement.style.fontWeight === 'bold' ? 'normal' : 'bold';
  }
  
  // Adds or removes an element when a button is clicked
  let isElementAdded = false;
  
  function addOrRemoveElement() {
    const container = document.getElementById('container');
    if (!isElementAdded) {
      const newElement = document.createElement('p');
      newElement.id = 'dynamicPara';
      newElement.textContent = 'This paragraph was added dynamically by Kelvin using js and html as I Wait to specialize in the MERN stack'
      newElement.style.color = 'green';
      container.appendChild(newElement);
    } else {
      const para = document.getElementById('dynamicPara');
      if (para) container.removeChild(para);
    }
    isElementAdded = !isElementAdded;
  }


  