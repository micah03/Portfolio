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
    role: "Intern",
    company: "ServiceNow",
    duration: "June 2024 – Aug 2024",
    description:
      "• Automated Network Diagnostics and Logging: Designed and implemented a Python-based automation tool using Paramiko to remotely access Cisco and Palo Alto network devices, execute diagnostic commands, and collect system outputs and logs. Collaborated with the network operations team to streamline troubleshooting and reduce manual diagnostic effort by 80%. • Cross-Functional UI Integration for Secure Log Access: Packaged diagnostic data into secure, downloadable ZIP archives and integrated access into a Django-based web interface. Partnered with the DevOps and UI/UX teams to enhance accessibility, improving incident response time by 60%. • Dynamic Subnet Allocation Engine: Developed a Python engine to parse Excel-based files and dynamically allocate subnet ranges based on project-specific constraints. Worked with infrastructure teams to ensure real-time updates post-deployment. • Terraform Automation and CI/CD Integration: Integrated subnet planner directly into the Terraform pipeline, enabling dynamic injection of subnet variables during runtime. Improved infrastructure-as-code scalability and eliminated manual configuration errors across staging and production environments.",
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
        link="https://github.com/micah03/MiniProject_1_CriminalDetection"
        image="Attendance.jpeg" // Replace with actual image URL
        title="Criminal Detection Using Face Recognition in Python"
        description="Developed a Python GUI application using Tkinter for real-time face detection in video streams. Implemented
        features to identify frame numbers and calculate the duration of identified faces with over 50% accuracy."
        technologies="Python, Tkinter, Face Recognition, CSV"
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
          <Route path="/Portfolio/project" element={<Proj />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/experience" element={<ExperienceEducationPage />} />
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
