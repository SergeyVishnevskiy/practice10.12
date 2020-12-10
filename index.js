// let root = document.querySelector("#root");
// let btn = document.querySelector("button");

// function fetchJokes() {
//   fetch("http://api.icndb.com/jokes/random")
//     .then((response) => response.json())
//     .then((json) => {
//       setToLocalStorage(json.value.joke);
//       getFromLocalStorage();
//     })
//     .catch((error) => console.log(error));
// }

// function setToLocalStorage(joke) {
//   localStorage.setItem("joke", JSON.stringify(joke));
// }

// function getFromLocalStorage() {
//   if (localStorage.getItem("joke")) {
//     root.innerHTML = localStorage.getItem("joke");
//   }
// }

// btn.addEventListener("click", fetchJokes);

const refs = {
  generate: document.querySelector('button[data-generate="generate"]'),
  add: document.querySelector('button[data-add="add"]'),
  show: document.querySelector('button[data-show="show"]'),
  div: document.querySelector("#root"),
};
refs.generate.addEventListener("click", fetchJokes);
refs.add.addEventListener("click", addJokesWhichLikes);
// refs.show.addEventListener("click", );

function fetchJokes() {
  fetch("http://api.icndb.com/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      displayRandomJoke(json.value.joke);
      //   addJokesWhichLikes(json.value.joke);
    });
}

function displayRandomJoke(joke) {
  refs.div.textContent = joke;
}
function addJokesWhichLikes() {
  let arr = [];
  let joke = refs.div.textContent;
  localStorage.setItem("favorites", JSON.stringify(arr.push(joke)));
}
