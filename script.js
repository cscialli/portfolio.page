// script.js

document.addEventListener("DOMContentLoaded", function() {

    const text = "Welcome";

    let index = 0;

    const speed = 150; // Geschwindigkeit des Effekts in Millisekunden
 
    function typeWriter() {

        if (index < text.length) {

            document.getElementById("typing-effect").innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, speed);

        } else {

            // Optional: Cursor blinken lassen

            document.getElementById("typing-effect").classList.add("blinking-cursor");

        }

    }
 
    typeWriter();

});

 