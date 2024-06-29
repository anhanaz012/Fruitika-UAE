const recipes = [
  {
    id: 1,
    title: "DJAJ MAHSHI – WHOLE STUFFED CHICKEN",
    author: "Admin",
    date: "27 December, 2019",
    excerpt:
      "Sauté the diced onions in olive oil until translucent. Add the rice and sauté for a couple of minutes. Add the chicken broth ...",
    image: "news-bg-1",
    details: "Details for DJAJ MAHSHI – WHOLE STUFFED CHICKEN...",
  },
  {
    id: 2,
    title: "SPICED LAMB SHOULDER - WITH ONIONS & FREEKEH",
    author: "Admin",
    date: "27 December, 2019",
    excerpt:
      "Brown the meat, breaking it up into small pieces with your spatula. Season with salt, pepper, 1/2 tsp Allspice & a little bit of...",
    image: "news-bg-2",
    details: "Details for SPICED LAMB SHOULDER - WITH ONIONS & FREEKEH...",
  },
  {
    id: 3,
    title: "FATTET MAKDOUS - STUFFED EGGPLANTS",
    author: "Admin",
    date: "27 December, 2019",
    excerpt:
      "Wash the chickens and pat dry inside and out and set them into a shallow roasting pan.Divide the rice into two separate bowls...",
    image: "news-bg-3",
    details: "Details for FATTET MAKDOUS - STUFFED EGGPLANTS...",
  },
  {
    id: 4,
    title: "WHITE CHOCOLATE & PISTACHIO-STUFFED DATES",
    author: "Admin",
    date: "27 December, 2019",
    excerpt:
      "Use a small sharp knife to cut a slit in each date. Remove and discard seeds. Insert 2 pistachios inside each date cavity...",
    image: "news-bg-4",
    details: "Details for WHITE CHOCOLATE & PISTACHIO-STUFFED DATES...",
  },
  {
    id: 5,
    title: "SPINACH, CORN AND CHEESE ENCHILADAS",
    author: "Admin",
    date: "27 December, 2019",
    excerpt:
      "Preheat oven to 180°C/160°C fan forced. Lightly grease a 5cm-deep, 20 x 33cm baking dish. Place the zucchini...",
    image: "news-bg-5",
    details: "Details for SPINACH, CORN AND CHEESE ENCHILADAS...",
  },
  {
    id: 6,
    title: "SPICY MEXICAN TOMATO AND BEAN SOUP",
    author: "Admin",
    date: "27 December, 2018",
    excerpt:
      "Preheat oven to 180°C/160°C fan forced. Line 2 large baking trays with baking paper. Place tortillas in a single layer on prepared...",
    image: "news-bg-6",
    details: "Details for SPICY MEXICAN TOMATO AND BEAN SOUP...",
  },
];

const container = document.getElementById("recipe-cards-container");
recipes.forEach((recipe) => {
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6");
  card.innerHTML = `
    <div class="single-latest-news">
      <a href="recipe_details.html?id=${recipe.id}">
        <div class="latest-news-bg ${recipe.image}"></div>
      </a>
      <div class="news-text-box">
        <h3><a href="recipe_details.html?id=${recipe.id}">${recipe.title}</a></h3>
        <p class="blog-meta">
          <span class="author"><i class="fas fa-user"></i> ${recipe.author}</span>
          <span class="date"><i class="fas fa-calendar"></i> ${recipe.date}</span>
        </p>
        <p class="excerpt">${recipe.excerpt}</p>
        <a href="recipe_details.html?id=${recipe.id}" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
      </div>
    </div>
  `;
  container.appendChild(card);
});
