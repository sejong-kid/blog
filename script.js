document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file.');
        return;
    }

    // Create a new div element after file upload
    createDivWithImage(file);
});

function createDivWithImage(file) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.onload = () => {
        URL.revokeObjectURL(img.src); // Free up memory
    };

    newDiv.appendChild(img);
    container.appendChild(newDiv);
}