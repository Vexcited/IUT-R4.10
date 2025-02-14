const path = "https://geo.api.gouv.fr";
const regList = document.getElementById("regions");
const regCounter = document.getElementById("regions-counter");
const dptList = document.getElementById("departements");
const dptCounter = document.getElementById("departements-counter");
const cityList = document.getElementById("villes");
const cityCounter = document.getElementById("villes-counter");
const cityDetails = document.getElementById("cityDetails");

/**
 * Affichage des infos de la commune survolée
 * @param {PointerEvent} e
 */
const displayInfo = (e) => {
  const elt = e.currentTarget;

  cityDetails.innerHTML = `
    <h2 class="border-b-2 border-gray-500">
      ${elt.innerText}
    </h2>
    <p class="text-sm text-gray-500">
      Population : ${elt.getAttribute("elt-population")}<br>
      Surface : ${elt.getAttribute("elt-surface")}
    </p>
  `;

  // Positionnement
  cityDetails.style.left =
    e.target.offsetLeft + e.target.offsetWidth - cityDetails.offsetWidth + "px";
  cityDetails.style.top = e.target.offsetTop - 10 + "px";
  cityDetails.style.display = "block";
};

/**
 * Fonction de changement du style d'un item sélectionné dans une liste
 * @param {HTMLLIElement} element
 */
const setItemActive = (element) => {
  const style = "bg-slate-100";

  // On désactive les autres éléments actifs
  const oldActive = element.parentElement.querySelectorAll(`.${style}`);
  [...oldActive].forEach((element) => element.classList.remove(style));

  element.classList.add(style); // On modifie l'élement sélectionné
};

const displayRegions = async () => {
  regList.innerHTML = "";
  dptList.innerHTML = "";
  cityList.innerHTML = "";

  const response = await fetch(`${path}/regions`);
  const regions = await response.json();

  for (const region of regions) {
    regList.innerHTML += `
      <li class="py-2 cursor-pointer" onclick="displayDepartments('${region.code}', this)">
        ${region.code} : ${region.nom}
      </li>
    `;
  }

  regCounter.innerText = regions.length;
}

/**
 * @param {string} code
 * @param {HTMLLIElement} element
 */
const displayDepartments = async (code, element) => {
  setItemActive(element);

  dptList.innerHTML = "";
  cityList.innerHTML = "";

  const response = await fetch(`${path}/regions/${code}/departements`);
  const departements = await response.json();

  for (const departement of departements) {
    dptList.innerHTML += `
      <li class="py-2 cursor-pointer" onclick="displayCities('${departement.code}', this)">
        ${departement.code} : ${departement.nom}
      </li>
    `;
  }

  dptCounter.innerText = departements.length;
}

/**
 * @param {string} code
 * @param {HTMLLIElement} element
 */
const displayCities = async (code, element) => {
  setItemActive(element);

  cityList.innerHTML = "";

  const response = await fetch(`${path}/departements/${code}/communes?fields=code,nom,population,surface`);
  const cities = await response.json();

  for (const city of cities) {
    cityList.innerHTML += `
      <li class="py-2" onpointerover="displayInfo(event)" elt-population="${city.population}" elt-surface="${city.surface}">
        ${city.nom}
      </li>
    `;
  }

  cityCounter.innerText = cities.length;
}

void displayRegions();
