import  cappuccinoImagePath from './assets/cappuccino.webp'
import  latteImagePath from './assets/latte.webp'
import  toastAndJamImagePath from './assets/toast-and-jam.webp'
import  freshFruitImagePath from './assets/fresh-fruit.webp'
import  chocolatePastryImagePath from './assets/chocolate-pastry.webp'
import  butterCroissantImagePath from './assets/butter-croissant.webp'
import  pancakesImagePath from './assets/pancakes.webp'
import  frenchToastImagePath from './assets/french-toast.webp'



export function menuPage() {
  const menu = document.createElement("div");

  const foodMenu = document.createElement("div");
  const foodMenuTitle = document.createElement("h1");
  foodMenuTitle.textContent = "Food Menu";

  foodMenu.appendChild(foodMenuTitle);

  const beverages = document.createElement("div");
  const beveragesTitle = document.createElement("h2");
  beveragesTitle.textContent = "Beverages";

  beverages.appendChild(beveragesTitle);

  const cappuccino = document.createElement("div");

  const cappuccinoTitle = document.createElement("h3");
  cappuccinoTitle.textContent = "Cappuccino - $2";
  const cappuccinoAbout = document.createElement("p");
  cappuccinoAbout.textContent =
    "A rich, creamy cappuccino made with freshly brewed espresso, velvety steamed milk, and a delicate layer of frothy foam—perfectly crafted to give your day a warm and comforting start!";
  const cappuccinoImage = document.createElement("img");
  cappuccinoImage.src = cappuccinoImagePath;

  cappuccino.append(cappuccinoTitle, cappuccinoAbout, cappuccinoImage);

  const latte = document.createElement("div");

  const latteTitle = document.createElement("h3");
  latteTitle.textContent = "latte - $2";
  const latteAbout = document.createElement("p");
  latteAbout.textContent =
    "A smooth, creamy latte made with rich espresso and silky steamed milk, topped with a light layer of velvety foam—perfectly balanced for a warm and comforting start to your day!";
  const latteImage = document.createElement("img");
  latteImage.src = latteImagePath;

  latte.append(latteTitle, latteAbout, latteImage);

  const sides = document.createElement("div");
  const sidesTitle = document.createElement("h2");
  sidesTitle.textContent = "Sides";

  sides.appendChild(sidesTitle);

  const toastAndJam = document.createElement("div");

  const toastAndJamTitle = document.createElement("h3");
  toastAndJamTitle.textContent = "Toast and Jam - $1";
  const toastAndJamAbout = document.createElement("p");
  toastAndJamAbout.textContent =
    "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.";
  const toastAndJamImage = document.createElement("img");
  toastAndJamImage.src = toastAndJamImagePath;

  toastAndJam.append(toastAndJamTitle, toastAndJamAbout, toastAndJamImage);

  const freshFruit = document.createElement("div");

  const freshFruitTitle = document.createElement("h3");
  freshFruitTitle.textContent = "Fresh Fruit - $3";
  const freshFruitAbout = document.createElement("p");
  freshFruitAbout.textContent =
    "A small bowl of fresh fruit, whatever we find at the market for the day.";
  const freshFruitImage = document.createElement("img");
  freshFruitImage.src = freshFruitImagePath;

  freshFruit.append(freshFruitTitle, freshFruitAbout, freshFruitImage);

  const mainDishes = document.createElement("div");
  const mainDishesTitle = document.createElement("h2");
  mainDishesTitle.textContent = "Main Dishes";

  mainDishes.appendChild(mainDishesTitle);

  const chocolatePastry = document.createElement("div");

  const chocolatePastryTitle = document.createElement("h3");
  chocolatePastryTitle.textContent = "Chocolate Pastry - $2";
  const chocolatePastryAbout = document.createElement("p");
  chocolatePastryAbout.textContent =
    "A rich, indulgent chocolate pastry made with layers of soft, buttery pastry and luscious chocolate, baked to golden perfection for a deliciously sweet treat any time of day!";
  const chocolatePastryImage = document.createElement("img");
  chocolatePastryImage.src = chocolatePastryImagePath;

  chocolatePastry.append(
    chocolatePastryTitle,
    chocolatePastryAbout,
    chocolatePastryImage,
  );

  const butterCroissant = document.createElement("div");

  const butterCroissantTitle = document.createElement("h3");
  butterCroissantTitle.textContent = "Butter Croissant - $3";
  const butterCroissantAbout = document.createElement("p");
  butterCroissantAbout.textContent =
    "A golden, flaky butter croissant made with delicate layers of rich, buttery pastry, baked to crisp perfection on the outside and soft, airy goodness on the inside—perfect with your favorite cup of coffee!";
  const butterCroissantImage = document.createElement("img");
  butterCroissantImage.src = butterCroissantImagePath;

  butterCroissant.append(
    butterCroissantTitle,
    butterCroissantAbout,
    butterCroissantImage,
  );

  const pancakes = document.createElement("div");

  const pancakesTitle = document.createElement("h3");
  pancakesTitle.textContent = "Pancakes - $3";
  const pancakesAbout = document.createElement("p");
  pancakesAbout.textContent =
    "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";
  const pancakesImage = document.createElement("img");
  pancakesImage.src = pancakesImagePath;

  pancakes.append(pancakesTitle, pancakesAbout, pancakesImage);

  const frenchToast = document.createElement("div");

  const frenchToastTitle = document.createElement("h3");
  frenchToastTitle.textContent = "French Toast - $5";
  const frenchToastAbout = document.createElement("p");
  frenchToastAbout.textContent =
    "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.";
  const frenchToastImage = document.createElement("img");
  frenchToastImage.src = frenchToastImagePath;

  frenchToast.append(frenchToastTitle, frenchToastAbout, frenchToastImage);

  menu.append(foodMenu, beverages, cappuccino, latte, sides, toastAndJam, freshFruit, mainDishes, chocolatePastry, butterCroissant, pancakes, frenchToast)

  return menu
}
