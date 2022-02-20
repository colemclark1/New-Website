import PrattleImage from "../../images/prattle.jpg";
import SpotifyImage from "../../images/PlaylistManager.jpg";
import Me from "../../images/web.jpg";
import JustMove from "../../images/JustMove.jpg";
import AIProject from "../../images/AIProject.jpg";
import ClimateTree from "../../images/climate_tree.jpg";

export const projects = [
    {
      title: "Climate Tree",
      image: ClimateTree,
      textShort: "",
      textLong: "",
      deployed: "https://www.climatetree.wiki",
      github: "",
      kaggle: "",
      tags: [
        "PostgreSQL",
        "Java",
        "React",
        "JavaScript",
        "RESTful API",
        "JPA",
        "Azure",
        "Back-end Development",
      ],
    },
    {
      title: "Spotify API Playlist Manager",
      image: SpotifyImage,
      textShort:
        "I worked in a team of three people for a class project at Northeastern University where we built a web application using the Spotify Developers API. The front end was created using React and the back end was built using Java, JPA (Java Persistence API), and a MySQL database.",
      textLong:
        "I worked in a team of three people for a class project at Northeastern University where we built a web application using the Spotify Developers API. The front end was created using React and the back end was built using Java, JPA (Java Persistence API), and a MySQL database. Our application supported all user CRUD operations and allowed users to register as a user or a reviewer. Users are able to search for songs or artists, create and delete playlists, add and delete songs to playlists, follow other users, favorite songs, see reviews for songs, and listen to previews of songs. Reviewers can add reviews to songs and delete their own reviews from songs. The content came directly from the Spotify Developers API.",
      deployed: "https://cs5610-project-spotify-react.herokuapp.com/",
      github: "",
      kaggle: "",
      tags: [
        "React",
        "JavaScript",
        "BootStrap",
        "RESTful API",
        "JPA",
        "MySQL",
        "Spotify API",
        "Web Development",
      ],
    },
    {
      title: "Prattle Messaging Server",
      image: PrattleImage,
      deployed: "",
      github: "",
      kaggle: "",
      textShort:
        "As a group project at Northeastern University, our group enhanced a messaging system using Java, Maven, MySQL, and an Amazon Web Server. We designed and implemented the follwing functionalities: user sign-on with username and password, adding and managing user groups, sending private and group messages, queuing messages for offline users, toggling parental controls, and searching for messages.",
      tags: ["Java", "Maven", "Sockets", "MySQL", "Agile"],
    },
    {
      title: "Artificial Intelligence Project",
      image: AIProject,
      link: "",
      deployed: "",
      github: "",
      kaggle: "https://www.kaggle.com/c/tmdb-box-office-prediction",
      textShort:
        "Using three different algorithms, our team created a model that predicts an interval of box office revenue for a particular movie based on the movie's features (actors, directors, writers, genre, keywords, production company, budget, etc.). The three algorithms that we implemented were Random Forest, a Multi-Layer Perceptron Neural Network, and Naive Bayes. We used the data of 3000 movies (provided by Kaggle) and split this dataset into a training set (2000 movies) and a test set (1000 movies). After creating our model with Python and scikit-learn, were able to predict a movies interval of box office revenue with 61% accuracy.",
      tags: [
        "Artificial Intelligence",
        "Naive Bayes",
        "Neural Networks",
        "Random Forest",
        "Algorithms",
        "Classification",
        "scikit-learn",
      ],
    },
    {
      title: "Personal Website",
      image: Me,
      deployed: "http://www.colemclark.com",
      github: "https://github.com/colemclark1/My-Personal-Website",
      kaggle: "",
      textShort:
        "The website that you are on right now! I created this website using a combination of React, React-Bootstrap, Bootstrap, HTML, and CSS.",
      tags: [
        "React",
        "JavaScript",
        "Web Development",
        "React Bootstrap",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Just Move (Android App)",
      image: JustMove,
      link: "",
      deployed: "",
      github: "https://github.com/colemclark1/Just-Move",
      kaggle: "",
      textShort:
        "An Android app that generates high-intensity interval workouts based on the user specified equipment and exercises. This app was created using Java and XML in AndroidStudio (still in progress).",
      tags: ["Java", "Android", "Andorid Studio", "XML"],
    },
  ];