/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the default cursor
  googleTrackingID: "UA-154808830-1",
};

//Home Page
const greeting = {
  title: "Hello",
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
      title: "Versatile Programming",
      fileName: "ProgrammingImg",
      skills: [
        "👨🏽‍💻 Develop back-end algorithms for a vast array of applications",
        "🚀 Focused Masters study in Aerospace Engineering computational methods",
        "⚙️ Developing full-stack web application integrated with Google-Maps API",
        "🗣 Working on a Google-Translate API",
        "🔜 My first Amazon Alexa application in the planning",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
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
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
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
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
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
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Technical Background",
      fileName: "FirmwareImg",
      skills: [
        "🚀 Lead tooling maintenance on a multi-billion dollar contract",
        "🛰 Worked on high-power thruster running upwards of 10kW",
        "💻 Developed custom parts to interface with laboratory equipment",
        "🖨 Avid 3D printer/tinkerer as small side projects",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#00979D",
          },
        },
        {
          skillName: "LabVIEW",
          fontAwesomeClassname: "simple-icons:labview",
          style: {
            color: "#FFDB00",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Always looking to learn!",
      fileName: "DevImg",
      skills: [
        "👨🏽‍💻 Always looking to improve! Above are languages I plan to learn",
        "👍 Targeting summer/fall meme-generator smart contract launch",
        "🎤 Amazon Alexa Echo app to start this year, targeting May",
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
          skillName: "Alexa",
          fontAwesomeClassname: "simple-icons:amazonalexa",
          style: {
            color: "#00CAFF",
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
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#808080",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#313875",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#40a7e3",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#4d4d4d",
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
      degree_type: "Masters of Science in Engineering",
      subtitle: "Aerospace Engineering - Computational Methods",
      logo_path: "UM_Logo.webp",
      alt_name: "UM",
      duration: "August 2020 - May 2021",
      descriptions: [
        "Graduate Coursework: Computational Fluid Dynamics I, Computational Methods for Aerospace Engineering, Partial Differential Equations, Rocket Propulsion, Electric Propulsion, Space Policy and Management",
        "Accolades: Graduate Student Instructor",
      ],
      website_link: "https://aero.engin.umich.edu/",
      GPA: "GPA: 3.91",
      degree_path: "Diploma_MSE.pdf",
    },
    {
      title: "University of Michigan - Ann Arbor",
      degree_type: "Bachelors of Science in Engineering",
      subtitle: "Aerospace Engineering",
      logo_path: "UM_Logo.webp",
      alt_name: "UM",
      duration: "September 2018 - August 2020",
      descriptions: [
        "Undergraduate Coursework: Gas Dynamics, Aerospace Propulsion, Aerospace Structures, Aerodynamics, Vibration and Dynamics, Spacecraft Dynamics, Electrical Circuits Analysis, Space Mission Design, Aerospace Controls",
        "Accolades: Summa Cum Laude, Dean’s List, University Honors, 1st Generation Engineer, 1st Generation STEM",
      ],
      website_link: "https://aero.engin.umich.edu/",
      GPA: "GPA: 3.91",
      degree_path: "Diploma_BSE.pdf",
    },
  ],
  inprogress: [
    {
      title: "Georgia Institute of Technology",
      degree_type: "Masters of Science",
      subtitle: "Computer Science - Computing Systems",
      logo_path: "GT_logo.webp",
      alt_name: "GT",
      duration: "August 2022 - May 2024",
      descriptions: ["Graduate Coursework: Machine learning for trading"],
      website_link: "https://omscs.gatech.edu/",
      GPA: "GPA: N/A",
      degree_path: "work-in-progress-logo.png",
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
    {
      title: "Building Web Applications in Django",
      subtitle: "Django for Everybody | University of Michigan, Coursera",
      logo_path: "django_webApps.webp",
      certificate_link: "Building Web Applications in Django.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#ffbfae",
    },
  ],
  skills: [
    {
      title: "Python",
      subtitle: "Programming Language",
      logo_path: "Python-logo.webp",
      certificate_link: "https://www.python.org/",
      color_code: "#a83865",
    },
    {
      title: "HTML",
      subtitle: "Programming Language",
      logo_path: "HTML5-logo.webp",
      certificate_link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      color_code: "#a83865",
    },
    {
      title: "CSS",
      subtitle: "Programming Language",
      logo_path: "CSS3-logo.webp",
      certificate_link: "https://www.css3.info/",
      color_code: "#a83865",
    },
    {
      title: "LaTeX",
      subtitle: "Programming Language",
      logo_path: "LaTeX-logo.webp",
      certificate_link: "https://www.latex-project.org/",
      color_code: "#a83865",
    },
    {
      title: "React",
      subtitle: "Programming Language",
      logo_path: "React-logo.webp",
      certificate_link: "https://reactjs.org/",
      color_code: "#a83865",
    },
    {
      title: "C++",
      subtitle: "Programming Language",
      logo_path: "C++-logo.webp",
      certificate_link: "https://www.cplusplus.com/",
      color_code: "#a83865",
    },
    {
      title: "Arduino",
      subtitle: "Programming Language",
      logo_path: "Arduino-logo.webp",
      certificate_link: "https://www.arduino.cc/",
      color_code: "#a83865",
    },
    /*
        Supporting Software
    */
    {
      title: "Github",
      subtitle: "Supporting Software",
      logo_path: "Github-logo.webp",
      certificate_link: "https://github.com/",
      color_code: "#faae16",
    },
    {
      title: "Linux",
      subtitle: "Supporting Software",
      logo_path: "Linux-logo.webp",
      certificate_link: "https://www.linux.org/",
      color_code: "#faae16",
    },
    {
      title: "SQL Lite",
      subtitle: "Supporting Software",
      logo_path: "Sqlite-logo.webp",
      certificate_link: "https://www.sqlite.org/index.html",
      color_code: "#faae16",
    },
    {
      title: "Ubuntu",
      subtitle: "Supporting Software",
      logo_path: "Ubuntu-logo.webp",
      certificate_link: "https://ubuntu.com/",
      color_code: "#faae16",
    },
    {
      title: "Git",
      subtitle: "Supporting Software",
      logo_path: "Git-logo.webp",
      certificate_link: "https://git-scm.com/",
      color_code: "#faae16",
    },
    /*
        Engineering Skills
    */
    {
      title: "Oscilloscope",
      subtitle: "Engineering Skills",
      logo_path: "Oscope-logo.webp",
      certificate_link: "https://en.wikipedia.org/wiki/Oscilloscope",
      color_code: "#5c5a5a",
    },
    {
      title: "Multimeter",
      subtitle: "Engineering Skills",
      logo_path: "Multimeter-logo.webp",
      certificate_link: "https://en.wikipedia.org/wiki/Multimeter",
      color_code: "#5c5a5a",
    },
    {
      title: "Fusion 360",
      subtitle: "Engineering Skills",
      logo_path: "Fusion-logo.webp",
      certificate_link: "https://www.autodesk.com/products/fusion-360/overview",
      color_code: "#5c5a5a",
    },
    {
      title: "Cura",
      subtitle: "Engineering Skills",
      logo_path: "Cura-logo.webp",
      certificate_link: "https://ultimaker.com/software/ultimaker-cura",
      color_code: "#5c5a5a",
    },
    {
      title: "NX",
      subtitle: "Engineering Skills",
      logo_path: "NX-logo.webp",
      certificate_link:
        "https://www.plm.automation.siemens.com/global/en/products/nx/",
      color_code: "#5c5a5a",
    },
    {
      title: "ExpressPCB",
      subtitle: "Engineering Skills",
      logo_path: "ExpressPCB-logo.webp",
      certificate_link: "https://www.expresspcb.com/",
      color_code: "#5c5a5a",
    },
    {
      title: "SolidWorks",
      subtitle: "Engineering Skills",
      logo_path: "SWX-logo.webp",
      certificate_link: "https://www.solidworks.com/",
      color_code: "#5c5a5a",
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
        {
          title: "Undergraduate Research Assistant",
          company: "Composite Structures Laboratory",
          company_url: "http://websites.umich.edu/~waascsl/index.html",
          logo_path: "mcsl.webp",
          duration: "January 2019 - June 2019",
          location: "Office",
          description:
            "Designed a high-strength fixture in Fusion 360 to withstand 100kip forces while maximizing turnaround times between experiments to allow characterization of laminate angles in composite sandwiched fearing. Employed digital image correlation techniques to characterize composite performance during stress testing campaigns. Quantified macro-cracks within ply’s in specimens to their peak loads correlating the effects of macro-cracks of the yield strength of carbon-fiber composites",
          color: "#c16bf2",
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
      id: "5",
      name: "spotify-player",
      url: "https://github.com/dancard32/spotify-player",
      description:
        "This project uses a Raspberry Pi integrated with Spotify's web API and RFID module to make a modern record player.",
      languages: [
        {
          name: "Raspberry Pi",
          iconifyClass: "logos-raspberry-pi",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Github",
          iconifyClass: "logos-github-icon",
        },
        {
          name: "Linux",
          iconifyClass: "logos-linux-tux",
        },
        {
          name: "Spotify Web API",
          iconifyClass: "logos-spotify-icon",
        },
      ],
    },
    {
      id: "4",
      name: "google-maps-tourist",
      url: "https://github.com/dancard32/google-maps-tourist",
      description:
        "This uses Google Maps API and from an beginning/end point to automatically generate a tourist attraction route.",
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
        "This game is a cellular automaton devised by mathematician John Conway to highlight that evolution is determined by an initial state.",
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
        "Using Fusion 360, designed a Hall Effect Thruster from start to finish adopting first-principles and industry standards.",
      img: "HET.webp",
      software: [
        {
          name: "Fusion 360",
          img_path: "Fusion-logo-square.webp",
        },
        {
          name: "Python",
          img_path: "Python-logo.webp",
        },
      ],
    },
    {
      id: "6",
      name: "Supersonic Engine Analysis",
      url: "Supersonic Engine Analysis.pdf",
      description:
        "In my graduate CFD course, used finite-element analysis and mesh adaptation to approximate the flow fields through a ramjet.",
      img: "ramjet_diag.webp",
      software: [
        {
          name: "Python",
          img_path: "Python-logo.webp",
        },
      ],
    },
    {
      id: "5",
      name: "Analysis of Cooled Nozzle",
      url: "Regeneratively Cooled Nozzle Channels.pdf",
      description:
        "In graduate computational methods for aerospace engineering, simulated the heat flow through a Regeneratively cooled channel.",
      img: "ssme25.webp",
      software: [
        {
          name: "Python",
          img_path: "Python-logo.webp",
        },
        {
          name: "Matlab",
          img_path: "Matlab-logo.webp",
        },
      ],
    },
    {
      id: "4",
      name: "Lunar Lander Truss Simulation",
      url: "Lunar Lander Truss.pdf",
      description:
        "In my graduate computational methods for aerospace engineering I simulated the deformations of a truss during a lunar touchdown.",
      img: "truss_deform.gif",
      software: [
        {
          name: "Matlab",
          img_path: "Matlab-logo.webp",
        },
      ],
    },
    {
      id: "3",
      name: "Voyager 2 Mission Simulation",
      url: "Voyager 2.pdf",
      description:
        "This project simulated Voyager 2's mission through the solar system stepping through all the numerous flyby's of the four gas giants.",
      img: "voyager2.webp",
      software: [
        {
          name: "Matlab",
          img_path: "Matlab-logo.webp",
        },
      ],
    },
    {
      id: "2",
      name: "Analysis of Facility Effects",
      url: "Facility Effects.pdf",
      description:
        "Researched the various ways that on-ground facilities effect the performance of electric propulsion.",
      img: "facility_effects.webp",
      software: [
        {
          name: "Matlab",
          img_path: "Matlab-logo.webp",
        },
      ],
    },
    {
      id: "1",
      name: "2019 PEPL Research",
      url: "SURE 2019 Proposal.pdf",
      description:
        "Summer 2019, I conducted research at PEPL. While there I repaired motion stages and improved their accuracy and life-time.",
      img: "lilac.webp",
      software: [
        {
          name: "Fusion 360",
          img_path: "Fusion-logo-square.webp",
        },
        {
          name: "Matlab",
          img_path: "Matlab-logo.webp",
        },
        {
          name: "ExpressPCB",
          img_path: "ExpressPCB-logo.webp",
        },
      ],
    },
    {
      id: "0",
      name: "Hovercraft Design Project",
      url: "Hovercraft Presentation.pdf",
      description:
        "In my undergraduate systems engineering class we created preliminary hovercraft design and then iterated these designs.",
      img: "hovercraft.webp",
      software: [
        {
          name: "Arduino",
          img_path: "Arduino-logo-square.webp",
        },
        {
          name: "Matlab",
          img_path: "Matlab-logo.webp",
        },
        {
          name: "Fusion 360",
          img_path: "Fusion-logo-square.webp",
        },
        {
          name: "CATIA",
          img_path: "CATIA-logo.webp",
        },
      ],
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
