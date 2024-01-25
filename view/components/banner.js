const title = text => $('<h1>').text(text).addClass('title');

export default function (imagePath, content = '') {
    return $('<section>')
        .addClass('banner')
        .css({ backgroundImage: `url(${imagePath})` })
        .append(title(content));
}
