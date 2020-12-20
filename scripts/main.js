let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/milwaukee-art-museum1.jpg') {
        myImage.setAttribute('src', 'images/milwaukee-lakefront.jpg');
    } else {
        myImage.setAttribute('src', 'images/milwaukee-art-museum1.jpg')
    }
}

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Milwaukee is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Milwaukee is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
  }