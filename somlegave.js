function changePlanet(planet) {
  const planetContainer = document.getElementById("planetContainer");
  planetContainer.innerHTML = `<p>Welcome to Planet ${planet}!</p>`;
  const planetBackground = document.getElementById("planetBackground");
  planetBackground.style.backgroundImage = `url('path/to/${planet}.jpg')`;
}

const planets = [
  { name: "Earth", gravity: 9.81 },
  { name: "Mars", gravity: 3.72 },
  { name: "Jupiter", gravity: 24.79 },
  { name: "Mercury", gravity: 0.38},
  { name: "Sun", gravity: 27.01},

];

function calculateWeight() {
  const weightInput = parseFloat(document.getElementById("weightInput").value);
  const planetWeightsContainer = document.getElementById("planetWeights");
  planetWeightsContainer.innerHTML = "";

  if (isNaN(weightInput) || weightInput <= 0) {
    planetWeightsContainer.innerHTML = "<p>Please enter a valid weight.</p>";
    return;
  }

  planets.forEach((planet) => {
    const weightOnPlanet = (weightInput * planet.gravity) / planets[0].gravity;
    planetWeightsContainer.innerHTML += `<p>Your weight on ${
      planet.name
    }: ${weightOnPlanet.toFixed(2)} kg</p>`;
  });
}