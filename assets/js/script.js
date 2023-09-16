// JavaScript to open a popup when a thumbnail is clicked
function openReport(reportUrl) {
    // Get a reference to the modal popup container
    const modal = document.querySelector('.modal-container');

    // Get a reference to the iframe inside the modal
    const iframe = document.getElementById('powerBiReport');

    // Set the src attribute of the iframe to the report URL
    iframe.src = reportUrl;

    // Show the modal popup
    modal.style.display = 'block';

    // Prevent the background from scrolling when the modal is open
    document.body.style.overflow = 'hidden';
}

// JavaScript to close the popup
function closeModal() {
    // Get a reference to the modal popup container
    const modal = document.querySelector('.modal-container');

    // Hide the modal popup
    modal.style.display = 'none';

    // Allow the background to scroll again
    document.body.style.overflow = 'auto';
}
