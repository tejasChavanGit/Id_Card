const messageButton = document.getElementById("messageButton");
const subscribeButton = document.getElementById("subscribeButton");

function changeColorTemporarily(button, color, duration) {
    const originalColor = button.style.backgroundColor;
    button.style.backgroundColor = color;
    setTimeout(function () {
    button.style.backgroundColor = originalColor;
    }, duration);
}

messageButton.addEventListener("click", function () {
    changeColorTemporarily(this, "#87CEEB", 1000);
});

subscribeButton.addEventListener("click", function () {
    changeColorTemporarily(this, "#FF0000", 1000);
});
