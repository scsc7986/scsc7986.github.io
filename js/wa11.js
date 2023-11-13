const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["../img/art/art1.png",
                "../img/art/art2.png",
                "../img/art/art3.png",
                "../img/art/art4.png",
                "../img/art/art5.png"]

const newImage = document.createElement('img');

const altText = {
        "image1": "A persons eye",
        "image2": "just rock",
        "image3": "some flowers",
        "image4": "old paintings",
        "image5": "either moth or Butterfly",
}

for (let i = 0; i<5; i++) { 

    const newImage = document.createElement('img');  
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);
function displayImage() {
    displayedImage.setAttribute('src', images[i]); 
    displayedImage.setAttribute('alt', altText['image'+(i+1)]);
}
newImage.addEventListener("click", displayImage); 
}

btn.addEventListener("click", ()=> {
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light"); 
        btn.textContent = ("lighten"); 
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else if (btn.getAttribute("class") == "light") {
        btn.setAttribute("class", "dark"); 
        btn.textContent = ("darken"); 
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
    }
)
