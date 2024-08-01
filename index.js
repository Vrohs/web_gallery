const urlInput = document.querySelector('#url');
const submitButton = document.querySelector('#btn');
const imageElement = document.querySelector('#image');

let imageUrls = [];
let currentImageIndex = 0;

if (urlInput && submitButton && imageElement) {
    submitButton.addEventListener('click', addImage);
    document.addEventListener('keydown', handleKeyNavigation);

    function addImage() {
        const imageUrl = urlInput.value.trim();
        if (imageUrl) {
            imageUrls.push(imageUrl);
            currentImageIndex = imageUrls.length - 1;
            updateImage();
            urlInput.value = '';
        }
    }

    function updateImage() {
        if (imageUrls.length > 0) {
            imageElement.setAttribute('src', imageUrls[currentImageIndex]);
            console.log('Image URL set to:', imageUrls[currentImageIndex]);
        }
    }

    function handleKeyNavigation(event) {
        if (event.key === 'p' || event.key === 'P') {
            navigatePrevious();
        } else if (event.key === 'n' || event.key === 'N') {
            navigateNext();
        }
    }

    function navigatePrevious() {
        if (imageUrls.length > 0) {
            currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
            updateImage();
        }
    }

    function navigateNext() {
        if (imageUrls.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            updateImage();
        }
    }
}