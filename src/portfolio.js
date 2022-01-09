/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the default cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Dan",
  logo_name: "DanCard()",
  nickname: "Dan",
  full_name: "Dan Card",
  subTitle: "Aerospace Engineer, Aspiring Software Engineer. Always curious.",
  resumeLink: "Resume.pdf",
  mail: "mailto:dcard@umich.edu",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/dancard32",
  linkedin: "https://www.linkedin.com/in/dan-card/",
  gmail: "dcard@umich.edu",
  twitter: "https://twitter.com/DanCard32",
  instagram: "https://www.instagram.com/DanCard32/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Michigan - Ann Arbor",
      subtitle:
        "Masters of Science in Engineering in Aerospace Engineering - Space Propulsion",
      logo_path: "UM_Logo.webp",
      alt_name: "UM",
      duration: "August 2020 - May 2021",
      descriptions: [
        "Graduate Coursework: Computational Fluid Dynamics I, Computational Methods for Aerospace Engineering, Partial Differential Equations, Rocket Propulsion, Electric Propulsion, Space Policy and Management",
        "Accolades: Graduate Student Instructor",
      ],
      website_link: "https://aero.engin.umich.edu/",
    },
    {
      title: "University of Michigan - Ann Arbor",
      subtitle: "Bachelors of Science in Engineering in Aerospace Engineering",
      logo_path: "UM_Logo.webp",
      alt_name: "UM",
      duration: "September 2018 - August 2020",
      descriptions: [
        "Undergraduate Coursework: Gas Dynamics, Aerospace Propulsion, Aerospace Structures, Aerodynamics, Vibration and Dynamics, Spacecraft Dynamics, Electrical Circuits Analysis, Space Mission Design, Aerospace Controls",
        "Accolades: Summa Cum Laude, Dean’s List, University Honors, 1st Generation Engineer, 1st Generation STEM",
      ],
      website_link: "https://aero.engin.umich.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Applied Machine Learning in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_machineLearning.webp",
      certificate_link: "Applied Machine Learning in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Python Data Structures",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_dataStructures.webp",
      certificate_link: "Python Data Structures.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },
    {
      title: "Introduction to Data Science in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_dataScience.webp",
      certificate_link: "Introduction to Data Science in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },

    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_gettingStarted.webp",
      certificate_link:
        "Programming for Everybody (Getting Started with Python).pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },
    {
      title: "Using Databases with Python",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_databases.webp",
      certificate_link: "Using Databases with Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },
    {
      title: "Using Python to Access Web Data",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_webData.webp",
      certificate_link: "Using Python to Access Web Data.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },

    {
      title: "Applied Text Mining in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_textMining.webp",
      certificate_link: "Applied Text Mining in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Applied Social Network Analysis in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_networkAnalysis.webp",
      certificate_link: "Applied Social Network Analysis in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Applied Plotting, Charting & Data Representation in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_dataRep.webp",
      certificate_link:
        "Applied Plotting, Charting & Data Representation in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },

    {
      title: "Web Application Technologies and Django",
      subtitle: "Django for Everybody | University of Michigan, Coursera",
      logo_path: "django_webTech.webp",
      certificate_link: "Web Application Technologies and Django.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#ffbfae",
    },
  ],
  skills: [
    {
      title: "Python for Everybody",
      subtitle: "University of Michigan | Coursera",
      logo_path: "p4e.webp",
      certificate_link: "Applied Machine Learning in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },
    {
      title: "Python Applied Data Science",
      subtitle: "University of Michigan | Coursera",
      logo_path: "python_ds.webp",
      certificate_link: "Applied Machine Learning in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#E2405F",
    },
    {
      title: "Django for Everybody",
      subtitle: "University of Michigan | Coursera",
      logo_path: "dj4e.webp",
      certificate_link: "Applied Machine Learning in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },
  ],
  // color_code: "#8C151599",
  // color_code: "#7A7A7A",
  // color_code: "#0C9D5899",
  // color_code: "#C5E2EE",
  // color_code: "#ffc475",
  // color_code: "#g",
  // color_code: "#ffbfae",
  // color_code: "#fffbf3",
  // color_code: "#b190b0",
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships and Volunteering",
  description:
    "I have been working full-time post-graduation, and all my past work experiences can be found here!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Tooling Engineer",
          company: "Northrop Grumman",
          company_url: "https://www.northropgrumman.com/",
          logo_path: "NG_Logo.webp",
          duration: "June 2021 - Current",
          location: "Office 90%, Remote 10%",
          description:
            "Lead Engineer for maintaining the Navy's multi-billion dollar contract to manufacture the Trident II D5 Ballistic Missile, entailing being on-call 24/7 and to support on-site operations throughout the weekend/and or nights. Determine root causes on tool defects and its impacts on product and discuss top-level engineering with customers (Army, Lockheed Martin, Navy) our proposed fixes to provide transparency and dependable products. Provide excruciating attention to detail to mitigate manufacturing defects on  end-product valued on the order of tens of millions of dollars for national defense Reduce the risks of manufacturing stoppage, identify manufacturing bottlenecks, safety concerns, and support floor operations and personal",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Propulsion Design Engineer",
          company: "ExoTerra Resources, LLC",
          company_url: "https://exoterracorp.com/",
          logo_path: "ExoTerra_Logo.webp",
          duration: "May 2020 - August 2020",
          location: "Office 25%, Remote 75%",
          description:
            " I helped lead the design of an in-house Cryogenic-Load Cart with a 75% cost reduction versus market solutions. Re-designed propellant flow panel in Solidworks to reduce de-gassing by 65% extending Xenon bottle lifetime. While using Solidworks, I designed an ion beam dump to prolong chamber lifetime at 10% under the initial budget. Lastly, I refined electromagnet coil winding design in Solidworks resulting in improving mass estimates by a factor of 4x",
          color: "#0071C5",
        },
        {
          title: "Mechanical  and Electrical Engineer",
          company:
            "University of Michigan, Plasmadynamics and Electric Propulsion Laboratory (PEPL)",
          company_url: "https://pepl.engin.umich.edu/",
          logo_path: "PEPL_Logo.webp",
          duration: "May 2019 - August 2019",
          location: "Office",
          description:
            "Developed an Arduino program interfaced with a custom circuit to improve measurements of motion stages and allow interface with LabVIEW, or display positions in real-time at 25% of alternatives. Additionally, I improved motion stage performance in vacuum by implementing heat elements at 10% cost of alternatives. Furthermore I designed housing to allow interfacing of an incremental encoder with an azimuthal stage to increase reliability in vacuum.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteering/Open-Source",
      experiences: [
        {
          title: "Aerospace Day",
          company: "University of Michigan",
          company_url:
            "https://aiaaoutreach.aero.engin.umich.edu/aerospace-day",
          logo_path: "UM_Logo.webp",
          duration: "March 2019",
          location: "Ann Arbor, Michigan",
          description:
            "Aerospace Day is an outreach that occurs every semester at the University of Michigan, where we showcase what the engineering students are working on and engage with the community.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  codingSection: {
    title: "Coding Projects",
    description:
      "Here are some projects that showcase my skills as a developing software engineer. As I learn more about programming I hope that I can contribute more towards open-source software and aid in the advancement of accessible software",
  },
  engineeringSection: {
    title: "Engineering Projects",
    description:
      "Below are my projects that are based in engineering, that I have taken in my free time or are from my schooling. Note that some of these projects wil have information omitted to avoid infringing ITAR",
  },
};

const projects = {
  coding: [
    {
      id: "4",
      name: "google-maps-tourist",
      url: "https://github.com/dancard32/google-maps-tourist",
      description:
        "This uses Google Maps API and from an beginning/end point will automatically generate a route to see tourist attractions en-route to the end location.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Github",
          iconifyClass: "logos-github-icon",
        },
      ],
    },
    {
      id: "3",
      name: "google-translate-conversation",
      url: "https://github.com/dancard32/google-translate-conversation",
      description:
        "This simple project Google Translate API to automatically converts speech to text, then text to the other person's native language.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Github",
          iconifyClass: "logos-github-icon",
        },
      ],
    },
    {
      id: "2",
      name: "website",
      url: "https://github.com/dancard32/website",
      description:
        "This is simply the github repository of the current website that you are viewing.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Github",
          iconifyClass: "logos-github-icon",
        },
      ],
    },
    {
      id: "1",
      name: "conway-game-of-life",
      url: "https://github.com/dancard32/conway-game-of-life",
      description:
        "This game is a cellular automaton devised by the mathematician John Conway to highlight that the evolution is determined by an initial state.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Github",
          iconifyClass: "logos-github-icon",
        },
      ],
    },
    {
      id: "0",
      name: "random-image-generation",
      url: "",
      description:
        "Back end Python implementation to generate specified number of images with pre-determined probabilities for NFT implementation.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Github",
          iconifyClass: "logos-github-icon",
        },
      ],
    },
  ],
  engr: [
    {
      id: "7",
      name: "2Kw Krypton Hall Effect Thruster",
      url: "2kW HET.pdf",
      description:
        "Using Fusion 360, designed a Hall Effect Thruster from start to finish adopting first-principles and industry standards. Wrote a custom Python3 CFD script to analyze gas flow from from the anode/gas distributor through the inner channel. Iterated design to allow for re-use of stock material to reduce the cost of manufacturing on ceramics and metal walls",
      img: "HET.webp",
      software: "Python",
    },
    {
      id: "6",
      name: "Supersonic Engine Analysis",
      url: "Supersonic Engine Analysis.pdf",
      description:
        "In my graduate computational fluid dynamics course, I used finite-element analysis and mesh adaptation to approximate the flow fields throughout a ramjet. We varied the attack angle to determine the most effective angle and correlated to the trained Mach diamonds throughout the inlets interior. This project was written entirely in the Python3 environment with minimal additional library imports",
      img: "ramjet_diag.webp",
      software: "Python",
    },
    {
      id: "5",
      name: "Analysis of Regeneratively Cooled Nozzle Channels",
      url: "Regeneratively Cooled Nozzle Channels.pdf",
      description:
        "In my graduate computational methods for aerospace engineering, I successfully simulated the heat flow through a Regeneratively cooled nozzle channel. In this project I provide an in-depth analysis of the effects of notching the nozzle boundaries and how it effects how much heat flux can be transferred in the steady state.",
      img: "ssme25.webp",
      software: "Python, Matlab",
    },
    {
      id: "4",
      name: "Lunar Lander Truss Simulation",
      url: "Lunar Lander Truss.pdf",
      description:
        "This project for my graduate computational methods for aerospace engineering simulated the deformations of a truss during a lunar touchdown. In this project I implemented several solvers and performed convergence study's and confirmed convergence rates across each integration scheme.",
      img: "truss_deform.gif",
      software: "Matlab",
    },
    {
      id: "3",
      name: "Voyager 2 Deep Space Mission Simulation",
      url: "Voyager 2.pdf",
      description:
        "The goal of this project is to simulate Voyager 2's mission through the solar system stepping through all the numerous flyby's of the four gas giants. This project analyzes the trajectories from Voyager 2, the velocities and an in-depth analysis into the possibilities that arise from simplifications and or numerical inaccuracies.",
      img: "voyager2.webp",
      software: "Matlab",
    },
    {
      id: "2",
      name:
        "An Analysis of Facility Effects on Electric Propulsion Performance",
      url: "Facility Effects.pdf",
      description:
        "This paper was written to provide an overview into the past research conducted on facility effects, and the various ways that facilities effect the performance of electric propulsion. Here is a link to the report that provides key insight into how the performance is impacted.",
      img: "facility_effects.webp",
      software: "Matlab",
    },
    {
      id: "1",
      name: "2019 PEPL Research",
      url: "SURE 2019 Proposal.pdf",
      description:
        "Over summer 2019, I had the opportunity to conduct research at the Plasmadynamics and Electric Propulsion Laboratory. Through my time there I repaired our motion stages to improve their performance when in vacuum. My main focus of improving the performance was to interface the motion stages with incremental encoders that would allow for the easy measurement of a motion stages position.",
      img: "lilac.webp",
      software: "Fusion 360, Matlab, ExpressPCB",
    },
    {
      id: "0",
      name: "Hovercraft Design Project",
      url: "Hovercraft Presentation.pdf",
      description:
        "In my undergraduate systems engineering class we were tasked with creating a timeline of designing a hovercraft, creating preliminary designs and then testing and iterating the designs. This project allowed us to determine and mitigate most of the risks that were required for this project. Highlighted below is our final presentation with a system overview of all the hardwork that we all contributed.",
      img: "hovercraft.webp",
      software: "Arduino, CATIA, Fusion 360, Matlab",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dancard.webp",
    description:
      "You can contact me at the places mentioned below. For fastest response, reach out to me via email.",
  },
  blogSection: {
    title: "Follow my Work",
    subtitle:
      "Progress on my coding projects are best found on GitHub, where I try to progress daily and post my projects for all to enjoy!",
    link: "https://github.com/dancard32",
    avatar_image_path: "blogs_image.svg",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};