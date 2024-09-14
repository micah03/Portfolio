import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      

      <div className="about-block">
        <p className="about-text">
          Hi, I'm <strong>Mayukha Mohan Thatikonda</strong>, urrently pursuing a Bachelor's degree in Artificial Intelligence and Data Science
          <strong> Chaitanya Bharathi Institute of Technology</strong> in
          Hyderabad, Telangana, with a GPA of 9.07/10. 
        </p>
      </div>


      <div className="about-block">
        <h2 className="about-title">Technical Skills</h2>
        <p className="about-text">
          <strong>Languages:</strong> Java, Python, JavaScript, R, C/C++
          <br />
          <strong>Frameworks/Libraries:</strong> React.js, Express.js, Flask,
          Django, TensorFlow, PyTorch, jQuery, Bootstrap, Node.js, NumPy,
          Pandas, Matplotlib
          <br />
          <strong>Databases/Tools:</strong> MySQL, MongoDB, Git
          <br />
          <strong>Concepts:</strong> Operating Systems, Computer Networks, Data
          Structures and Algorithms, AI, Machine Learning, Deep Learning, Data
          Analysis and Visualization, Software Engineering
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
            Competitive Programming: <a href="https://www.hackerrank.com/profile/mayukhacsm">HackerRank 5-star</a>, <a href="https://leetcode.com/u/mayukhacsm">LeetCode Rating: 1817</a>
          </li>
          <li>Hackathons: J.P. Morgan Chase Code for Good Hackathon 2024, Flipr Web Development Hackathon, TechGig ML Hackathon, Google Girl Hackathon</li>
          <li><a href="https://www.cloudskillsboost.google/public_profiles/52312c2b-81d1-4854-a9a5-5c82ba5a4662">Google Cloud Computing Certification</a></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
