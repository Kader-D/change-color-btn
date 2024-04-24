document.addEventListener('DOMContentLoaded', function() {
    let colorbox = document.getElementById("color-box");
    let colorbtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    colorbtn.addEventListener('click', function() {
        colorbox.style.backgroundColor = getRandomColor();
    });
});