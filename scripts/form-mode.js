const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const h2 = document.querySelectorAll("h2");
const h1 = document.querySelector("h1");
const li = document.querySelectorAll("li");
const ul = document.querySelector("ul"); // Fix: select only the first ul
const p = document.querySelectorAll("p")[1];
const leg = document.querySelector("legend");
const leb = document.querySelectorAll("label");
const div = document.querySelectorAll("div")[1];

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        // Dark Mode
        main.style.backgroundColor = "#434343"; // Corrected property name
        main.style.color = "#f8f8f8";
        header.style.backgroundColor = "#434343"; // Corrected property name
        header.style.color = "#f8f8f8";
        nav.style.backgroundColor = "#000"; // Corrected property name
        h2.forEach(element => { // Changed h2 to element for clarity
            element.style.backgroundColor = "#000"; // Corrected property name
            element.style.color = "#f8f8f8"; //Added color change
        });
        if(h1){
            h1.style.color = "#f8f8f8";
        }
        li.forEach(element => { // Changed li to element for clarity
            element.style.color = "#f8f8f8"; //Changed to white for dark mode.
        });
        if(ul){
            ul.style.color = "#f8f8f8"; //Changed to white for dark mode.
        }
        if(p){
            p.style.color = "#f8f8f8"; //Changed to white for dark mode.
        }
        if(leg){
            leg.style.color = "#f8f8f8";
        }
        if(leb){
            leb.forEach(element => {
                element.style.color = "#f8f8f8";
        })};
        if(div){
            div.style.color = "#f8f8f8";
        }
        modeButton.textContent = "🔆";
    } else {
        // Light Mode
        main.style.backgroundColor = "#faebcd"; // Corrected property name
        main.style.color = "#434343";
        header.style.backgroundColor = "#faebcd"; // Corrected property name
        header.style.color = "#434343";
        nav.style.backgroundColor = "#434343"; // Corrected property name
        h2.forEach(element => { // Changed h2 to element for clarity
            element.style.backgroundColor = "#faebcd"; // Corrected property name
            element.style.color = "#000"; //Added color change
        });
        if(h1){
            h1.style.color = "#434343";
        }
        li.forEach(element => { // Changed li to element for clarity
            element.style.color = "#000";
        });
        if(ul){
            ul.style.color = "#000";
        }
        if(leg){
            leg.style.color = "#445ba9";
        }
        if(leb){
            leb.forEach(element => {
                element.style.color = "#445ba9";
        })};
        if(div){
            div.style.color = "#445ba9";
        }
        modeButton.textContent = "🕶️";
    }
});