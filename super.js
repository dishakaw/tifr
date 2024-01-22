document.addEventListener('DOMContentLoaded', () => {
    const adminPanel = document.getElementById('adminPanel');
    const tileInput = document.getElementById('tileInput');

    const userPanel = document.getElementById('userPanel');
    const imageInput = document.getElementById('imageInput');
    const outputDiv = document.getElementById('output');
    const superimposedImage = document.getElementById('superimposedImage');

    let tileCollection = [];

    // Event listener for file input change in admin panel
    tileInput.addEventListener('change', handleTileUpload);

    // Event listener for file input change in user panel
    imageInput.addEventListener('change', handleImageUpload);

    // Function to handle tile upload in admin panel
    window.uploadTile = () => {
        const tileFile = tileInput.files[0];
        if (tileFile) {
            // For simplicity, storing tile data as a base64 string
            const reader = new FileReader();
            reader.onload = (e) => {
                tileCollection.push(e.target.result);
                alert('Tile uploaded successfully!');
            };
            reader.readAsDataURL(tileFile);
        }
    };

    // Function to handle image upload in user panel
    window.handleImageUpload = () => {
        const imageFile = imageInput.files[0];
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const wallImage = e.target.result;
                applyTileFilter(wallImage);
            };
            reader.readAsDataURL(imageFile);
        }
    };

    // Function to apply tile filter
    function applyTileFilter(wallImage) {
        // For simplicity, just displaying the first tile from the collection
        if (tileCollection.length > 0) {
            const tileImage = tileCollection[0];

            // Simulate superimposing by combining wall and tile images
            superimposedImage.src = combineImages(wallImage, tileImage);
            outputDiv.classList.remove('hidden');
        } else {
            alert('No tiles available in the collection. Please upload tiles in the admin panel.');
        }
    }

    // Function to combine two images (wall and tile)
    function combineImages(wallImage, tileImage) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const wallImg = new Image();
        wallImg.src = wallImage;

        const tileImg = new Image();
        tileImg.src = tileImage;

        canvas.width = wallImg.width;
        canvas.height = wallImg.height;

        ctx.drawImage(wallImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(tileImg, 0, 0, canvas.width, canvas.height);

        return canvas.toDataURL();
    }

    // Function to handle image sharing (placeholder)
    window.shareImage = () => {
        // For simplicity, you can implement your sharing logic here
        alert('Image shared with family members!');
    };
});
