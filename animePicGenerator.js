const btn = document.querySelector(".btn");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");
const animeContainer = document.querySelector(".anime-container");

const url = "https://api.catboys.com/img";

const getRandomAnimePic = async () => {
  try {
    btn.disabled = true;
    btn.innerText = "Loading...";
    animeName.innerText = "Updating...";

    const result = await fetch(url).then((res) => res.json());
    animeContainer.style.display = "block";

    animeImg.src = result.url;
    animeName.innerText = result.artist;
    btn.disabled = false;
    btn.innerText = "Get Anime";
  } catch (error) {
    animeName.innerText = "An error happened, Try again later";
  }
};

btn.addEventListener("click", () => {
  getRandomAnimePic();
});
