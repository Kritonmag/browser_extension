let elements = document.querySelectorAll(".descriptor")

elements.forEach((item) => {
  if (!item.textContent.includes('|')) {
    item.classList.add('descriptor-no-cursor');
  }
});

elements.forEach(element => {
  element.addEventListener("click", (event) => {
    const clickedText = event.target.innerText.trim();
    if (clickedText.includes('|')) {
      const searchQuery = encodeURIComponent(clickedText);
      window.open(`https://steamcommunity.com/market/search?appid=730&q=${searchQuery}`);
    }
  });
});