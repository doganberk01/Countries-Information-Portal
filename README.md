# 🌍 Countries Information Portal

An interactive portal to discover countries worldwide. Dynamically filter by continent or sort by population, then click to view fast-loading, detailed static pages.  
Each country page includes maps, economic data (GDP), area, and more — all managed from a single JSON file for easy maintenance.

---

## 📝 Overview

Countries Information Portal is a static, responsive web portal that displays detailed information about countries worldwide.  
It uses a JSON database (`countries.json`) and a Node.js script (`generate.js`) to pre-build HTML pages for each country.  
Users can browse a list of countries and click on each to view details like population, area, GDP, flag, and map.

---

## 🗂️ Project Structure

| 📁 File / Folder      | Description                                                      |
|----------------------|------------------------------------------------------------------|
| 🎨 `css/`             | Stylesheets for the project                                       |
| 🖼️ `images/`           | Images, screenshots, and other static assets                     |
| 💻 `js/`              | JavaScript files used by the site                                 |
| 🌍 `ulke/`            | Generated country detail pages from `countries.json`              |
| 💾 `countries.json`   | Database of countries, used by `generate.js`                      |
| ⚙️ `generate.js`       | Node.js script that generates static HTML pages for each country  |
| 🏠 `index.html`        | Home page with a list of countries and their flags                |
| ⚙️ `script.js`         | Main JavaScript for frontend interactions                         |
| 📑 `template.html`     | HTML template used by `generate.js` to build country pages        |

---

## ⚙️ Technologies Used

| **Layer** | **Technology** | **Purpose** |
|:---------|:---------------|:-----------|
| 🌐 **Frontend** | HTML | Structure of the website |
| 🎨 **Frontend** | CSS | Styling, layout, and responsive design |
| ⚙️ **Frontend** | JavaScript | Interactive features (filtering, lightbox, sidebar) & DOM manipulation |
| 🔨 **Build / SSG** | Node.js | Runs `generate.js` to build static HTML pages from `countries.json` |
| 🗃️ **Data** | JSON | Stores all country information (the "database") |


💡 **Note:** The project uses a **Static Site Generation (SSG)** approach. Country detail pages are built automatically from `countries.json`.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **Country List** | Flags, population, and basic info for each country |
| 📱 **Responsive Design** | Fully compatible with mobile, tablet, and desktop devices |
| 📊 **Dynamic Pages** | Generated from `countries.json` using Node.js |
| ✅ **Easy to Extend** | Add new countries quickly and easily |
| 🗺️ **Interactive Country Pages** | Clickable pages with maps, GDP, area, and other data |
| 🎨 Organized CSS Structure | Common CSS file for all country pages ensures consistent styling |
| ⚡ **Fast Load Times** | Static HTML pages ensure quick loading and smooth experience |


---

## 🛠️ Setup & Usage

### 1️⃣ Requirements

* Node.js installed on your computer

### 2️⃣ Updating Data (Optional)

* Edit `countries.json` to add or update countries

### 3️⃣ Generating Static Pages

Run in terminal:  
node generate.js

* This generates HTML files in the `ulke/` folder.

### 4️⃣ Viewing the Project

> ⚠️ **Important:** Opening `index.html` directly (double-click) **will not work** because modern browsers block local JavaScript from loading local JSON files.  
> This is due to **CORS (Cross-Origin Resource Sharing) restrictions**: the browser treats the HTML file and JSON file as different sources and prevents access for security reasons.

**Solution:** Run a local HTTP server so that the files are served from the same origin. 

**Recommended Methods:**

**VS Code Live Server**  
Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click `index.html` → *Open with Live Server*

**Python 3**  
Run in terminal:
```
python -m http.server 8000
```

**Node.js http-server**  
Install globally:
```
npm install -g http-server
``` 
Then run:
```
http-server
```

Then open the provided URL in your browser (usually `http://127.0.0.1:8000/`).

---

## 📝 Notes

* **Do not edit generated HTML files** — all country pages are created automatically from `countries.json`. Any manual changes will be overwritten when you run `generate.js`.  
* **Folder structure matters** — keep `css/`, `js/`, `images/`, `ulke/` intact for proper functioning.  
* **Local server recommended** — although opening `index.html` might work in some browsers, using a local server (VS Code Live Server, Python HTTP server) ensures all scripts and JSON files load correctly.  
* **Easy to extend** — adding a new country is as simple as editing `countries.json` and running `generate.js`.  
* **Performance tip** — static pages load very fast; for large JSON files, consider pagination or filtering for better UX.  
* **Intended for local use** — project doesn’t include a live online deployment by default.
  

---

## 👨‍💻 Author

**Doğan Berk**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/doganberk01)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/doğan-berk-07a72b201)

---
