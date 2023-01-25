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
    star.style.color = "green";

    slowStar.style.left = x + "px";
    slowStar.style.top = x + "px";
    slowStar.style.width = "2px";
    slowStar.style.height = "2px";

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

createStars();
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
