import Kiwi from './event1.jpeg';
import './kiwi-image.scss';

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = "kiwi";
        img.classList.add('kiwi-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default KiwiImage;