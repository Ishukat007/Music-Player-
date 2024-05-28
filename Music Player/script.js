// let songList = document.getElementById('song-list');
// let progress = document.getElementById('progress');
// let plyBtn = document.getElementById('play-btn');
// let audio = new Audio('./assets/song1.mp3');
// let backBtn = document.getElementById('back-btn');
// let frwBtn = document.getElementById('frw-btn');
// let songs = [
//   {
//     name: 'song1',
//     id: 1,
//   },
//   {
//     name: 'song2',
//     id: 2,
//   },
//   {
//     name: 'song3',
//     id: 3,
//   },
//   {
//     name: 'song4',
//     id: 4,
//   },
// ];
// let songId = 1;
// for (let song of songs) {
//   let li = document.createElement('li');
//   li.innerText = song.name;
//   li.setAttribute('id', song.id);
//   li.classList.add('song-list');
//   songList.appendChild(li);
// }

// plyBtn.addEventListener('click', () => {
//   audio.paused ? audio.play() : audio.pause();
//   if (plyBtn.children[0].classList.contains('fa-play')) {
//     plyBtn.children[0].classList.remove('fa-play');
//     plyBtn.children[0].classList.add('fa-pause');
//   } else {
//     plyBtn.children[0].classList.remove('fa-pause');
//     plyBtn.children[0].classList.add('fa-play');
//   }
// });
// audio.addEventListener('timeupdate', function (e) {
//   let currentProgress = (audio.currentTime * 100) / audio.duration;
//   progress.value = currentProgress;
// });
// progress.addEventListener('change', function () {
//   let updatedTime = (audio.duration * progress.value) / 100;
//   audio.currentTime = updatedTime;
// });

// songList.addEventListener('click', function (e) {
//   songId = e.target.getAttribute('id');
//   console.log(songId);
//   audio.src = `./assets/song${songId}.mp3`;
//   audio.currentTime = 0;
//   audio.play();
//   plyBtn.children[0].classList.add('fa-pause');
//   plyBtn.children[0].classList.remove('fa-play');
// });

// backBtn.addEventListener('click', function (e) {
//   songId = songId - 1;
//   if (songId === 0) {
//     songId = songs.length;
//   }
//   console.log(songId);
//   audio.src = `./assets/${songs[songId - 1].name}.mp3`;
//   audio.currentTime = 0;
//   audio.play();
//   plyBtn.children[0].classList.add('fa-pause');
//   plyBtn.children[0].classList.remove('fa-play');
// });
// frwBtn.addEventListener('click', function (e) {
//   songId = songId + 1;
//   if (songId > songs.length) {
//     songId = songId % songs.length;
//   }
//   console.log(songId);
//   audio.src = `./assets/song${songId}.mp3`;
//   audio.currentTime = 0;
//   audio.play();
//   plyBtn.children[0].classList.add('fa-pause');
//   plyBtn.children[0].classList.remove('fa-play');
// });
let playBtn = document.getElementById('play-btn');
let progress = document.getElementById('progress');
let songList = document.getElementById('song-list');

let songs = [
  {
    name: 'song1',
    id: 1,
  },
  {
    name: 'song2',
    id: 2,
  },
  {
    name: 'song3',
    id: 3,
  },
  {
    name: 'song4',
    id: 4,
  },
];

let audio = new Audio('./assets/song1.mp3');

// show the song list in the UI

for (let song of songs) {
  let li = document.createElement('li');
  li.innerText = song.name;
  li.setAttribute('id', song.id);
  li.classList.add('song-item');
  songList.append(li);
}

// play btn ka icon badlo and gaana chalao

playBtn.addEventListener('click', () => {
  audio.paused ? audio.play() : audio.pause();
  if (playBtn.children[0].classList.contains('fa-play')) {
    playBtn.children[0].classList.remove('fa-play');
    playBtn.children[0].classList.add('fa-pause');
  } else {
    playBtn.children[0].classList.remove('fa-pause');
    playBtn.children[0].classList.add('fa-play');
  }
});

//  current time ke hisaab se range chale

audio.addEventListener('timeupdate', function () {
  let currentProgress = (audio.currentTime * 100) / audio.duration;
  progress.value = currentProgress;
});

// drag krne se gaana chale
progress.addEventListener('change', function () {
  let updatedTime = (audio.duration * progress.value) / 100;
  audio.currentTime = updatedTime;
});

// btn dabao gaala chalao pratyogita(contest)

songList.addEventListener('click', function (event) {
  let songId = event.target.getAttribute('id');
  audio.src = `./assets/song${songId}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playBtn.children[0].classList.add('fa-pause');
  playBtn.children[0].classList.remove('fa-play');
});
