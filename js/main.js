const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://api.thecatapi.com/v1/images/search";

//functia pentru apel
async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        image.src = data[0].url;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", () => {
    fetchHandler();
});
