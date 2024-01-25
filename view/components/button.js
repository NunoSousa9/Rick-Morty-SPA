export default function (classes, content = '', href) {
    const link = $('<a>');

    if (href) {
        link.attr({ href });
    }

    return link.append($('<button>').text(content).addClass(classes));
}
