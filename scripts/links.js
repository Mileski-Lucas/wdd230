const baseURL = "https://mileski-lucas.github.io/wdd230/";
const linksURL = "https://mileski-lucas.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}
  
getLinks();

function displayLinks(weeks) {
    const assignmentList = document.querySelector("#assignment");
  
    weeks.weeks.forEach((weekObj) => {
        // Create the week label as a strong element
        const weekItem = document.createElement("li");
        const weekTitle = document.createElement("strong");
        weekTitle.textContent = `${weekObj.week}: `;
        weekItem.appendChild(weekTitle);

        // Create a span to hold all links for that week
        const linksSpan = document.createElement("span");

        weekObj.links.forEach((link, index) => {
            if (link.url && link.title) {
                const anchor = document.createElement("a");
                anchor.href = baseURL + link.url;
                anchor.textContent = link.title;
                anchor.target = "_blank";

                linksSpan.appendChild(anchor);

                // Add separator only if not the last link
                if (index < weekObj.links.length - 1) {
                    linksSpan.appendChild(document.createTextNode(" | "));
                }
            }
        });

        weekItem.appendChild(linksSpan);
        assignmentList.appendChild(weekItem);
    });
}