// Fetch data from Icons8 API
async function fetchIcons8Data() {
    try {
        let response = await fetch('https://img.icons8.com/plasticine/100/000000/home.png');
        if (!response.ok) throw new Error('Network response was not ok: ' + response.statusText);

        let data = await response.blob();
        const imageURL = URL.createObjectURL(data);
        displayData('Icons8 API', `<img src="${imageURL}" alt="Icon from Icons8">`);
    } catch (error) {
        console.error('Fetch error for Icons8 API:', error);
        displayError('Icons8 API', 'Failed to fetch icon from Icons8. Please try again later.');
    }
}

// Function to display fetched data on the webpage
function displayData(apiName, content) {
    const apiDataDiv = document.getElementById('apiData');
    apiDataDiv.innerHTML += `
        <div class="api-entry">
            <h2>${apiName}</h2>
            ${content}
        </div>
    `;
}

// Function to display error message
function displayError(apiName, errorMessage) {
    const apiDataDiv = document.getElementById('apiData');
    apiDataDiv.innerHTML += `
        <div class="api-entry error">
            <h2>Error from ${apiName}</h2>
            <p>${errorMessage}</p>
        </div>
    `;
}

// Call fetch functions on page load
fetchIcons8Data();
