import EventImg from './event1.jpeg';

function addImages () {
    const img = document.createElement('img');
    img.alt = 'event';
    img.width = '300';
    img.src = EventImg;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImages;