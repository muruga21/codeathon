import React from 'react';
import './contributor.css'; // Make sure the CSS file is correctly linked
import { FaLinkedin } from 'react-icons/fa';

const Contributors = () => {
  const contributors = [
    { 
      name: 'Shri Harini', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/shri_harini.jpg', 
      linkedin: 'https://www.linkedin.com/in/contributor5/',
      domain: 'GDG-Content & Design',
      role: 'Co-Organizer'
    },
    { 
      name: 'Sudha', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sudha_j.jpg', 
      linkedin: 'https://www.linkedin.com/in/sudha-j14/',
      domain: 'GDG-Web Development',
      role: 'Co-Organizer'
    },
    { 
      name: 'Pavithra', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/pavithra_b_AfiPmSL.jpg', 
      linkedin: 'https://www.linkedin.com/in/pavithra-b-8a032928a/',
      domain: 'GDG-AIML',
      role: 'Co-Organizer'
    },
    { 
      name: 'Prisha', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/prisha_santhosh_ZwpDgtE.jpg', 
      linkedin: 'https://www.linkedin.com/in/prisha-santhosh-554273278/',
      domain: 'GDG-Cloud Computing',
      role: 'Co-Organizer'
    },
  ];

  return (
    <div className="contributors-container">
      {contributors.map((contributor, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <img
              src={contributor.img}
              alt={contributor.name}
              className="card-img"
            />
            <div className="heading">{contributor.name}</div>
            <p>{contributor.domain}</p>
            <p>{contributor.role}</p>
            <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="linkedin-icon">
                <FaLinkedin />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contributors;

