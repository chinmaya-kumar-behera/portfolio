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
import socketIo from "../../_asssets/logo/socketIO.png";



// Workers Hive
import workersHiveLogo from "../../_asssets/images/projects/workers-hive/logo.jpg"
import workersHiveThumbNail from "../../_asssets/images/projects/workers-hive/thumbnail.png"
import wh_sample_1 from "../../_asssets/images/projects/workers-hive/sample_img_1.png";
import wh_sample_2 from "../../_asssets/images/projects/workers-hive/sample_img_2.png";
import wh_sample_3 from "../../_asssets/images/projects/workers-hive/sample_img_3.png";
import wh_sample_4 from "../../_asssets/images/projects/workers-hive/sample_img_4.png";
import wh_sample_5 from "../../_asssets/images/projects/workers-hive/sample_img_5.png";
import wh_sample_6 from "../../_asssets/images/projects/workers-hive/sample_img_6.png";
import wh_sample_7 from "../../_asssets/images/projects/workers-hive/sample_img_7.png";
import wh_sample_8 from "../../_asssets/images/projects/workers-hive/sample_img_8.png";
import wh_sample_9 from "../../_asssets/images/projects/workers-hive/sample_img_9.png";
import wh_sample_10 from "../../_asssets/images/projects/workers-hive/sample_img_10.png";


// shopping cart
import shoppingcartThumbNail from "../../_asssets/images/projects/shoppingCart/thumbnail.png"
import sc_sample_1 from "../../_asssets/images/projects/shoppingCart/image1.png";
import sc_sample_2 from "../../_asssets/images/projects/shoppingCart/image2.png";
import sc_sample_3 from "../../_asssets/images/projects/shoppingCart/image3.png";
import sc_sample_4 from "../../_asssets/images/projects/shoppingCart/image4.png";
import sc_sample_5 from "../../_asssets/images/projects/shoppingCart/image5.png";
import sc_sample_6 from "../../_asssets/images/projects/shoppingCart/image6.png";
import sc_sample_7 from "../../_asssets/images/projects/shoppingCart/image7.png";
import sc_sample_8 from "../../_asssets/images/projects/shoppingCart/image8.png";


// for LaslesVPN Landing page
import LaslesVPN_landingPage from "../../_asssets/images/projects/lasles-vpn/thumbnail.png";

// forkify
import ffThumbnail from "../../_asssets/images/projects/forkify/thumbnail.png"
import ff_sample_1 from "../../_asssets/images/projects/forkify/ff_sample_1.png"
import ff_sample_2 from "../../_asssets/images/projects/forkify/ff_sample_2.png"
import ff_sample_3 from "../../_asssets/images/projects/forkify/ff_sample_3.png"

// codeshare
import csThumbnail from "../../_asssets/images/projects/codeshare/thumbnail.png";
import cs_sample_1 from "../../_asssets/images/projects/codeshare/sample1.png";
import cs_sample_2 from "../../_asssets/images/projects/codeshare/sample2.png";
import cs_sample_3 from "../../_asssets/images/projects/codeshare/sample3.png";

// photocloud
import pcThumbnail from "../../_asssets/images/projects/photocloud/thumbnail.png";
import pc_sample_1 from "../../_asssets/images/projects/photocloud/sample1.png";
import pc_sample_2 from "../../_asssets/images/projects/photocloud/sample2.png";
import pc_sample_3 from "../../_asssets/images/projects/photocloud/sample3.png";


// photocloud
import wpthumbnail from "../../_asssets/images/projects/weather/thumbnail.png";
import wp_sample_1 from "../../_asssets/images/projects/weather/sample1.png";


export const ProjectLists = [
  // workers hive
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
      {
        id: 4,
        src: wh_sample_8,
      },
      {
        id: 4,
        src: wh_sample_9,
      },
      {
        id: 4,
        src: wh_sample_10,
      },
    ],
    topDesc: `This is a comprehensive MERN stack Web Application providing on demand service at the customers doorstep. The services are in various fields like Electronics, plumbing etc. I have used the latest technology for building this app. `,

    features: [
      { id: 1, desc: "Search Technician" },
      { id: 2, desc: "User Registration for Service Providers" },
      {
        id: 3,
        desc: "Real-Time Chat Window",
      },
      {
        id: 4,
        desc: "Admin Dashboards",
      },
      {
        id: 5,
        desc: "Payment Integration for easy Transaction",
      },
      {
        id: 6,
        desc: "Appointments dashboard and history for both user and Service providers",
      },
    ],
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
      { name: "Socket.IO", logo: socketIo },
      { name: "Tailwind.css", logo: tailwind },
    ],
    githubLink: "https:/github.com/chinmaya-kumar-behera",
    logo: workersHiveLogo,
    isOpenSourse: false,
    websiteLink: "https://workers-hive.vercel.app/",
    isDisplayed: true,
  },

  {
    id: 2,
    projectTitle: "Shopping Cart",
    description: "A comprehensive shopping cart eCommerce website.",
    thumbnaiil: shoppingcartThumbNail,
    images: [
      {
        id: 1,
        src: sc_sample_1,
      },
      {
        id: 2,
        src: sc_sample_2,
      },
      {
        id: 3,
        src: sc_sample_3,
      },
      {
        id: 4,
        src: sc_sample_4,
      },
      {
        id: 4,
        src: sc_sample_5,
      },
      {
        id: 4,
        src: sc_sample_6,
      },
      {
        id: 4,
        src: sc_sample_7,
      },
      {
        id: 4,
        src: sc_sample_8,
      },
    ],
    topDesc: `Developed a comprehensive shopping cart eCommerce website that showcases products based on various categories. Users can select and add products to the cart, and from the cart section, they can proceed to checkout and place orders. The website integrates Razorpay for secure payment processing. Users can also view their order history.`,
    features: [
      { id: 1, desc: "Product Display by Category" },
      { id: 2, desc: "Shopping Cart" },
      {
        id: 3,
        desc: "Checkout and Order Placement",
      },
      {
        id: 4,
        desc: "Order History",
      },
      {
        id: 5,
        desc: "Dark and Light Mode",
      },
      {
        id: 6,
        desc: "Syntax highlighting for various programming languages. (like JavaScript and Python)",
      },
      { id: 7, desc: "Code sharing with unique URLs." },
      { id: 8, desc: "Responsive design for mobile and desktop devices." },
    ],
    workDetails: [
      {
        id: 1,
        desc: `Products are organized and displayed based on various categories for easy browsing. Users can filter products by category, price, and other attributes..`,
      },
      {
        id: 2,
        desc: `Users can add products to the shopping cart with a single click. The cart displays selected products with their quantities and prices. Users can update product quantities or remove items from the cart.`,
      },
      {
        id: 3,
        desc: `Seamless checkout process allowing users to review their cart items before placing an order. Integrated Razorpay for secure and efficient payment processing. Users receive order confirmation and details after a successful transaction.`,
      },
      {
        id: 4,
        desc: `Users can view their past orders and order details. Order history includes product details, order status, and payment information.`,
      },
      {
        id: 5,
        desc: `Implemented dark and light mode for better user experience. Users can switch between modes based on their preference.`,
      },
    ],
    techStacks: [
      { name: "React.js", logo: react },
      { name: "Node.js", logo: node },
      { name: "MongoDB", logo: mongodb },
      { name: "Tailwind.css", logo: tailwind },
    ],
    githubLink: "https://github.com/chinmaya-kumar-behera/shopping-cart",
    logo: workersHiveLogo,
    isOpenSourse: true,
    websiteLink: "https://chinmaya-shoppingcart.vercel.app/",
    isDisplayed: true,
  },

  // code share
  {
    id: 3,
    projectTitle: "CodeShare",
    description:
      "This project is a clone of the popular CodeShare website, allowing users to collaborate on code in real-time.",
    thumbnaiil: csThumbnail,
    images: [
      {
        id: 1,
        src: cs_sample_1,
      },
      {
        id: 2,
        src: cs_sample_2,
      },
      {
        id: 3,
        src: cs_sample_3,
      },
    ],

    topDesc: `This project is a clone of the popular CodeShare website, allowing users to collaborate on code in real-time. `,
    features: [
      { id: 1, desc: "Real-time code collaboration." },
      { id: 2, desc: "Download the codes as text file." },
      {
        id: 3,
        desc: "User authentication mechanisms including login and signup functionalities.",
      },
      {
        id: 4,
        desc: "User-centric dashboard providing detailed insights into code sharing history and activity.",
      },
      {
        id: 5,
        desc: "’view-only’ mode feature allowing users to restrict access to shared code to others.",
      },
      {
        id: 6,
        desc: "Syntax highlighting for various programming languages. (like JavaScript and Python)",
      },
      { id: 7, desc: "Code sharing with unique URLs." },
      { id: 8, desc: "Responsive design for mobile and desktop devices." },
    ],
    workDetails: [
      {
        id: 1,
        desc: "Build thid popular codeshare site using React.js, Node.js, MongoDB and tailwindcss. Tried to make the User Experience totally same as the original site.",
      },
      {
        id: 2,
        desc: "Implemented page URL navigation using the `react-router-dom` library in React.js, assigning unique URLs for each user session, enabling easy sharing of code links.",
      },
      {
        id: 3,
        desc: "Used Monaco code editor for syntax highlighting across multiple programming languages, including JavaScript and Python.",
      },
      {
        id: 4,
        desc: "Enabled real-time code collaboration using Socket.IO, allowing users to collaborate synchronously on shared code snippets.",
      },
      {
        id: 5,
        desc: "Utilized Tailwind CSS for responsive design, ensuring optimal rendering on both mobile and desktop devices.",
      },
      {
        id: 6,
        desc: "Notably, the application includes advanced features allowing users to restrict access to shared code to ’view-only’ mode.",
      },
      {
        id: 7,
        desc: "implemented a user-centric dashboard providing detailed insights into code sharing history and activity.",
      },
      {
        id: 7,
        desc: "Robust user authentication mechanisms including login and signup functionalities.",
      },
    ],
    techStacks: [
      { name: "React.js", logo: react },
      { name: "Node.js", logo: node },
      { name: "mongoose", logo: mongodb },
      { name: "Tailwindcss", logo: tailwind },
      { name: "Socket.IO", logo: socketIo },
    ],
    githubLink: "https://github.com/chinmaya-kumar-behera/codeshare",
    logo: workersHiveLogo,
    isOpenSourse: true,
    websiteLink: "https://codeshare.chinmaya.vercel.app/",
    isDisplayed: true,
  },

  // photo clould
  {
    id: 4,
    projectTitle: "PhotoCloud",
    description:
      "This site is very useful to upload your local images in the cloud and generate image remote image urls foeach each and every images.",
    thumbnaiil: pcThumbnail,
    images: [
      {
        id: 1,
        src: pc_sample_1,
      },
      {
        id: 2,
        src: pc_sample_2,
      },
      {
        id: 3,
        src: pc_sample_3,
      },
    ],

    topDesc: `This is a fully MERN stack web app, allows users to generate image links so that they store it on cloud and share it online to others. `,
    features: [
      { id: 1, desc: "Image Upload upto 10mb size." },
      {
        id: 2,
        desc: "Generate remote image urls for your local photo and get instant access to shareable remote URLs for every uploaded image.",
      },
      {
        id: 3,
        desc: "Can use a specific image for some time period only.",
      },
    ],
    workDetails: [
      {
        id: 1,
        desc: "This is a fully MERN stack web app, allows users to generate image links so that they store it on cloud and share it online to others.",
      },
      {
        id: 2,
        desc: "Additionally used Tailwindcss for smooth User Experience.",
      },
      {
        id: 3,
        desc: "Developed functionality to dynamically generate remote image URLs for specific time period. Utilized HTML <img> tags with dynamic src attributes linked to server endpoints, enabling developers to embed images in web applications.",
      },
    ],
    techStacks: [
      { name: "React.js", logo: react },
      { name: "Node.js", logo: node },
      { name: "mongoose", logo: mongodb },
      { name: "Tailwindcss", logo: tailwind },
    ],
    githubLink: "https://github.com/chinmaya-kumar-behera/photocloud",
    logo: workersHiveLogo,
    isOpenSourse: true,
    websiteLink: "https://photocloud.vercel.app/",
    isDisplayed: true,
  },

  // wather app
  {
    id: 5,
    projectTitle: "Weather-App",
    description:
      "This Weather App allows users to check the current weather and weekly forecast for a specific city. Users can search for weather details by entering the city name or allowing the app to use their current location.",
    thumbnaiil: wpthumbnail,
    images: [
      {
        id: 1,
        src: wp_sample_1,
      },
    ],

    topDesc: `This Weather App allows users to check the current weather and weekly forecast for a specific city. Users can search for weather details by entering the city name or allowing the app to use their current location. `,
    features: [
      {
        id: 1,
        desc: "Display current weather details including temperature, weather condition, wind speed, humidity, and more.",
      },
      {
        id: 2,
        desc: "Show a weekly forecast with temperature and weather condition for the upcoming days.",
      },
      {
        id: 3,
        desc: "Search for weather details by city name.",
      },
      {
        id: 4,
        desc: "Responsive design for a seamless experience on various devices.",
      },
    ],
    workDetails: [
      {
        id: 1,
        desc: "Developed this weather app by using React.js and tailwindcss.",
      },
      {
        id: 2,
        desc: "Used OpenWeather API for weather Info for a perticular city.",
      },
      {
        id: 3,
        desc: "Worked with Navigation to get browsers current location.",
      },
    ],
    techStacks: [
      { name: "React.js", logo: react },
      { name: "Tailwindcss", logo: tailwind },
    ],
    githubLink: "https://github.com/chinmaya-kumar-behera/weather-app",
    logo: workersHiveLogo,
    isOpenSourse: true,
    websiteLink: "https://weather.chinmaya.vercel.app/",
    isDisplayed: true,
  },

  // forkify
  {
    id: 6,
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
    ],
    techStacks: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: js },
    ],
    githubLink: "https://github.com/chinmaya-kumar-behera/forkify",
    logo: workersHiveLogo,
    isOpenSourse: true,
    websiteLink: "https://forkify-beta-snowy.vercel.app/",
    isDisplayed: true,
  },
];
