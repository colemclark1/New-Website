import PrattleImage from "../../images/prattle.jpg";
import SpotifyImage from "../../images/PlaylistManager.jpg";
import Me from "../../images/web.jpg";
import JustMove from "../../images/JustMove.jpg";
import AIProject from "../../images/AIProject.jpg";
import ClimateTree from "../../images/climate_tree.jpg";

const webApp = "Web Application";
const webServer = "Web Server";
const aiModel = "AI Model";
const mobileApp = "Mobile Application";
const arduinoApp = "Arduino Project";

const personal = "Personal Project";
const gradProject = "Graduate School Project";

export const projects = [
  {
    title: "Climate Tree",
    image: ClimateTree,
    textShort:
      "Web application for searching and discussing climate change solutions from around the world",
    textLong:
      "As a class of about 25 students, we created a web application for finding and discussing climate change solutions from around the world. I led a sub-team of about 6 students where our primary responisibility was to create and manage a database containing data (population, population density, carbon, longitude/latitude, climate types, etc. ) from places (cities, states, nations) around the world. We were given a large amount of raw data that we had to cleanse and standardize before placing it into a database. Once cleansed, I wrote a script to create the database, create the tables, and add the associated records. We used a PostgreSQL relational database for storage. Our team then designed and implemented a Spring Boot Server and a RESTful API in Java for retrieving information from the database. Our API was then used by the frontend team to retreive the information. We also integrated our data with GeoServer.",
    deployed: "https://www.climatetree.wiki",
    github: "https://github.com/climatetree",
    tech: [
      "JavaScript",
      "React",
      "Java",
      "PostgreSQL",
      "Spring Boot Server",
      "JPA",
      "Azure",
    ],
    type: webApp,
    for: gradProject,
    year: 2020,
  },
  {
    title: "Spotify API Playlist Manager",
    image: SpotifyImage,
    textShort:
      "Web application for managing users and playlists with the Spotify API",
    textLong:
      "I worked in a team of three people for a class project at Northeastern University where we built a web application using the Spotify Developers API. The front end was created using React and the back end was built using Java, JPA (Java Persistence API), and a MySQL database. Our application supported all user CRUD operations and allowed users to register as a user or a reviewer. Users are able to search for songs or artists, create and delete playlists, add and delete songs to playlists, follow other users, favorite songs, see reviews for songs, and listen to previews of songs. Reviewers can add reviews to songs and delete their own reviews from songs.",
    deployed: "https://cs5610-project-spotify-react.herokuapp.com/",
    github: "",
    tech: [
      "JavaScript",
      "React",
      "HTML/CSS",
      "Spring Boot Server",
      "Java",
      "JPA",
      "MySQL",
      "Spotify API",
    ],
    type: webApp,
    for: gradProject,
    year: 2020,
  },
  {
    title: "Prattle Messaging Server",
    image: PrattleImage,
    deployed: "",
    github: "",
    textLong:
      "As a group project at Northeastern University, our group enhanced a messaging system using Java, Maven, MySQL, and AWS. We designed and implemented the follwing functionalities: user sign-on with username and password, adding and managing user groups, sending private and group messages, queuing messages for offline users, toggling parental controls, and searching for messages.",
    textShort: "Enhanced messaging service",
    tech: ["Java", "Maven", "MySQL"],
    type: webServer,
    for: gradProject,
    year: 2019,
  },
  {
    title: "Artificial Intelligence Project",
    image: AIProject,
    deployed: "",
    github: "",
    textShort: "Predicts movie box office revenue",
    textLong:
      "Using three different algorithms, our team created a model that predicts an interval of box office revenue for a particular movie based on the movie's features (actors, directors, writers, genre, keywords, production company, budget, etc.). The three algorithms that we implemented were Random Forest, a Multi-Layer Perceptron Neural Network, and Naive Bayes. We used the data of 3000 movies (provided by Kaggle) and split this dataset into a training set (2000 movies) and a test set (1000 movies). After creating our model with Python and scikit-learn, were able to predict a movies interval of box office revenue with 61% accuracy.",
    tech: ["Python", "scikit-learn"],
    type: aiModel,
    for: gradProject,
    year: 2019,
  },
  {
    title: "Personal Website",
    image: Me,
    deployed: "http://www.colemclark.com",
    github: "https://github.com/colemclark1/My-Personal-Website",
    textShort: "Learn more about me",
    textLong:
      "The website that you are on right now! I created this website using JavaScript, React, and HTML/CSS. The site is hosted on AWS Amplify and uses AWS S3 for cloud object storage. I started this site back in 2018 as a place to showcase my development skills. Continuously updating the site gives me great feedback on my overall improvement as an engineer. It's also really fun!",
    tech: ["JavaScript", "React", "HTML/CSS", "AWS Amplify", "AWS S3"],
    type: webApp,
    for: personal,
    year: 2022,
  },
  {
    title: "Just Move (Android)",
    image: JustMove,
    deployed: "",
    github: "https://github.com/colemclark1/Just-Move",
    textShort: "High-intensity interval workout generator",
    textLong:
      "An Android app that generates high-intensity interval workouts based on the user specified equipment and exercises. This app was created using Java and XML in Android Studio.",
    tech: ["Java", "Android Studio", "XML"],
    type: mobileApp,
    for: personal,
    year: 2018,
  },
  {
    title: "LED Visualizer",
    image: `${process.env.REACT_APP_COS}/IMG_5105.jpeg`,
    deployed: "",
    github: "",
    textShort: "Festive LED light strip with remote",
    textLong:
      "I wired and programmed an LED light strip to change colors and patterns based on input from an infared remote. I created a circuit using an Elegoo Arduino Uno R3 micro-controller, breadboard, infared remote, and a programmable LED light strip. Once wired, I wrote the code that took the infared remote's input and used that to change the color of the lights on the LED strip. This project was created during the holiday season, so I made the strip Christmas themed with red and green lights. See a demo of the light strip in the video to the right!",
    tech: ["Arduino"],
    type: arduinoApp,
    for: personal,
    year: 2021,
    video: `${process.env.REACT_APP_COS}/IMG_5108.MOV`,
  },
];
