const fs = require('fs');
const path = require('path');

// JSON dosyası
const countries = JSON.parse(fs.readFileSync('countries.json', 'utf-8'));

// template dosyası
const template = fs.readFileSync('template.html', 'utf-8');

// Çıkış klasörü
const outputDir = path.join(__dirname, 'ulke');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Helper: {{placeholder}} değiştir
function fillTemplate(template, data) {
  let html = template;

  // Basit alanlar
  html = html.replace(/{{name}}/g, data.name)
             .replace(/{{continent}}/g, data.continent)
             .replace(/{{capital}}/g, data.capital)
             .replace(/{{area}}/g, data.area)
             .replace(/{{population}}/g, data.population)
             .replace(/{{flag}}/g, data.flag)
             .replace(/{{map}}/g, data.map)
             .replace(/{{generalInfo}}/g, data.generalInfo)
             .replace(/{{mapInfo}}/g, data.mapInfo)
             .replace(/{{flagMeaning}}/g, data.flagMeaning)
             .replace(/{{economyDesc}}/g, data.economyDesc);

  // economyData
  const economyRows = data.economyData.map(e => `
    <tr>
      <td>${e.year}</td>
      <td>${e.export}</td>
      <td>${e.import}</td>
    </tr>
  `).join('\n');
  html = html.replace(/{{#each economyData}}[\s\S]*?{{\/each}}/, economyRows);

  // source
  const sources = data.source.map((s, i) => {
    const comma = (i === data.source.length - 1) ? '' : ', ';
    return `<a href="${s.link}" target="_blank">${s.name}</a>${comma}`;
  }).join('');
  html = html.replace(/{{#each source}}[\s\S]*?{{\/each}}/, sources);

  return html;
}

// Her ülke için HTML oluştur
countries.forEach(country => {
  const html = fillTemplate(template, country);
  const filePath = path.join(outputDir, country.page);
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`${country.page} oluşturuldu.`);
});

console.log('Tüm ülke sayfaları oluşturuldu!');
