let musicClips = document.querySelectorAll('.music');
let albumCovers = document.querySelectorAll('.albumcovers');

function hideAll() {
  musicClips.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumCovers.forEach(function(el) {
  el.onclick = (e) => {

hideAll();

switch (e.target.getAttribute('id')) {
      case 'abbeyAlbum':
        document.querySelector('#abbeyAudio')
        .style.display = 'block';
        break;
      case 'letItBeAlbum':
        document.querySelector('#libAudio')
        .style.display = 'block';
        break;
      case 'whiteAlbum':
        document.querySelector('#whiteAudio')
        .style.display = 'block';
        break;
      case 'pepperAlbum':
        document.querySelector('#pepperAudio')
        .style.display = 'block';
        break;
      }

let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
    }

  });
