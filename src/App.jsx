import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./assets/Components/Nav";
import Projects from "./assets/Components/Projects";
import "./App.css";
import Experience_Education from "./assets/Components/Experience_Education";
import About from "./assets/Components/About";
const educationDetails = [
  {
    degree: "Bachelor of Engineering (GPA: 9.07 / 10)",
    institution: "Chaitanya Bharathi Institute of Technology",
    duration: "Nov 2021 - May 2025",
    coursework:
      "Data Structures and Algorithms (Java), Probability & Statistics in CS (Python), Machine Learning, Data Analysis, SQL, HTML, CSS, JavaScript, MERN Stack, Numpy, Pandas",
  },
];

const experienceDetails = [
  {
    role: "Associate Software QA Engineer Intern",
    company: "ServiceNow",
    duration: "June 2024 – Aug 2024",
    description:
      "Maintained existing automation test frameworks, Collected and reported quality metrics from test execution, Worked with developers in an Agile environment to design specific testing strategies for features being developed and automated them, Supported engineering organizations in troubleshooting and addressing issues with applications and developer/test environments",
  },
];

const ExperienceEducationPage = () => {
  return (
    <div>
      <Experience_Education title="Education" details={educationDetails} />
      <Experience_Education title="Experience" details={experienceDetails} />
    </div>
  );
};

// Projects Component for the Projects page
const Proj = () => {
  return (
    <>
      <Projects
        link="https://github.com/micah03/InternshipProjectSem_3"
        image="/Train.jpeg" // Replace with actual image URL
        title="Exploratory Data Analysis on an E-Commerce site"
        description="Employed web scraping to extract real-time data from an e-commerce site. Processed data using Numpy and Pandas to visualise data."
        technologies="Python, NumPy, Pandas, Plotly, Seaborn, Matplotlib"
      />
      <Projects
        link="https://github.com/micah03/MiniProject_1_CriminalDetection"
        image="Attendance.jpeg" // Replace with actual image URL
        title="Criminal Detection Using Face Recognition in Python"
        description="Designed a Python GUI app using Tkinter for face detection in videos. Implemented features to determine frame numbers with over 50% accuracy and calculate the identified person's duration in the video."
        technologies="Python, Tkinter, Face Recognition, CSV"
      />
      <Projects
        link="https://github.com/micah03/Diabetes_Prediction_streamlit"
        image="shopping.webp" // Replace with actual image URL
        title="Diabetes Prediction using Machine Learning"
        description="Created a web app to predict diabetes in women using machine learning.Used health attributes and scikit-learn, pandas, NumPy libraries. Achieved 92.5% accuracy with the RandomForestClassifier model. Deployed the app via Streamlit."
        technologies="Python, Numpy, Pandas, Sci-Kit Learn, Streamlit"
      />
      <Projects
        link="https://github.com/micah03/OutfitPredictionML"
        image="silent.png" // Replace with actual image URL
        title="Outfit Prediction Using Machine Learning"
        description="Built a web application to determine outfit ratings and pricing through image inputs. Acquired training data from an E-commerce site using Selenium. Utilized a CNN model. Successfully deployed the application on AWS."
        technologies="Python, Selenium, CNN, NumPy, Pandas, TensorFlow"
      />
      <Projects
        link="https://github.com/micah03/restaurant-analysis-and-menu-planning"
        image="cricket.avif" // Replace with actual image URL
        title="Restaurant Analysis and Menu Planning"
        description="Analyzed restaurants data to optimize menu planning and operations. Utilized R for statistical analysis and data visualization, including predictive modeling and interactive plots."
        technologies="R, Data Analysis"
      />
    </>
  );
};

// Experience Component for the Experience page
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/project" element={<Proj />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<ExperienceEducationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
