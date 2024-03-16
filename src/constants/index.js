import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "0",
    title: "Features",
    url: "#features",
  },

  {
    id: "2",
    title: "Know More",
    url: "#knowmore",
  },

  {
    id: "3",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Protecting Your Digital Presence",
    text: "Gain insights into cybersecurity measures and strategies to safeguard your online identity and sensitive information.",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Connect With AI",
    text: "Dentify the platform or interface through which you can access the chatbot. This could be a website, a messaging app, or a dedicated application.",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Demystifying Data Analytics",
    text: "Learn the fundamentals of data analysis, including tools and methodologies, to extract meaningful insights from raw data.",
    status: "done",
    imageUrl: roadmap4,
    colorful: true,
  },
  {
    id: "3",
    title: "Protecting Your Digital Presence",
    text: "Gain insights into cybersecurity measures and strategies to safeguard your online identity and sensitive information.",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Marketing",
    text: "Chat assistant for the paid ads team Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, et!",
  },
  {
    id: "1",
    title: "Sales",
    text: "Chat assistant for the Sales teams Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, et!",
  },
  {
    id: "2",
    title: "Finance",
    text: "Chat assistant for the Finance teams. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, et!",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Video generator",
    text: "Video generating AI refers to artificial intelligence   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, optio.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Audio generating",
    text: "Audio generating AI refers to artificial intelligence Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, optio.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Photo generating",
    text: "Photo generating AI refers to artificial intelligence Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, optio.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Lyrics generating",
    text: "Lyrics generating AI refers to artificial intelligence Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, optio.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Code generating",
    text: "Code generating AI refers to artificial intelligence Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, optio.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Idea generating",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responseset consectetur adipisicing elit. Error, optio.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
