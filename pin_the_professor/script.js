function moveProfessor(professor) {
    const professorImg = document.getElementById('professor');

    let xPos = Math.random() * (window.innerWidth - professorImg.width);
    let yPos = Math.random() * (window.innerHeight - professorImg.height);

    professorImg.src = `https://bsnider.cs.georgefox.edu/img/${professor}.jpg`;
    professorImg.style.left = xPos + 'px';
    professorImg.style.top = yPos + 'px';

    const maxX = window.innerWidth - professorImg.width;
    const maxY = window.innerHeight - professorImg.height;

    const moveInterval = setInterval(() => {
        const xStep = (Math.random() - 0.5) * 10;
        const yStep = (Math.random() - 0.5) * 10;

        xPos += xStep;
        yPos += yStep;

        if (xPos < 0 || xPos > maxX || yPos < 0 || yPos > maxY) {
            // Reverse direction when hitting the edge
            xStep *= -1;
            yStep *= -1;
        }

        professorImg.style.left = xPos + 'px';
        professorImg.style.top = yPos + 'px';
    }, 100);

    setTimeout(() => {
        clearInterval(moveInterval);
    }, 10000); // Stop moving after 10 seconds
}