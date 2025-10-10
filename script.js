document.addEventListener("DOMContentLoaded", () => {
  const countryListEl = document.getElementById("country-list");
  const sortSelect = document.getElementById("sort-select");
  const continentSelect = document.getElementById("continent-select");

  let countries = [];

  // JSON dosyasını yükle
  fetch("countries.json")
    .then(res => res.json())
    .then(data => {
      countries = data;
      updateDisplay(); // Başlangıçta tüm listeyi göster
    })
    .catch(err => console.error("JSON yüklenemedi:", err));

  // Ülkeleri ekrana bas
  function renderCountries(list) {
    countryListEl.innerHTML = "";

    list.forEach(country => {
      const card = document.createElement("div");
      card.className = "country-card";

      card.innerHTML = `
        <img src="${country.flag || 'img/default-flag.png'}" alt="${country.name} bayrağı">
        <h3>${country.name}</h3>
        <p><strong>Kıta:</strong> ${country.continent || "Bilinmiyor"}</p>
        <p><strong>Nüfus:</strong> ${country.population || "Bilinmiyor"}</p>
        <a href="ulke/${country.page}" class="btn">Detaylı Bilgi</a>
      `;

      countryListEl.appendChild(card);
    });
  }

  // area değerini sayıya çevir
  function parseArea(value) {
    if (!value) return 0;
    return Number(value.replace(/\./g, '').replace(/\s?km²/i, '')) || 0;
  }

  // gdp değerini sayıya çevir
  function parseGDP(value) {
    if (!value) return 0;
    return Number(String(value).replace(/[^0-9.-]+/g, '')) || 0;
  }

  // population değerini sayıya çevir
  function parsePopulation(value) {
    if (!value) return 0;
    return Number(String(value).replace(/\./g, '').replace(/\s/g, '')) || 0;
  }

  // Kıta eşleştirme fonksiyonu (alt kategoriler dahil)
  function matchContinent(countryContinent, selectedContinent) {
    if (!countryContinent) return false;

    const continentMap = {
      asya: ["asya", "orta doğu"],
      avrupa: ["avrupa"],
      afrika: ["afrika", "kuzey afrika"],
      amerika: ["amerika", "kuzey amerika", "güney amerika", "orta amerika"]
    };

    const normalizedCountry = countryContinent.toLowerCase();
    const options = continentMap[selectedContinent] || [];

    return options.some(opt => normalizedCountry.includes(opt));
  }

  // Filtrele + sırala ve ekrana bas
  function updateDisplay() {
    const selectedContinent = continentSelect.value;
    const sortValue = sortSelect.value;

    // Filtreleme
    let filtered = countries;
    if (selectedContinent !== "all") {
      filtered = countries.filter(c =>
        matchContinent(c.continent, selectedContinent)
      );
    }

    // Sıralama
    switch (sortValue) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "area-desc":
        filtered.sort((a, b) => parseArea(b.area) - parseArea(a.area));
        break;
      case "area-asc":
        filtered.sort((a, b) => parseArea(a.area) - parseArea(b.area));
        break;
      case "gdp-desc":
        filtered.sort((a, b) => parseGDP(b.gdp) - parseGDP(a.gdp));
        break;
      case "gdp-asc":
        filtered.sort((a, b) => parseGDP(a.gdp) - parseGDP(b.gdp));
        break;
      case "population-desc":
        filtered.sort((a, b) => parsePopulation(b.population) - parsePopulation(a.population));
        break;
      case "population-asc":
        filtered.sort((a, b) => parsePopulation(a.population) - parsePopulation(b.population));
        break;
    }

    renderCountries(filtered);
  }

  // Event listenerlar
  sortSelect.addEventListener("change", updateDisplay);
  continentSelect.addEventListener("change", updateDisplay);
});
