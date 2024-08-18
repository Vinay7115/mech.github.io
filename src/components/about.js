import React from "react";

function About() {
  return (
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="about-col-1">
            {/* eslint-disable-next-line */}
            <img src="mechpics.jpeg" />
          </div>
          <div class="about-col-2">
            <h1 class="sub-title">About Us</h1>
            <p>
              Meknika is the official society of the Department of Mechanical
              Engineering, driven by the collective passion and commitment of
              second-year, third-year, and fourth-year undergraduate students.
              Our team is dedicated to enhancing the academic and professional
              experiences of our peers through various department-related
              activities, skills training sessions, and networking
              opportunities.
            </p>
            <br />
            <p>
              At Meknika, we believe in fostering a collaborative environment
              where students can grow and excel. We organize a wide range of
              events, including farewell parties, guest talks by industry
              experts, internship chronicles, and much more. Our aim is to equip
              students with the knowledge and skills necessary to thrive in the
              ever-evolving field of mechanical engineering.
            </p>
            <br />
            <p>
              Beyond academic and career support, Meknika serves as a vibrant
              community where students can connect, share ideas, and build
              lasting relationships. We strive to create an inclusive platform
              that encourages innovation, leadership, and personal growth,
              ensuring that every member is prepared to tackle the challenges of
              the future with confidence.
            </p>
          </div>
          <div className="about-col-3">
            {/* eslint-disable-next-line */}
            <img src="logo.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
