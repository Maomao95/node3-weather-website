console.log('Client side is working');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('.message-1');
const messageTwo = document.querySelector('.message-2');

messageOne.textContent = 'Loading... ';
weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  if (!search.value) {
    messageOne.textContent = 'You must provide a locaiton!';
  }
  const location = search.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
