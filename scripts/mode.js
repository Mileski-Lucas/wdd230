const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const h2 = document.querySelectorAll("h2");
const h1 = document.querySelector("h1");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#434343";
		main.style.color = "#f8f8f8";
        header.style.background = "#434343";
        header.style.color = "#f8f8f8";
        nav.style.background = "#000";
        h2.forEach(h2 => {
            h2.style.background = "#000";
        });        
        h1.style.color = "#f8f8f8";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#faebcd";
		main.style.color = "#434343";
        header.style.background = "#faebcd";
        header.style.color = "#434343";
        nav.style.background = "#434343";
        h2.forEach(h2 => {
            h2.style.background = "#434343";
        });
        h1.style.color = "#434343";
		modeButton.textContent = "🕶️";
	}
});
