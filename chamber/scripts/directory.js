const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#display");

let companies = [];

// Load JSON from external file
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    companies = data;
    renderGrid(); // default
  });

gridButton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
  renderGrid();
});

listButton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
  renderList();
});

function renderGrid() {
  display.innerHTML = "";
  companies.forEach(company => {
    const section = document.createElement("section");
    section.className = "participant";
    section.innerHTML = `
      <h3>${company.name}</h3>
      <img class="part" src="${company.image}" alt="${company.name} logo" loading="lazy" width="100">
      <p><a href="${company.website}" target="_blank">Visit Website</a></p>
    `;
    display.appendChild(section);
  });
}

function renderList() {
  display.innerHTML = "";
  companies.forEach(company => {
    const section = document.createElement("section");
    section.className = "participant-list";
    section.innerHTML = `
        <h3 class="list-title">${company.name}</h3>
        <div class="list-card">
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a class="a-list" href="${company.website}">${company.website}</a></p>
            <p><strong>Membership:</strong> ${company.membership_level}</p>
            <p><strong>Industry:</strong> ${company.industry}</p>
            <p><strong>Founded:</strong> ${company.founded_year}</p>
            <p><strong>Email:</strong> <a class="a-list" href="mailto:${company.contact_email}">${company.contact_email}</a></p>
        </div>
      
    `;
    display.appendChild(section);
  });
}