import React from "react";
import profile from "./ProfilePicture.png";

const About = () => {
    return (
      <div >
        <div class="wrapper">
        <div class="static-txt">I'm a</div>
        <ul class="dynamic-txts">
          <li><span>Father</span></li>
          <li><span>Designer</span></li>
          <li><span>Developer</span></li>
          <li><span>Freelancer</span></li>
        </ul>
        <img className="profile-picture" src={profile} alt=""/>
      </div>
        <div className="paragraph">I have always had a passion for working with technology, whether it was troubleshooting our family computer or building my own PC, but, when the pandemic hit just after the birth of my son, I had the motivation from becoming a father and the opportunity from the lockdown to take my skills to the next level. I spent that time learning to code, work with hardware and software, work in the tech support industry, and becoming certified to build and develop software. My dream is to create and maintain software that can help others in their day-to-day lives. I am skilled in Javascript, HTML, CSS, React, and am comfortable with countless troubleshooting and remote softwares. I am excellent with computer hardware, and I go above and beyond when it comes to customer service and communication over the phone, email, messaging, or in person. I know and love this industry well, and I am eager to go above and beyond for any company that I work for.</div>

      </div>
    )
}

export default About;