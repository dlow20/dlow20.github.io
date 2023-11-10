function moveProfessor(professor) {
    // Remove the buttons.
    var buttonOne = document.getElementById("buttonOne");
    buttonOne.remove();
    var buttonTwo = document.getElementById("buttonTwo");
    buttonTwo.remove();
    var buttonThree = document.getElementById("buttonThree");
    buttonThree.remove();

    // Define the image source URLs for each professor
    const professorImages = {
        snider: 'https://bsnider.cs.georgefox.edu/img/snider.jpg',
        wilson: 'https://bwilson.cs.georgefox.edu/img/bwilson.jpg',
        orr: 'https://cs.georgefox.edu/img/bio/Orr.jpg'
    };

    // Get the professor's image URL
    const imageURL = professorImages[professor];

    // Create a new image on "game.html"
    var myImage = document.createElement("IMG");
    myImage.setAttribute("src", imageURL);
    myImage.setAttribute("alt", professor);
    myImage.setAttribute("height", 50)
    myImage.setAttribute("width", 50)

    // Append to body and save as x.
    document.getElementById("movingIMG").appendChild(myImage);
    elem = document.getElementById("movingIMG");

    // Adds an event listener when player wins. 
    document.getElementById("movingIMG").addEventListener("click", stop);
    
    // Adjust speed of image based on level of difficulty chosen.
    var interval = 0;
    if (professor == 'snider') {
        interval = 20;
    } else if (professor == 'wilson') {
        interval = 10;
    } else if (professor == 'orr') {
        interval = 2;
    }

    /*bouncingImage randomly changes the position of an img
    within the boundaries of a div container.*/
    var id = null;
    function bouncingImage() {
        var pos = 0;
        var direction = 0;
        clearInterval(id);

            // Set interval of running frame() to speed. 
            id = setInterval(frame, interval);

            /*frame uses pov to determine the location of an img.
            changes the postion using styling of the image. 
            */
            function frame() {
                if (pos < 25 || pos > 525) {

                    // Get cointainer by id.
                    var myContainer = document.getElementById("myContainer");
                    // Get a random color.
                    var randomColor = getRandomColor();
                    // Set border of cointainer to the color.
                    myContainer.style.borderColor = randomColor;

                    // Randomize position and direction.
                    pos = Math.floor(Math.random() * 551);
                    direction = Math.floor(Math.random() * 6);

                } else if (direction == 0) {
                    pos+=2;
                    elem.style.left = pos + 'px';
                    elem.style.top = pos + 'px';

                } else if (direction == 1) {
                    pos+=2;
                    elem.style.top = pos + 'px';

                } else if (direction == 2) {
                    pos+=2;
                    elem.style.left = pos + 'px';

                } else if (direction == 3) {
                    pos-=2;
                    elem.style.left = pos + 'px';
                    elem.style.top = pos + 'px';

                } else if (direction == 4) {
                    pos-=2;
                    elem.style.top = pos + 'px';

                } else if (direction == 5) {
                    pos-=2;
                    elem.style.left = pos + 'px';

                }
            }
        }
    bouncingImage()

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function stop() {
        // Navigate to "game.html"
        window.location.href = 'https://www.youtube.com/watch?v=04854XqcfCY';
    }
};
