fetch('https://open-camp-3-backend.onrender.com/api/scoreboard')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(teams => {
    let table = document.getElementById("table");
    table.innerHTML = teams.map((team, index) => {
      return `<tr>
        <td>${index + 1}</td>
        <td>${team["Team Name"]}</td>
        <td>${team["Challenge 1"]}</td>
        <td>${team["Challenge 2"]}</td>
        <td>${team["Challenge 3"]}</td>
        <td>${team["Challenge 4"]}</td>
        <td>${team["Challenge 5"]}</td>
        <td>${team["Total Score"]}</td>
      </tr>`;
    }).join('');
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });