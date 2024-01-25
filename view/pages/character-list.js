import banner from '../components/banner.js';
import navbar from '../components/navbar.js';
import characterGrid from '../components/character-grid.js';
import button from '../components/button.js';
import { hasParameter } from '../../navigation.js';
import { characters as route } from '../../routes.js';

const TITLE = 'Rick and Morty';
const BANNER_IMG = '../../assets/Dark.jpg';

export default function ({ pagination, characters }) {
    const container = $('#container')
        .empty()
        .append(banner(BANNER_IMG, TITLE))
        .append(navbar(pagination));

    if (hasParameter('name')) {
        container.append(button('btn-dark center', 'Clear Search', route.hash));
    }

    container.append(characterGrid(characters));
}
