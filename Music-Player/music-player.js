const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("slider-song");

const shuffleSongButton = document.getElementById("shuffle-song");
const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");
const repeatSongButton = document.getElementById("repeat-song");

const songs = [
  {
    image: "./Music/album-art1.jpg",
    name: "Deck The Halls",
    artist: "John Parry",
    audio: "./Music/deck-the-halls.mp3",
  },
  {
    image: "./Music/album-art2.jpg",
    name: "Jingle Bells",
    artist: "James Lord Pierpont",
    audio: "./Music/jingle-bells.mp3",
  },
  {
    image: "./Music/album-art3.jpg",
    name: "Joy To The World",
    artist: "Isaac Watts",
    audio: "./Music/joy-to-the-world.mp3",
  },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
updateSong();

prevSongButton.addEventListener("click", function () {
  if (currentSongIndex === 0) {
    return;
  }
  currentSongIndex--;
  updateSong();
});

nextSongButton.addEventListener("click", function () {
  if (currentSongIndex === songs.length - 1) {
    return;
  }
  currentSongIndex++;
  updateSong();
});

playpauseButton.addEventListener("click", function () {
  if (!audio.paused) {
    audio.pause();
    playpauseButton.class = "fa-solid fa-circle-pause fa-3x";
  } else {
    audio.play();
    playpauseButton.class = "fa-solid fa-circle-play fa-3x";
  }
});

function updateSong() {
  const song = songs[currentSongIndex];
  songImage.src = song.image;
  songName.innerText = song.name;
  songArtist.innerText = song.artist;
  audio.src = song.audio;
  audio.onloadedmetadata = function () {
    songSlider.value = 0;
    songSlider.max = audio.duration;
  };
}

songSlider.addEventListener("change", function () {
  audio.currentTime = songSlider.value;
});

function moveSlider() {
  songSlider.value = audio.currentTime;
}
setInterval(moveSlider, 1000);
