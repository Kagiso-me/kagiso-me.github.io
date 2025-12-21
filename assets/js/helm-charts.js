fetch("/_charts/index.yaml")
  .then(r => r.text())
  .then(t => {
    const data = jsyaml.load(t);
    const container = document.querySelector(".charts-container");
    Object.keys(data.entries).forEach(chartName => {
      const chart = data.entries[chartName][0];
      const div = document.createElement("div");
      div.classList.add("chart-card");
      div.innerHTML = `
        <h2>${chart.name}</h2>
        <p>${chart.description || ""}</p>
        <p>Version: ${chart.version}</p>
        <pre>helm install ${chart.name} kagiso/${chart.name}</pre>
      `;
      container.appendChild(div);
    });
  });
