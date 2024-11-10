const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');

// Function to move to the next photo
function nextPhoto() {
  slider.append(items[0]); // Moves the first item to the end of the list
}

// Attach event listeners to each photo
items.forEach((item) => {
  item.addEventListener('click', nextPhoto);
});
