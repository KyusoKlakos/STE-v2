var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}
$(function () {
    showText("h1", "It's dangerous to go alone! 404 Page not found.", 0, 80);
}); 