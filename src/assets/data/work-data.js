import wineLine from "../images/work/wine.jpg";
import movie from "../images/work/movie.jpg";
import recipe from "../images/work/recipe.jpg";
import restaurant from "../images/work/restaurant.jpg";
import weather from "../images/work/weather.jpg";

const workData = [
  {
    id: "01",
    title: "Wine-Line",
    imgUrl: wineLine,
    category: "E-commerce",
    shortDesc: `E-COMMERCE web store - Buy Wine`,
    website: `https://wine-line.pages.dev/home`,
  },
  {
    id: "02",
    title: "Movie",
    imgUrl: movie,
    category: "Movie",
    shortDesc: `Movie Website - Watch Trailer`,
    website: `https://movie-app-react.pages.dev/home`,
  },
  {
    id: "03",
    title: "Recipe",
    imgUrl: recipe,
    category: "Mini",
    shortDesc: `Recipe Hub - Search your favorite food`,
    description: `The grapes are cultivated in protected 
        designations of origin`,
    website: `https://recipe-react-host.pages.dev/home`,
  },
  {
    id: "04",
    title: "Restaurant",
    imgUrl: restaurant,
    category: "E-commerce",
    shortDesc: `Food Delivery - Order food now`,
    website: `https://restaurant-a18.pages.dev/home`,
  },
  {
    id: "05",
    title: "Weather",
    imgUrl: weather,
    category: "Mini",
    shortDesc: `Weather app - Check the weather`,
    website: `https://ctato1.github.io/weather-app/`,
  },
];

export default workData;
