// Fetch
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitsData() {
  const response = await fetch(url);
  const fruitData = await response.json();
  console.log(fruitData);
  populateFruitOptions(fruitData);
}

// Populate the form
function populateFruitOptions(fruitData) {
  const fruitSelects = document.querySelectorAll("select[id^='fruit']");

  fruitSelects.forEach((select) => {
    fruitData.forEach((fruit) => {
      const option = document.createElement("option");
      option.value = fruit.name;
      option.text = fruit.name;
      select.appendChild(option);
    });
  });
}

// 

// Run
getFruitsData();
