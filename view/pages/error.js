import banner from '../components/banner.js';
import button from '../components/button.js';
import { characters as route } from '../../routes.js';

const ERROR_MSG = 'NOT FOUND';
const ERROR_IMG = '../../assets/rick-mugshot.png';

const errorMessage = message =>
    $('<div>')
        .addClass('error')
        .append($('<h1>').text(message || ERROR_MSG))
        .append(button('btn-light', 'Back to list', route.hash));

export default function (message) {
    $('#container')
        .empty()
        .append(banner(ERROR_IMG))
        .append(errorMessage(message));
}
