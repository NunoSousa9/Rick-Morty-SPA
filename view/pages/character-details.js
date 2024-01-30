import banner from '../components/banner.js';
import button from '../components/button.js';
import { goBack } from '../../navigation.js';

const BANNER_IMG = '../../assets/dark.jpg';

const paragraph = content => $('<p>').text(content);

const details = (species, status, origin, location) =>
    $('<div>')
        .addClass('details')
        .append(paragraph(`Species: ${species}`))
        .append(paragraph(`Status: ${status}`))
        .append(paragraph(`From: ${origin.name}`))
        .append(paragraph(`Last seen on: ${location.name}`))
        .append(button('btn-dark', 'Go back').click(goBack));

export default function ({ image, name, species, status, origin, location }) {
    $('#container')
        .empty()
        .append(
            banner(BANNER_IMG, name).append($('<img>').attr({ src: image }))
        )
        .append(details(species, status, origin, location));
}
