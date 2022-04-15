import {
  Facebook,
  Twitter,
  LinkedIn,
  LaptopChromebook,
  GitHub,
  AccessibilityNew,
  Language,
  Loyalty,
} from "@material-ui/icons";

const data = {
  name: "Berlianto Ferdynand",
  title: "Beginner Front End Developer",
  displayImage: "me.jpg",
  birthday: "June, 12, 1996",
  email: "xvferdy@gmail.com",
  address: "Depok, Indonesia",
  phone: "0813 4040 2323",

  // for profile and header
  socials: {
    Twitter: {
      link: "https://twitter.com/xvferdy",
      text: "My Twitter",
      icon: <Twitter />,
    },
    Facebook: {
      link: "http://ferdyberlianto.blogspot.com/",
      text: "My Blog",
      icon: <Facebook />,
    },

    Github: {
      link: "https://github.com/xvferdy",
      text: "xvferdy",
      icon: <GitHub />,
    },
  },
  about_p1:
    "Hello! all my name is Berlianto Ferdynand Pongbubun and I enjoy creating things that live on the internet. I'm a fresh graduate at Gunadarma University in Depok studying computer science and web development. I start learning PHP as my first programing language and my interest in web development go up when I create a portfolio and a simple dicee game using a Javascript.",
  about_p2:
    "Now days I'm still grinding in web development world and this really taught me alot about there are more things and cool stuff out there besides HTML,  CSS and JAVASCRIPT! Recently I strive to create software that has a MERN stack on it because this will help us know how the basic flow of web development.",
  interest_p1:
    "I love learning new stuff with better ways like user experiences with clean, efficient, and scalable code. I consider looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with cool people that bring out the best in me.",
  interest_p2:
    "When I'm not in front of a computer screen, I'm probably eating, looking up to the sky, watching movies, or sleeping in the morning.",
  experiences: [
    {
      title: "Fresh Graduated",
      date: "2020 - Present",
      description: "No work experience.",
    },
  ],
  education: [
    {
      title: "Barana' Senior High School, Toraja",
      description: "Science major.",
      date: "2011 - 2014",
    },
    {
      title: "Gunadarma University, Depok",
      description: "Bachelor of Informatics Engineering. GPA 3.03",
      date: "2014 - 2020",
    },
    {
      title: "Javascript Udemy Course",
      description:
        "Learn the basics of the language, understanding variables, objects, arrays, and function. Also fetch and manage information from third-party API's.",
      date: "2020 - 2021",
    },
  ],
  skills: [
    {
      title: "Tech ",
      description: [
        "Javascript",
        "React Js",
        "Material-UI",
        "Node.Js",
        "Express",
        "Git / Github",
      ],
      icon: <Language />,
    },
    {
      title: "Softskill",
      description: ["Self-learning", "Discipline", "Empathy"],
      icon: <AccessibilityNew />,
    },

    {
      title: "Aim",
      description: ["MySQL", "Context ", "Bootstrap", "Deployment"],
      icon: <Loyalty />,
    },
  ],
  projects: [
    {
      title: "Covid19 search",
      image: "covid.png",
      link: "https://github.com/xvferdy/covid19-search",
      description: "React",
    },
    {
      title: "Daftar Ekskul",
      image: "daftar-ekskul.png",
      link: "https://github.com/xvferdy/daftar-ekskul",
      description: "HTML, CSS, PHP, MySQL",
    },
    {
      title: "Ecomm",
      image: "ecomm.png",
      link: "https://github.com/xvferdy/ecomm",
      description: "Javascript, Bulma, Node.Js, Express",
    },
    {
      title: "Maze",
      image: "maze.png",
      link: "https://github.com/xvferdy/maze",
      description: "HTML, CSS, Javascript, MatterJS",
    },
    {
      title: "Newsletter",
      image: "newsletter.png",
      link: "https://github.com/xvferdy/subscribe-to-my-newsletter2",
      description: "Javascript, Bootstrap, Node.Js, Express",
    },
    {
      title: "Rock Paper Scissors",
      image: "suwit.png",
      link: "https://github.com/xvferdy/rock-paper-scissors",
      description: "HTML, CSS, Javascript",
    },
  ],
};

export default data;
