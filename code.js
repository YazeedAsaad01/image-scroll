// Define an object containing image URLs
const imagesUrl = {
    image1: '1.jpeg',
    image2: '2.jpg',
    image3: '3.jpg',
    image4: '4.jpeg',
    image5: '5.png',
    image6: '6.jpeg',
    image7: '7.jpeg',
    image8: '8.jpg',
    image9: '9.png',
    image10: '10.jpg',
    image11: '11.jpeg',
    image12: '12.png',
};

// Get references to the right and left arrow buttons
const rightImage = document.querySelector('.right');
const leftImage = document.querySelector('.left');

// Initialize the currentIndex variable to 0
let currentIndex = 0;

// Function to display the image corresponding to the given index
function showImage(index) {
    // Get a reference to the img element within the .imgWrap container
    const imagePlaceHolder = document.querySelector('.imgWrap img');
    // Set the src attribute of the img element to the URL of the image at the given index
    imagePlaceHolder.src = imagesUrl[`image${index + 1}`];
};

// Function to display the next image
function nextImage() {
    // Increment currentIndex to move to the next image
    currentIndex++;
    // If currentIndex reaches the end of the images, loop back to the first image
    if (currentIndex === Object.keys(imagesUrl).length) {
        currentIndex = 0;
    }
    // Display the image corresponding to the updated currentIndex
    showImage(currentIndex);
};

// Function to display the previous image
function prevImage() {
    // Decrement currentIndex to move to the previous image
    currentIndex--;
    // If currentIndex becomes negative, loop back to the last image
    if (currentIndex < 0) {
        currentIndex = Object.keys(imagesUrl).length - 1;
    }
    // Display the image corresponding to the updated currentIndex
    showImage(currentIndex);
};

// Attach event listeners to the right and left arrow buttons to trigger image navigation
rightImage.addEventListener('click', nextImage);
leftImage.addEventListener('click', prevImage);