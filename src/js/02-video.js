import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const playerIframe = document.getElementById('vimeo-player');
const vimeoPlayer = new Player(playerIframe);
const storage = window.localStorage;

vimeoPlayer.on('timeupdate', throttle(event => {
  const currentTime = event.seconds;
  storage.setItem('videoplayer-current-time', currentTime);
}, 1000));

const savedTime = parseFloat(storage.getItem('videoplayer-current-time'));

if (!isNaN(savedTime)) {
  vimeoPlayer.setCurrentTime(savedTime);
}