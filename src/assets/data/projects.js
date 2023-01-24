import { v4 as uuidv4 } from 'uuid';
import EmployeersCount from '../images/employees.png';
import MarvelSetvice from '../images/MarvelService.PNG';
import Food from '../images/food_new.png';
import PortfolioStarter from '../images/portfolio_starter.png';
import Pulse from "../images/pulse.png";
import Windows from "../images/windows.png";
import Panel from "../images/admin-panel.png";
import Portret from '../images/portret.png';
import PizzaReact from '../images/reactPizza.png'


const projects = [
  {
    id: uuidv4(),
    name: 'Pizza-react',
    img: PizzaReact,
    description: 'An application in which we can filter, add to cart, delete, choose size and type, etc..',
    technologies: 'HTML, CSS, SCSS, TypeScript, React, React-router-dom, Redux-Toolkit, AXIOS, mockApi',
    tools: 'Webpack, NPM, Git, Figma, DevTools',
    url: 'https://react-pizza-brown.vercel.app/',
    source: 'https://github.com/AndrewTihonyuk878/react-pizza',
  },
  {
    id: uuidv4(),
    name: 'Marvel Service',
    img: MarvelSetvice,
    description: 'Marvel Service is an application where you can view Marvel characters and the comics with their participation.',
    technologies: 'HTML, CSS, SCSS, React, React Router, Marvel Comics API',
    tools: 'Webpack, NPM, Git, Figma',
    url: 'https://marvel-starter-react-hooks.vercel.app/',
    source: 'https://github.com/AndrewTihonyuk878/marvel_starter_react_hooks',
  },
  {
    id: uuidv4(),
    name: 'EDA',
    img: EmployeersCount,
    description: 'Employees data arrangement (EDA) web app. There are the features of changing and filtering the employees data in the app.',
    technologies: 'HTML, CSS, SCSS, React, Redux',
    tools: 'Webpack, NPM, Git',
    url: 'https://employers-one.vercel.app/',
    source: 'https://github.com/AndrewTihonyuk878/employers',
  },
  {
    id: uuidv4(),
    name: 'Portrait on canvas',
    img: Portret,
    description: 'Portrait on canvas - it was an interesting project on vanilla JavaScript, in which I got good practical experience.',
    technologies: 'HTML, CSS, SASS, JavaScript',
    tools: 'Gulp, NPM, Git',
    url: 'https://andrewtihonyuk878.github.io/picture/',
    source: 'https://github.com/AndrewTihonyuk878/picture',
  },
  {
    id: uuidv4(),
    name: 'PortfolioStarter',
    img: PortfolioStarter,
    description: 'One type of portfolio site.',
    technologies: 'HTML, CSS, SASS, JavaScript',
    tools: 'Gulp, NPM, Git',
    url: 'https://andrewtihonyuk878.github.io/portfolio_starter/',
    source: 'https://github.com/AndrewTihonyuk878/portfolio_starter',
  },
  {
    id: uuidv4(),
    name: 'Balcony glazing',
    img: Windows,
    description: 'Modern landing page',
    technologies: 'HTML, CSS, SCSS, JavaScript, jQuery',
    tools: 'Webpack, Galp, NPM, Git',
    url: 'https://andrewtihonyuk878.github.io/windows/',
    source: 'https://github.com/AndrewTihonyuk878/windows/tree/gh-pages',
  },
  {
    id: uuidv4(),
    name: 'Pulse',
    img: Pulse,
    description: 'This is a project where I practiced with modals, forms and tabs. Also used in it slick-slider.',
    technologies: 'HTML, CSS, JavaScript, Jquery',
    tools: 'NPM, Git',
    url: 'https://andrewtihonyuk878.github.io/pulse/',
    source: 'https://github.com/AndrewTihonyuk878/pulse',
  },
  {
    id: uuidv4(),
    name: 'Food',
    img: Food,
    description: 'This is an interesting project where I got good experience with modals, tabs, calculator, timer and slider',
    technologies: 'HTML, CSS, SCSS, JavaScript',
    tools: 'Gulp, NPM, Git, Webpack, Json-server, Bundle.js',
    url: 'https://andrewtihonyuk878.github.io/food_new/',
    source: 'https://github.com/AndrewTihonyuk878/food_new',
  },
  {
    id: uuidv4(),
    name: "Admin-panel",
    img: Panel,
    description: 'This is an admin panel that deletes, adds and filters users in the database in real time.',
    technologies: 'HTML, CSS, SASS, React, Redux, Redux-thunk, Redux-Toolkit',
    tools: 'Webpack, NPM, Git',
    url: 'https://admin-panel-kappa-olive.vercel.app/',
    source: 'https://github.com/AndrewTihonyuk878/admin_panel',
  },
  
];

export default projects;
