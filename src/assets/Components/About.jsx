import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      

      <div className="about-block">
        <p className="about-text">
          Hi, I'm <strong>Mayukha Mohan Thatikonda</strong>, currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science
          <strong> Chaitanya Bharathi Institute of Technology</strong> in
          Hyderabad, Telangana, with a GPA of 9.07/10. 
        </p>
      </div>


      <div className="about-block">
        <h2 className="about-title">Technical Skills</h2>
        <p className="about-text">
          <strong>Languages:</strong> Java, Python, JavaScript, R, C/C++, HTML, CSS
          <br />
          <strong>Frameworks/Libraries:</strong> React.js, Express.js, Flask,
          Django, TensorFlow, PyTorch, jQuery, Bootstrap, Node.js, NumPy,
          Pandas, Matplotlib, Selenium, JUnit, REST API, Git
          <br />
          <strong>Databases/Tools:</strong> MySQL, MongoDB, Git, SQL
          <br />
          <strong>Concepts:</strong> Operating Systems, Computer Networks, Data
          Structures and Algorithms, AI, Machine Learning, Deep Learning, Data
          Analysis and Visualization, Software Engineering, OOPs
        </p>
      </div>

      <div className="about-block">
        <h2 className="about-title">Certifications & Achievements</h2>
        <ul className="about-list">
          <li><a href="https://www.coursera.org/account/accomplishments/certificate/TFHSP3X9J5BG">Python Certifications:Python for Everyone (University of Michigan, Coursera)</a></li>
          <li>
            <a href = "https://www.coursera.org/account/accomplishments/certificate/7B843HP7UY3U">AI For Everyone: AI for Everyone (Deep Learning.AI, Coursera)</a>
          </li>
          <li><a href = "https://www.udemy.com/certificate/UC-d444565a-487d-44cc-9548-5fce337b9c30/">Full Stack Development (Udemy)</a></li>
          <li>
            Competitive Programming: <a href="https://www.hackerrank.com/profile/mayukhacsm">HackerRank 5-star</a>, <a href="https://leetcode.com/u/mayukhacsm">LeetCode Rating: 1855</a>
          </li>
          <li>Selected as one of the top 400 out of 50,000+ applicants for the Code for Good 2024 Hackathon by J. P. Morgan Chase & Co., Hyderabad. Participated in Google Girl Hackathon, Flipr Web Development Hackathon, and TechGig ML Hackathon.</li>
          <li><a href="https://www.cloudskillsboost.google/public_profiles/52312c2b-81d1-4854-a9a5-5c82ba5a4662">Google Cloud Computing Certification</a></li>
          <li>Secured 6830 rank in EAMCET 2021.</li>
          <li>Achieved a perfect score in Mathematics (100 out of 100) and was awarded a Merit Certificate by CBSE for ranking in the top 0.01% of scorers in the All India Secondary School Examination (Class X, 2019).</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
