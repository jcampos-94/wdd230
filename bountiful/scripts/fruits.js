// Fetch
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let fruitData;

async function getFruitsData() {
  const response = await fetch(url);
  fruitData = await response.json();
  console.log(fruitData); //Remember to delete!*****
  populateFruitOptions();
}

// Populate the form
function populateFruitOptions() {
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

// Calculate nutritional values
function calculateNutritionalValues() {
  const fruitSelects = document.querySelectorAll("select[id^='fruit']");
  let totalCalories = 0;
  let totalCarbohydrates = 0;
  let totalFat = 0;
  let totalProtein = 0;
  let totalSugar = 0;

  fruitSelects.forEach(select => {
    const selectedFruit = fruitData.find(fruit => fruit.name === select.value);
    if (selectedFruit) {
      totalCalories += selectedFruit.nutritions.calories;
      totalCarbohydrates += selectedFruit.nutritions.carbohydrates;
      totalFat += selectedFruit.nutritions.fat;
      totalProtein += selectedFruit.nutritions.protein;
      totalSugar += selectedFruit.nutritions.sugar;
    }
  });

  return {
    totalCalories,
    totalCarbohydrates,
    totalFat,
    totalProtein,
    totalSugar
  };
}

// Submit form
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const firstName = document.querySelector("[name='fname']").value;
  const email = document.querySelector("[name='email']").value;
  const phone = document.querySelector("[name='phone']").value;
  const specialInstructions = document.getElementById("specialInstructions").value;
  
  const output = document.getElementById("output");

  const selectedFruit1 = document.getElementById("fruit1").value;
  const selectedFruit2 = document.getElementById("fruit2").value;
  const selectedFruit3 = document.getElementById("fruit3").value;

  const totalNutrition = calculateNutritionalValues();

  const currentDate = new Date();
  const orderDate = currentDate.toLocaleString('en-US');

  const outputHTML = `
    <h2>Order Summary</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Fruit 1:</strong> ${selectedFruit1}</p>
    <p><strong>Fruit 2:</strong> ${selectedFruit2}</p>
    <p><strong>Fruit 3:</strong> ${selectedFruit3}</p>
    <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
    <p><strong>Order Date:</strong> ${orderDate}</p>
    <br>
    <h2>Total Nutrition</h2>
    <p><strong>Total Calories:</strong> ${totalNutrition.totalCalories.toFixed(2)}kcal</p>
    <p><strong>Total Carbohydrates:</strong> ${totalNutrition.totalCarbohydrates.toFixed(2)}g</p>
    <p><strong>Total Fat:</strong> ${totalNutrition.totalFat.toFixed(2)}g</p>
    <p><strong>Total Protein:</strong> ${totalNutrition.totalProtein.toFixed(2)}g</p>
    <p><strong>Total Sugar:</strong> ${totalNutrition.totalSugar.toFixed(2)}g</p>
  `;

  output.innerHTML = outputHTML;

  event.target.reset();
}

const drinkForm = document.getElementById("drinkForm");
drinkForm.addEventListener("submit", submitForm);

// Run
getFruitsData();