function clickFunction(){

let ourBackground = document.querySelector("html")
ourBackground.style.backgroundColor = " rgb(21, 150, 73)";
}

function updateDateTime() {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString('sv-SE');

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector('#datetime').textContent = currentDateTime;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 0);