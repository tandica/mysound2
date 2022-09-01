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
  mySongs(myMusicList);
  //remove "hide" class from ul list
  mixList.classList.remove("hide");
  //add "hide" class to the button element
  button.classList.add("hide");
});

//create subheading text that displays the number of songs
total.innerText = `My current top ${myMusicList.length} songs 🎧`;

//create a function that turns the array of strings into html list elements to display on the page
const mySongs = function (songs) {
  //forEach() executes a provided function once for each array element
  //this is how we are able to access each string in the list we made
  songs.forEach(function (song, index) {
    //create a list element
    let li = document.createElement("li");
    //add a class to the list element named "song"
    li.classList.add("song");
    //create html code which has the song number and name of the song
    li.innerHTML = `<span class = "song-number">#${index + 1}</span> ${song}`;
    //add each song to the list element
    mixList.append(li);
  });
};
