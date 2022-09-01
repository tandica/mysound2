const myMusicList = [
  "Drive Slow - Kanye West",
  "The Message - Nas",
  "Pound Cake - Drake ft Jay Z",
  "Echoes of Silence - The Weeknd",
  "Song Cry - Jay Z",
  "Teardrops on My Guitar - Taylor Swift",
  "Rebel - Shenseea",
  "Back at One - Brian McKnight",
  "N.Y. State of Mind - Nas",
  "Redemption - Drake",
];

const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");

//create remove/hide functionality when clicking the button
button.addEventListener("click", function () {
  //remove "hide" class from ul list
  mixList.classList.remove("hide");
  //add "hide" class to the button element
  button.classList.add("hide");
});
