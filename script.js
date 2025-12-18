// --- Sæt din egen API-nøgle her ---
const apiKey = "97fbae2c872b954098f45461ffe60627"; 
const city = "Malaga,ES";
const weatherEl = document.getElementById("weather");

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP-fejl! status: ${response.status}`);
    }

    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const icon = data.weather[0].icon; 
    const desc = data.weather[0].description;

    weatherEl.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}" />
      <span>${temp}° C</span>
    `;
  } catch (error) {
    console.error("Fejl ved hentning af vejret:", error);
    weatherEl.innerHTML = `<span>Vejr ikke tilgængeligt</span>`;
  }
}

// Kør funktionen når siden indlæses
getWeather();

// Opdater vejret automatisk hvert 3. minut (300.000 ms)
setInterval(getWeather, 300000);




const panel = document.getElementById("newsPanel");
const toggle = document.getElementById("newsToggle");
const arrow = document.getElementById("arrowIcon");
const body = document.body;

toggle.addEventListener("click", () => {
    panel.classList.toggle("active");
    body.classList.toggle("no-scroll"); // låser/åbner scroll

    if(panel.classList.contains("active")) {
        arrow.textContent = "←"; // pil ned når åbent
    } else {
        arrow.textContent = "→"; // pil op når lukket
    }
});




const video = document.querySelector('.hero-video');
const toggleBtn = document.getElementById('videoToggle');
const pauseIcon = toggleBtn.querySelector('.pause-icon');
const playIcon = toggleBtn.querySelector('.play-icon');

toggleBtn.addEventListener('click', () => {
  if(video.paused) {
    video.play();
    pauseIcon.style.display = 'flex';
    playIcon.style.display = 'none';
  } else {
    video.pause();
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
  }
});





document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Luk alle andre
      accordions.forEach(acc => {
        acc.classList.remove('active');
        acc.querySelector('.accordion-content').style.maxHeight = null;
      });

      // Hvis denne ikke var aktiv, åbn den
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        // Luk den igen – smooth animation
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
});



const links = document.querySelectorAll('.lang-switch a');
const currentPath = window.location.pathname;

links.forEach(link => {
  if(link.getAttribute('href') === currentPath || currentPath.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});