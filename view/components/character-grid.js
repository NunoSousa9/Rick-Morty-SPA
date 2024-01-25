import { details as route } from '../../routes.js';

const background = ({ src, alt }) => $('<img>').attr({ src, alt });

const footer = content => $('<h3>').text(content);

const card = ({ id, name, image }) =>
    $('<li>').append(
        $('<a>')
            .attr({ href: `${route.hash}/${id}` })
            .append(background({ src: image, alt: name }))
            .append(footer(name))
    );

export default function (characters) {
    return $('<ul>').addClass('characters').append(characters.map(card));
}
