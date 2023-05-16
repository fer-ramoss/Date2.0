
    const noButton = document.getElementById("no-button");

    noButton.addEventListener("mousemove", function (event) {
      let x = Math.floor(Math.random() * 251) - 125;
      let y = Math.floor(Math.random() * 51) - 25;
      noButton.style.transform = `translate(${x}px, ${y}px)`;
    });
