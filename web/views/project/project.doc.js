// skill logos

import js from "../../_asssets/logo/javascript.png";
import css from "../../_asssets/logo/css.png";
import git from "../../_asssets/logo/git.png";
import sql from "../../_asssets/logo/sql.png";
import react from "../../_asssets/logo/react.png";
import node from "../../_asssets/logo/nodejs.png";
import mongodb from "../../_asssets/logo/mongodb.png";
import python from "../../_asssets/logo/python.png";
import tailwind from "../../_asssets/logo/tailwind.png";
import next from "../../_asssets/logo/next.png";
import html from "../../_asssets/logo/html.png";


// WOrkers Hive
import workersHiveThumbNail from "../../_asssets/images/projects/workers-hive/thumbnail.png"
import wh_sample_1 from "../../_asssets/images/projects/workers-hive/sample_img_1.png";
import wh_sample_2 from "../../_asssets/images/projects/workers-hive/sample_img_2.png";
import wh_sample_3 from "../../_asssets/images/projects/workers-hive/sample_img_3.png";
import wh_sample_4 from "../../_asssets/images/projects/workers-hive/sample_img_4.png";
import wh_sample_5 from "../../_asssets/images/projects/workers-hive/sample_img_5.png";
import wh_sample_6 from "../../_asssets/images/projects/workers-hive/sample_img_6.png";
import wh_sample_7 from "../../_asssets/images/projects/workers-hive/sample_img_7.png";

import workersHiveLogo from "../../_asssets/images/projects/workers-hive/logo.jpg"

// for LaslesVPN Landing page
import LaslesVPN_landingPage from "../../_asssets/images/projects/lasles-vpn/thumbnail.png";


// forkify

import ffThumbnail from "../../_asssets/images/projects/forkify/thumbnail.png"
import ff_sample_1 from "../../_asssets/images/projects/forkify/ff_sample_1.png"
import ff_sample_2 from "../../_asssets/images/projects/forkify/ff_sample_2.png"
import ff_sample_3 from "../../_asssets/images/projects/forkify/ff_sample_3.png"


export const ProjectLists = [
  {
    id: 1,
    projectTitle: "Workers Hive",
    description:
      "A Web Application for providing on demand service at the customers doorstep.",
    thumbnaiil: workersHiveThumbNail,
    images: [
      {
        id: 1,
        src: wh_sample_1,
      },
      {
        id: 2,
        src: wh_sample_2,
      },
      {
        id: 3,
        src: wh_sample_3,
      },
      {
        id: 4,
        src: wh_sample_4,
      },
      {
        id: 4,
        src: wh_sample_5,
      },
      {
        id: 4,
        src: wh_sample_6,
      },
      {
        id: 4,
        src: wh_sample_7,
      },
    ],
    topDesc: `This is a comprehensive MERN stack Web Application providing on demand service at the customers doorstep. The services are in various fields like Electronics, plumbing etc. I have used the latest technology for building this app. `,
    workDetails: [
      {
        id: 1,
        desc: "Implemented a search functionality on the home page enabling users to find technicians based on specific criteria, enhancing user experience and service accessibility. ",
      },
      {
        id: 2,
        desc: "Designed and implemented user registration, allowing customers to access the platform and avail of services.",
      },
      {
        id: 3,
        desc: "Integrated a real-time chat window, facilitating seamless communication between users and technicians. This feature enhances user engagement and allows quick problem resolution. ",
      },
      {
        id: 4,
        desc: "Developed an admin panel to efficiently manage and maintain service categories such as plumber, electrician, and barber. Included functionality to add and update sub-categories for each service, ensuring accurate classification of services offered.",
      },
    ],
    techStacks: [
      { name: "React.js", logo: react },
      { name: "Node.js", logo: node },
      { name: "MongoDB", logo: mongodb },
      { name: "Next.js", logo: next },
      { name: "Tailwind.css", logo: tailwind },
    ],
    githubLink: "https:/github.com/chinmaya-kumar-behera",
    logo: workersHiveLogo,
    isOpenSourse: false,
    websiteLink: "https://workers-hive.vercel.app/",
  },

  {
    id: 2,
    projectTitle: "Forkify",
    description: "A web app for finding the food recipe.",
    thumbnaiil: ffThumbnail,
    images: [
      {
        id: 1,
        src: ff_sample_1,
      },
      {
        id: 2,
        src: ff_sample_2,
      },
      {
        id: 3,
        src: ff_sample_3,
      },
    ],

    topDesc: `This innovative tool allows users to effortlessly discover ingredients of any food. `,
    workDetails: [
      {
        id: 1,
        desc: "Build thid Recipe Finder app using HTML, CSS, and JavaScript. Maintained a clean user interface using CSS to enhance the overall user experience, ensuring ease of navigation and readability of search results and bookmarked recipes",
      },
      {
        id: 2,
        desc: "Utilized JavaScript's Fetch API to asynchronously fetch data from a third-party API capable of providing access to over one million food items, enhancing the application's functionality and usability.",
      },
      {
        id: 3,
        desc: "Worked with browsers localstorage for storing bookmarked items.",
      },
      {
        id: 4,
        desc: "Worked with browsers localstorage for storing bookmarked items.",
      },
    ],
    techStacks: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: js },
    ],
    githubLink: "https:/github.com/chinmaya-kumar-behera",
    // logo: workersHiveLogo,
    isOpenSourse: true,
    websiteLink: "https://easy-recipe-finder.netlify.app/",
  },
];
