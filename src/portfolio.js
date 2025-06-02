/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Megha C Nair",
  subusername:"Megha Nair",
  title: "Hi all, I'm Megha",
  subTitle: emoji(
    "I'm passionate about data — digging deep for insights, modeling the future, and visualizing it all in ways that drive action. Whether it's Python, SQL, Power BI, or machine learning, I use the right tools to solve real problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MeghaCNair",
  linkedin: "https://www.linkedin.com/in/megha-chandrasekharan-nair-analytics/",
  gmail: "meghacnair96@gmail.com",
  kaggle: "https://www.kaggle.com/meghacnair",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "🚀Turn raw data into insights with Python,R & SQL",
    ),
    emoji("📊Build interactive dashboards using Tableau & PowerBI"),
    emoji(
      "🤖 Build ML models and pipelines"
    ),
    emoji("📈 Optimize decision-making with data-driven strategies"),
    emoji("📚 Continuously learning and exploring new technologies"),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Data Analysis and Visualization",
      listOfSkills: ["Python", "R", "Tableau", "Power BI","MS Excel","SQL"],
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Aritificial Intelligence",
      fontAwesomeClassname: "fas fa-robot",
      listOfSkills: ["ML", "NLP","LLM","DL","RAG"]
    },
    {
      skillName: "Statististical Analysis",
      fontAwesomeClassname: "fas fa-chart-line",
      listOfSkills: ["Statistics", "Hypothesis Testing","A/B Testing","Causal Inference"]
    },
    {
      skillName: "DBMS/Big Data",
      fontAwesomeClassname: "fas fa-database",
      listOfSkills: ["SQL", "NoSQL","MongoDB","PySpark","Hive","Hadoop","Spark"]
    },
    {
      skillName: "Cloud Technologies",
      fontAwesomeClassname: "fas fa-cloud",
      listOfSkills: ["AWS", "Azure","GCP"]
    },
    {
      skillName: "Front end development",
      listOfSkills: ["html-5", "css3", "JavaScript", "ReactJS"],
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Project Management",
      fontAwesomeClassname: "fas fa-tasks",
      listOfSkills: ["Agile", "Scrum", "Kanban"]
    },
    {
      skillName:"Domains",
      fontAwesomeClassname: "fas fa-globe",
      listOfSkills: ["Retail","E-commerce","B2B","B2C"]
    }
     
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Texas at Dallas",
      logo: require("./assets/images/UTDLOGO.png"),
      subHeader: "Master of Science in Business Analytics and Artificial Intelligence",
      duration: "January 2024 - December 2025",
      desc: "Teaching Assistant and Student Ambassador for the program.",
      descBullets: [
        "Took courses covering Statistics, Business Analytics, Machine Learning, Predictive Modeling, Business Optimizations, Natural Language Processing, Big Data, Cloud Technologies, Time Series Analysis, Professional Development"
      ]
    },
    {
      schoolName: "Visvesvaraya Technological University",
      logo: require("./assets/images/VTU.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "Auagust 2014 - July 2018",
      desc: "Published a research paper on 'Target Doppler Analysis using Compressive Sensing' in IEEE.",
      descBullets: [
        "Took courses covering operating systems, digital signal processing, digital communication, VLSI design, microprocessors, and microcontrollers."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",
      company: "The University of Texas at Dallas",
      companylogo: require("./assets/images/UTDLOGO.png"),
      date: "Aug 2024 – Present",
      desc: "",
      descBullets: [
        "Facilitated practical learning in data visualization and machine learning using R and Python, improving assessment outcomes by 20%. ",
        "Enhanced course curriculum and content according to industry trends and requirements. "
      ]
    },
    {
      role: "Associate Technology L2",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/Sapient.png"),
      date: "Jun 2022 - July 2023",
      desc: "",
      descBullets: [
        "Developed a mobile Point-of-Sale (mPOS) Application UI for The Container Store increasing customer satisfaction by 20%.",
        "Conducted funnel analysis to identify drop-off points, optimizing user navigation and reducing drop-off rates by 18%. ",
        "Engineered clickstream analysis to monitor user behavior resulting in a 15% increase in sales conversion rates."
      ]
    },
    {
      role: "Application Development Senior Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/Accenture-Logo.png"),
      date: "Nov 2018 – Jun 2022",
      desc: "",
      descBullets: [
        "Spearheaded the development of a web application for creating custom client proposals, cutting operational costs and time by 90%. ",
        "Integrated intelligent template recommendations based on historical usage, improving stakeholder efficiency by 30%.",
        "Collaborated with cross-functional teams to transform client requirements into visually engaging, interactive solutions. "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Business Analytics and Data Mining",
      subtitle:
        "",
      image: require("./assets/images/UTDLOGO.png"),
      imageAlt: "data mining graduate certificate",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "",
      image: require("./assets/images/AWSCCP.png"),
      imageAlt: "data mining graduate certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c7b0e042-92b0-4bdf-9c04-6a0fa6659caf/public_url"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamentals - AZ900",
      subtitle:
        "",
      image: require("./assets/images/azure-icon.png"),
      imageAlt: "MS-AZ900",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/1c7889ff-0613-4a7e-8f07-33e1988164db/linked_in_profile"
        }
      ]
    },
    {
      title: "SQL For Data Science",
      subtitle:
        "",
      image: require("./assets/images/uc_davis_logo.jpeg"),
      imageAlt: "UCDavis",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/EJG7GUMUTCU6"
        }
      ]
    },

    {
      title: "Applied Plotting,Charting and Data representation in Python",
      subtitle: "",
      image: require("./assets/images/umichigan.jpeg"),
      imageAlt: "UM Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/QKF7G5WNEGU3"},
      ]
    },
    {
      title: "Target Dopper Analysis using Compressive Sensing",
      subtitle: "",
      image: require("./assets/images/IEEE.jpeg"),
      imageAlt: "IEEE",
      footerLink: [
        {name: "Research Publication", url: "https://ieeexplore.ieee.org/document/8903947"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Academic Projects Section
const academicProjects = {
  title: "Academic Projects",
  subtitle: "Projects completed during my academic journey",
  projects: [
    ,
    {
      title: "JobAssist – AI-Powered Career Platform",
      subtitle: "AI in Action Hackathon",
      techStack: ["FastAPI", "MongoDB Atlas", "React", "GCP (Cloud Run, GCS)", "Gemini API"],
      details: [
        "Designed and developed a personalized job recommendation platform using LLMs and RAG techniques.",
        "Implemented resume upload, MongoDB-based profile management, and job matching via vector search.",
        "Integrated GCP services for scalable deployment and Gemini for intelligent chat capabilities."
      ],
      github: "https://github.com/MeghaCNair/JobAssist",
      inProgress: true
    },
    {
      title: "Sentiment Analysis using LLMs",
      subtitle: "Natural Language Processing",
      techStack: ["Python", "Hugging Face", "BERT", "Gemma", "Logistic Regression", "LSTM"],
      details: [
        "Built a multi-label emotion classification pipeline using LLMs and deep learning models.",
        "Achieved 61% F1-macro score on unseen test data across 11 emotion classes.",
        "Used Hugging Face Transformers (BERT, Llama, Gemma) for robust feature extraction."
      ],
      github: "https://github.com/MeghaCNair/SentimentAnalysisusingLLMs"
    },
    {
      title: "Predictive Modeling with ML",
      subtitle: "Applied Machine Learning",
      techStack: ["Python", "Scikit-learn", "XGBoost", "Logistic Regression", "SHAP"],
      details: [
        "Developed models for SBA loan default prediction with 85% accuracy.",
        "Utilized SHAP values for model interpretability and stakeholder understanding.",
        "Implemented hyperparameter tuning, feature selection, and evaluation pipelines."
      ],
      github: "https://github.com/MeghaCNair/MLPredictiveModels"
    },
    {
      title: "Big Data Analysis",
      subtitle: "Big Data",
      techStack: ["Hadoop","PySpark", "Hive", "Flume", "Sqoop"],
      details: [
        "Ingested and processed large volume datasets using Hadoop ecosystem tools.",
        "Extracted business insights using Hive and PySparkqueries on cleaned data."
      ],
      github: "https://github.com/MeghaCNair/WorkingWithBigData"
    },
    {
      title: "Image Classification and Text Generation",
      subtitle: "Deep Learning",
      techStack: ["Python", "PyTorch", "CNN", "RNN", "Transformers"],
      details: [
        "Built deep learning models for image classification and text generation",
        "Used CNNs for images and BPE,RNNS for text"
      ],
      github: "https://github.com/MeghaCNair/DeepLearning_Image_Text"
    },
    {
      title: "AWS-Based Supply Chain Optimization",
      subtitle: "Cloud Simulation Project",
      techStack: ["AWS Lambda", "S3", "API Gateway", "CloudWatch", "DynamoDB"],
      details: [
        "Proposed a tariff-response logistics system using AWS services.",
        "Used API Gateway and Lambda for real-time event-driven architecture.",
        "Secure storage and monitoring using S3, DynamoDB, and CloudWatch."
      ],
      github: "https://github.com/MeghaCNair/AWSForSupplyChain"
    }
  ],
  display: true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an opportunity or just want to say hi? My Inbox is open for all.",
  
  email_address: "meghacnair96@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  academicProjects,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
