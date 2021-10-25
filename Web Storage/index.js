fetch('https://avancera.app/cities/')
  .then(response => response.json())
  .then(cities => localStorage.setItem("cities", JSON.stringify(cities)));
