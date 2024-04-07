import FoodMunch from "./../assets/portfolioImages/FoodMunch.png";
import BookStore from "./../assets/portfolioImages/BookStore.png";
import Weather from "./../assets/portfolioImages/Weather.png";
import EmojiGame from "./../assets/portfolioImages/EmojiGame.png";
import LobsterGraph from "./../assets/portfolioImages/LobsterGraph.png";
import GeminiClone from "./../assets/portfolioImages/GeminiClone.png";
import ConnectR from "./../assets/portfolioImages/ConnectR.png";

// // in progress projects
// import landingPage from "./../assets/portfolioImages/url.jpg";

const ProjectsData = [
  {
    id: "connectR",
    img: ConnectR,
    name: "ConnectR",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://github.com/shashankk19/Connectr",
    source: "https://github.com/shashankk19/Connectr",
    description:
      "Connectr is a feature-rich chat application currently under development, designed to facilitate seamless communication between users. Built with the powerful MERN stack (MongoDB, Express.js, React.js, and Node.js), Connectr offers a robust and scalable architecture. Leveraging the user-friendly interface components provided by Chakra UI, it ensures a visually appealing and intuitive user experience.",
  },
  {
    id: "gemini-clone",
    img: GeminiClone,
    name: "Gemini 2.0 Clone by Vite+React ",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://shashankk19.github.io/Gemini-Clone/",
    source: "https://github.com/shashankk19/Gemini-Clone",
    description:
      "This project is a functional clone of the Gemini 2.0 large language model, built using React and the official Gemini 2.0 API. It leverages the speed and efficiency of Vite for a smooth development experience, allowing for rapid prototyping and iteration. The user-friendly interface enables you to interact with the powerful capabilities of Gemini, asking questions and receiving informative responses in a conversational manner.",
  },
  {
    id: "lobster-graph",
    img: LobsterGraph,
    name: "Vertex K labelling of Loster Graph",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://github.com/shashankk19/Lobster-Assignment",
    source: "https://github.com/shashankk19/Lobster-Assignment",
    description:
      "This project focused on developing an efficient algorithm for vertex labeling in a specific graph type called Homogeneous lobster graphs. The goal was to assign distinct edge weights (labels) to each vertex while minimizing the maximum label used, achieving this within a time complexity of O(2np), where n represents the number of lobsters (connected subgraphs) and p represents the number of children per node.",
  },

  {
    id: "emoji-game",
    img: EmojiGame,
    name: "Emoji Game",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://shashankk19.github.io/EmojiGame/",
    source: "https://github.com/shashankk19/EmojiGame",
    description:
      "Developed a fun and interactive memory game built with React JS. The game challenges players to memorize the positions of various emojis displayed on the screen. Players click on the emojis to reveal them, aiming to find matching pairs within a limited number of turns. The game utilizes React's component-based architecture for a modular and maintainable structure.",
  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

  {
    id: "advice-generator",
    img: Weather,
    name: "Weather App",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://weatherappbyshashankakkapelli.netlify.app",
    source: "https://github.com/shashankk19/WeatherApp",
    description:
      "Developed a Weather App using the Open Weather API and React.js to provide users with real-time weather information. This project allowed me to enhance my skills in API integration and frontend development",
  },

  {
    id: "todo",
    img: BookStore,
    name: "Book Store  ",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://shashankbkstore.ccbp.tech/",
    source: "https://github.com/shashankk19/",
    description:
      "Built a dynamic online bookstore website that allows users to discover popular books. Users can enter keywords and choose the number of results they want to see. I implemented this functionality using asynchronous data fetching with Fetch API GET requests. The website leverages Bootstrap components and classes for a responsive design, prioritizing mobile-friendliness (mobile-first approach). User input for keywords and result limits is handled using HTML form elements (input, select) and managed with JavaScript event listeners, ensuring a seamless user experience.",
  },

  {
    id: "dropdown-nav",
    img: FoodMunch,
    name: "Food Munch Website",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://shashankfmunich.ccbp.tech/",
    source: "https://github.com/shashankk19/foodmunch",
    description:
      "Built a responsive e-commerce website for a food store, allowing users to browse a curated list of food items. Each item displays detailed information and any current offers. Leveraging HTML's core structure elements (li, header, article, footer), I designed a user-friendly layout. To enhance responsiveness and ensure a seamless mobile experience (mobile-first approach), I utilized Bootstrap components and classes. Additionally, I implemented product video previews using Bootstrap's embed and modal functionalities.",
  },
];

// const InprogressProjectsData = [
//   {
//     id: "url-short",
//     img: landingPage,
//     name: "URL shortening API landing page",
//     stack: ["< JavaScript />", "< NodeJS />"],
//     live: "",
//     source: "https://github.com/rimshub/URL-shortening-API-landing-page",
//     description:
//       "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
//   },
// ];

export default { ProjectsData };
