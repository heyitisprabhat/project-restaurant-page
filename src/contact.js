export function contactPage() {
  const contact = document.createElement("div");

  const contactUs = document.createElement("div");
  const contactUsTitle = document.createElement("h1");
  contactUsTitle.textContent = "Contact Us";
  contactUs.appendChild(contactUsTitle)

  const mamaSelino = document.createElement("div");

  const mamaSelinoTitle = document.createElement("h3");
  mamaSelinoTitle.textContent = "Mama Selino";
  const mamaSelinoAbout = document.createElement("p");
  mamaSelinoAbout.textContent = `Chef
  555-555-5554
  mamaselino@chefselino.com`;

  mamaSelino.append(mamaSelinoTitle, mamaSelinoAbout);

  const papaSelino = document.createElement("div");

  const papaSelinoTitle = document.createElement("h3");
  papaSelinoTitle.textContent = "Papa Selino";
  const papaSelinoAbout = document.createElement("p");
  papaSelinoAbout.textContent = `Manager
  555-555-5555
  papaselino@managerselino.com`;

  papaSelino.append(papaSelinoTitle, papaSelinoAbout);

  const babySelino = document.createElement("div");

  const babySelinoTitle = document.createElement("h3");
  babySelinoTitle.textContent = "Baby Selino";
  const babySelinoAbout = document.createElement("p");
  babySelinoAbout.textContent = `Waiter
  555-555-5556
  babyselino@waiterselino.com`;

  babySelino.append(babySelinoTitle, babySelinoAbout);

  contact.append(contactUs, mamaSelino, papaSelino, babySelino)

  return contact
}
