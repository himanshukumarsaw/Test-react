import React from "react";
import Student from "../../Api/Student.json";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <main className="hero-container">
      <div className="hero-image">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6262ee8c547b50e80b312206/CrewPhoto1/0x0.jpg?width=960"
          className="banner-image"
        />
      </div>
      <div className="hero-details">
        <h2>Student Name:{Student.StudentName}</h2>
        <h3>Roll Number:{Student.RollNumber}</h3>
        <h3>Admission Number:{Student.AdmissionNumber}</h3> 
        <h3>Branch:{Student.Branch}</h3>
        <h3> Semester:{Student.Semester}</h3> 
        <h3>College Name:{Student.CollegeName}</h3>
      </div>
      <Link to="/questionpage">
        <button>Start</button>
      </Link>
    </main>
  );
};

export default home;
