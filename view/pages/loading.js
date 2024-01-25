const LOADING_IMG = '../../assets/portal.png';
const LOADING_TXT = 'Loading...';

const image = () =>
    $('<img>').attr({ src: LOADING_IMG }).addClass('loading-img rotate');

const loadingMessage = () =>
    $('<h1>').addClass('loading-message').text(LOADING_TXT);

export default function render() {
    $('#container')
        .empty()
        .append(
            $('<div>')
                .addClass('loading')
                .append(image())
                .append(loadingMessage())
        );
}
