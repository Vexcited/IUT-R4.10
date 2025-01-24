const path = "https://geo.api.gouv.fr";
const regList = document.getElementById("regions");
const dptList = document.getElementById("departements");
const cityList = document.getElementById("villes");
const cityDetails = document.getElementById("cityDetails");

const displayError = (message, type = "alert") => {
  alert.log(message, type);
};

/**
 *
 * Mise à jour du compteur des listes
 * @param {*} list
 * @param {*} value
 */
const setCounter = (list, value) => {
  list.parentElement.parentElement.querySelector(".counter").innerText = value;
};

/**
 * Affichage des infos de la commune survolée
 * @param {*} e
 */
const displayInfo = (e) => {
  //Maj du contenu
  const elt = e.target;
  cityDetails.innerHTML = `<h2 class="border-b-2 border-gray-500  ">${
    elt.innerText
  }</h2><p class="text-sm text-gray-500">Population : ${elt.getAttribute(
    "elt-population"
  )}<br>Surface : ${elt.getAttribute("elt-surface")}</p>`;

  //Positionnement
  cityDetails.style.left =
    e.target.offsetLeft + e.target.offsetWidth - cityDetails.offsetWidth + "px";
  cityDetails.style.top = e.target.offsetTop - 10 + "px";
  cityDetails.style.display = "block";
};

/**
 * Fonction de changement du style d'un item sélectionné dans une liste
 * @param {*} e
 */
const setItemStatus = (e) => {
  const style = "bg-slate-100";
  //On désactive les autres régions actives
  const oldActive = e.currentTarget.querySelectorAll(`.${style}`);
  [...oldActive].forEach((element) => element.classList.remove(style));

  e.target.classList.add(style); //On modifie l'élement sélectionné
};
