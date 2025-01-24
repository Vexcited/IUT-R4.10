const citySelectElement = document.getElementById("city");

const zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", async (event) => {
  const zipcode = event.currentTarget.value;

  const response = await fetch(`https://api.zippopotam.us/FR/${zipcode}`);
  const data = await response.json();

  if ("places" in data && Array.isArray(data.places)) {
    citySelectElement.innerHTML = "";

    for (const place of data.places) {
      citySelectElement.innerHTML += `
        <option>${place["place name"]}</option>
      `;
    }
  }
  else { // aucun endroits
    citySelectElement.innerHTML = `
      <option value="" selected>
        Erreur : Villes introuvables
      </option>
    `;
  }
})
