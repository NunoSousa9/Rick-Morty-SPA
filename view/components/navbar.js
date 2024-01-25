import { characters as route } from '../../routes.js';
import { goTo } from '../../navigation.js';

const ARROW_LEFT_ICON = 'fas fa-angle-left fa-2x';
const ARROW_RIGHT_ICON = 'fas fa-angle-right fa-2x';

const navigationArrow = (url, classes) => {
    const link = $('<a>').css({ visibility: url ? 'visible' : 'hidden' });

    if (url) {
        const parameter = url.split('?')[1];
        link.attr({ href: `${route.hash}?${parameter}` });
    }

    return link.append($('<i>').addClass(classes));
};

const searchField = () =>
    $('<input>')
        .attr({
            type: 'search',
            placeholder: 'Search name',
            autocomplete: 'off'
        })
        .change(({ target }) => goTo(`${route.hash}?name=${target.value}`));

export default function ({ previous, next }) {
    return $('<nav>')
        .addClass('site-nav')
        .append(navigationArrow(previous, ARROW_LEFT_ICON))
        .append(searchField())
        .append(navigationArrow(next, ARROW_RIGHT_ICON));
}
