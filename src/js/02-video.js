import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const playerIframe = document.getElementById('vimeo-player');
const vimeoPlayer = new Player(playerIframe);
const storage = window.localStorage;
const lastTime = parseFloat(storage.getItem('videoplayer-current-time'));

if (!isNaN(lastTime)) {
  vimeoPlayer.setCurrentTime(lastTime);
}

vimeoPlayer.on('timeupdate', throttle(event => {
  const currentTime = event.seconds;

  storage.setItem('videoplayer-current-time', currentTime);
}, 1000)); 
