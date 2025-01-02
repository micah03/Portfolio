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
      "• Selected for a 2-month Summer Internship at ServiceNow to work on real-world software projects. Enhanced automation test frameworks for the Digital End-User Experience product, developing and executing 15+ test cases in Agile environment. Conducted cross-platform testing on Windows and MacOS, ensuring compatibility and seamless user experience. Performed internationalization (i18n) testing to validate features for global users, collaborating with developers to troubleshoot and optimize test environments.",
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
        description="Processed and cleansed over 100,000 rows of raw data using NumPy and Pandas; generated visualizations with
        Plotly, Seaborn, and Matplotlib that identified key trends leading to actionable recommendations for team projects."
        technologies="Python, NumPy, Pandas, Plotly, Seaborn, Matplotlib"
      />
      <Projects
        link="https://github.com/micah03/MiniProject_1_CriminalDetection"
        image="Attendance.jpeg" // Replace with actual image URL
        title="Criminal Detection Using Face Recognition in Python"
        description="Developed a Python GUI application using Tkinter for real-time face detection in video streams. Implemented
        features to identify frame numbers and calculate the duration of identified faces with over 50% accuracy."
        technologies="Python, Tkinter, Face Recognition, CSV"
      />
      <Projects
        link="https://github.com/micah03/Diabetes_Prediction_streamlit"
        image="shopping.webp" // Replace with actual image URL
        title="Diabetes Prediction using Machine Learning"
        description="Built a machine learning model to predict diabetes in women based on health data using Scikit-Learn, Pandas, and
        NumPy. Achieved 92.5% accuracy using the RandomForestClassifier. Deployed the model through a user-friendly
        web app using Streamlit."
        technologies="Python, Numpy, Pandas, Sci-Kit Learn, Streamlit"
      />
      <Projects
        link="https://github.com/micah03/OutfitPredictionML"
        image="silent.png" // Replace with actual image URL
        title="Outfit Prediction Using Machine Learning"
        description="Developed a web application for predicting outfit ratings and pricing based on image inputs. Scraped training data
        from an e-commerce site using Selenium, trained a CNN model, and successfully deployed the application on AWS."
        technologies="Python, Selenium, CNN, NumPy, Pandas, TensorFlow"
      />
      <Projects
        link="https://github.com/micah03/restaurant-analysis-and-menu-planning"
        image="cricket.avif" // Replace with actual image URL
        title="Restaurant Analysis and Menu Planning"
        description="Analyzed restaurant data with R using caTools and FNN, building five KNN models that delivered insights on 15+
        attributes including cuisine types, resulting in actionable recommendations for optimizing menu oﬀerings. Conducted sentiment analysis to refine menu oﬀerings and built predictive models for performance forecasting, guiding resource allocation and marketing strategies. Presented insights via visualization using ggplot2 and plotly."
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
