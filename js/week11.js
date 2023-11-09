console.log("Making sure this is linked correctly.");

const x = 2;
const y = 2;

if (x == y) {
    console.log("SUCCESS");
}
else {
    console.log("Fail");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function random2(number) {
    return Math.random() * number;
}

function draw() {   
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    for(let i = 0; i < 100; i++) { 
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = random2(1);
        let color = "rgba("+red+","+green+","+blue+","+alpha+")";
        ctx.fillStyle = color;

        // Store circle information in an object
        const circle = {
            x: random(canvas.width),
            y: random(canvas.height),
            radius: random(50),
        };

        // Add click event listener to each circle
        canvas.addEventListener("click", function(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Check if the click is inside the circle
            if (
                mouseX >= circle.x - circle.radius &&
                mouseX <= circle.x + circle.radius &&
                mouseY >= circle.y - circle.radius &&
                mouseY <= circle.y + circle.radius
            ) {
                // Remove the circle from the canvas
                ctx.clearRect(circle.x - circle.radius, circle.y - circle.radius, circle.radius * 2, circle.radius * 2);
            }
        });

        ctx.arc(
            circle.x,
            circle.y,
            circle.radius,
            0,
            2 * Math.PI,
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw);