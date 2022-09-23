const colorGen = () => {
    const span = document.querySelector("span");
    const fColor = Math.floor(Math.random() * 255);
    const sColor = Math.floor(Math.random() * 255);
    const tColor = Math.floor(Math.random() * 255);
    const rgbColor = `rgb(${fColor}, ${sColor}, ${tColor})`;
    document.body.style.backgroundColor = rgbColor;
    span.textContent = rgbColor;
    
};

setInterval(() => {
    colorGen();
}, 1000);
