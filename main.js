function loadImage() {
    let url = `https://coffee.alexflipnote.dev/random.json`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let img = document.getElementById('img');
        img.setAttribute('src', data.file);
    })
   
}
loadImage();

setInterval(loadImage, 2000);