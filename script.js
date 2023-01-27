const generateStarProperties = () => {
  // Location of star on x-axis
  let x = Math.floor(Math.random() * window.innerWidth);
  // Speed of star
  let speed = (Math.random() + 0.5) * 1;
  // Height of star
  let height = Math.random() * 100;
  return { x, speed, height };
};

const createStars = () => {
  // Loop will run "count" number of times. Increase count to create more stars.
  let count = 60;
  let space = document.querySelector(".space");

  console.log(window.innerWidth);

  // Create a new star element and append it to "space"
  for (let i = 0; i < count; i++) {
    // <i>: The Idiomatic Text element
    let star = document.createElement("i");
    let slowStar = document.createElement("i");

    let { x, speed, height } = generateStarProperties();

    star.style.left = x + "px";
    star.style.width = "2px";
    star.style.height = height + "px";

    // slowStar.style.left = x + "px";
    // slowStar.style.top = x + "px";
    // slowStar.style.width = "2px";
    // slowStar.style.height = "2px";

    // Define how many seconds each animation takes to complete one cycle
    star.style.animationDuration = speed + "s";
    slowStar.style.animationDuration = "5s";

    space.appendChild(star);

    i++;
  }
};

const createPlanets = () => {
  // Loop will run "count" number of times. Increase count to create more stars.
  let count = 1;
  let space = document.querySelector(".space");

  // Create a new star element and append it to "space"
  for (let i = 0; i < count; i++) {
    // <i>: The Idiomatic Text element
    let planet = document.createElement("i");

    let { x, speed, height } = generateStarProperties();

    planet.style.left = x + "px";

    const planetContent = `
      <div class="container">
        <div class="planet-animated"></div>
        <div class="orbit">
        <div class="moon"></div>
        </div>
      </div>`;

    planet.innerHTML = planetContent;

    // Define how many seconds each animation takes to complete one cycle

    planet.style.animationDuration = "30s";

    space.appendChild(planet);
    i++;
  }
};

const createAstronaut = () => {
  // Loop will run "count" number of times. Increase count to create more stars.
  let count = 1;
  let space = document.querySelector(".space");

  // Create a new star element and append it to "space"
  for (let i = 0; i < count; i++) {
    // <i>: The Idiomatic Text element
    let astronaut = document.createElement("i");
    astronaut.classList.add("astro-box");

    let { x, speed, height } = generateStarProperties();

    astronaut.style.left = x + "px";

    const astronautContent = `
    <div class="astro-container">
        <img class="astronaut" src="./astronaut-green.png" alt="">
    </div>
    
    
    `;

    astronaut.innerHTML = astronautContent;

    // Define how many seconds each animation takes to complete one cycle

    astronaut.style.animationDuration = "45s";

    space.appendChild(astronaut);
    i++;
  }
};

createStars();
createAstronaut();
createPlanets();

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    var spaceElements = document.querySelectorAll(".space i");
    for (var i = 0; i < spaceElements.length; i++) {
      var currentState = spaceElements[i].style.animationPlayState;
      if (currentState === "paused") {
        spaceElements[i].style.animationPlayState = "running";
      } else {
        spaceElements[i].style.animationPlayState = "paused";
      }
    }
  }
});

// Dark Mode Switch
const darkModeEl = document.querySelector(".dark-mode-btn");
darkModeEl.addEventListener("click", function () {
  const space = document.querySelector(".space");
  space.classList.toggle("dark-mode");
});

// Scan
const scanBtn = document.querySelector(".scan");
scanBtn.addEventListener("click", function () {
  const phaser = document.querySelector(".phaser");
  phaser.classList.toggle("laser-beam");
  phaser.classList.toggle("green");

  const scanSound = document.getElementById("scan-sound");
  if (scanSound.paused) {
    scanSound.play();
    scanSound.loop = true;
  } else {
    scanSound.pause();
    scanSound.currentTime;
  }
});

//************** TRACTOR BEAM EFFECTS *********************//
const tractorBeamBtn = document.querySelector(".tractor-beam-btn");
let tractorBeamSoundOn = false;

tractorBeamBtn.addEventListener("click", function () {
  const tractorBeam = document.querySelector(".tractor-beam");
  tractorBeam.classList.toggle("tractor-beam-active");

  const tractorBeamSound = document.getElementById("tractor-beam-sound");

  if (tractorBeamSound.paused) {
    tractorBeamSound.play();
    tractorBeamSound.loop = true;
  } else {
    tractorBeamSound.pause();
    tractorBeamSound.currentTime = 0;
  }
});

// Tractor Beam Toggle
const tractorBeamToggle = document.querySelector(".alien-select-btn");
const tractorBeamEffect = document.querySelector(".tractor-beam-effect");
let tractorBeamTarget = 0;

tractorBeamToggle.addEventListener("click", function () {
  const tractorBeamEffect = document.querySelector(".tractor-beam-effect");

  if (tractorBeamTarget === 0) {
    tractorBeamEffect.style.transform = "rotate(0deg)";
    tractorBeamTarget++;
  } else if (tractorBeamTarget === 1) {
    tractorBeamEffect.style.transform = "rotate(14.5deg)";
    tractorBeamTarget++;
  } else {
    tractorBeamEffect.style.transform = "rotate(-14.5deg)";
    tractorBeamTarget = 0;
  }
});

//************** END TRACTOR BEAM EFFECTS *********************//

//************** MUSIC TOGGLE BUTTON *********************//
const musicBtn = document.querySelector(".music-toggle-btn");
const music = document.getElementById("music");

musicBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

//************** END MUSIC TOGGLE BUTTON *********************//

//************** PHOTON CANON *********************//
const photonCanonBtn = document.querySelector(".photon-canon-btn");
const photonCanon = document.querySelector(".photon-canon");
const photonSound = new Audio("./sounds/photon-canon.mp3");

photonCanonBtn.addEventListener("click", function () {
  const photon = document.createElement("div");
  photon.classList.add("fire-photon-canon");
  photonCanon.appendChild(photon);

  // play audio
  photonSound.play();

  // remove the photon after 500ms
  setTimeout(function () {
    photon.remove();
  }, 3000);
});

//************** END PHOTON CANON *********************//

//************** SCOTTY CATCH PHRASE *********************//
const catchphraseBtn = document.querySelector(".catchphrase-btn");
const catchphraseSound = new Audio("./sounds/losing-power.mp3");

catchphraseBtn.addEventListener("click", function () {
  catchphraseSound.play();
});
//************** END SCOTTY CATCH PHRASE *********************//
