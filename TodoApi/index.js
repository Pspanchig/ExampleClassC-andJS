async function fetchApi() {
    const response = await fetch("http://localhost:5238/");
    const data = await response.json(); // or response.text() depending on the response type
    return data;
}

async function fetchData() {
    try {
        const response = await fetchApi();
        console.log(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
