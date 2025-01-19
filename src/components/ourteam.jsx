import React from 'react';
import './ourteam.css'; // Ensure the CSS file is linked correctly
import { FaLinkedin } from 'react-icons/fa';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Griffin Annshual',
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/griffin_annshual_PCPNBuc.jpg',
      linkedin: 'https://www.linkedin.com/in/griffin-annshual-97b615232/',
      domain: 'GDG',
      role: 'Co-Organizer',
    },
    
  ];

  return (
    <div className="ourteam-page">
      <h1 className="ourteam-heading"></h1>
      <div className="ourteam-container">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img
                src={member.img}
                alt={member.name}
                className="card-img"
              />
              <div className="heading">{member.name}</div>
              <p>{member.domain}</p>
              <p>{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="linkedin-icon">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

