import topics from "./data/topics.json" assert {type: 'json'};
import terms from "./data/terms.json" assert {type: 'json'};
import category from "./data/category.json" assert {type: 'json'};
import data from "./data/data.json" assert {type: 'json'};

window.topicsData = topics;
window.termsData = terms;
window.categoryData = category;
window.mainData = data;

const script = document.createElement("script");
script.src = "/wp-content/themes/area-theme-live/assets/vue/js/area-research.app.js?rnd="+Math.random(0,1000);
document.body.appendChild(script);