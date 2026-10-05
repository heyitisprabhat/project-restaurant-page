import cafeImagePath from "./assets/cafe-image.webp";

export function homePage() {
  const home = document.createElement("div");

  const title = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "SELINO's CAFÉ";

  title.appendChild(heading);
  title.style.backgroundImage = `url(${cafeImagePath})`;
  title.style.backgroundSize = "cover";
  title.style.backgroundPosition = "center bottom";
  title.style.backgroundRepeat = "no-repeat";

  title.style.width = "100%";
  title.style.height = "250px";

  const review = document.createElement("div");
  const honestWords = document.createElement("p");
  honestWords.textContent =
    "Best place to eat in the whole of Italy. Take my word for it.";
  const customer = document.createElement("p");
  customer.textContent = "- BigBossMan";

  review.append(honestWords, customer);

  const timing = document.createElement("div");
  timing.classList.add("timing");

  const hours = document.createElement("h3");
  hours.textContent = "Hours";
  hours.classList.add("hours");

  const sunday = document.createElement("p");
  sunday.textContent = "Sunday: 8AM - 8PM";
  const monday = document.createElement("p");
  monday.textContent = "Monday: 6AM - 6PM";
  const tuesday = document.createElement("p");
  tuesday.textContent = "Tuesday: 6AM - 6PM";
  const wednesday = document.createElement("p");
  wednesday.textContent = "Wednesday: 6AM - 6PM";
  const thursday = document.createElement("p");
  thursday.textContent = "Thursday: 6AM - 10PM";
  const friday = document.createElement("p");
  friday.textContent = "Friday: 6AM - 10PM";
  const saturday = document.createElement("p");
  saturday.textContent = "Saturday: 6AM - 10PM";

  timing.append(
    hours,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  );

  const visit = document.createElement("div");

  const location = document.createElement("h3");
  location.textContent = "Location";

  const address = document.createElement("p");
  address.textContent = "Via del Gelsomino 24, 50122 Firenze FI, Italy";

  visit.append(location, address);

  home.append(title, review, timing, visit);
  return home;
}
