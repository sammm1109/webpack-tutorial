import EventImg from './event1.jpeg';
import altText from './altText.txt';

function addImages () {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = '300';
    img.src = EventImg;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImages;