import React from 'react';
import './contributors.css';
import { FaLinkedin } from 'react-icons/fa';

const Contributors = () => {
  const contributors = [
    { 
      name: 'Griffin Annshual', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/griffin_annshual_PCPNBuc.jpg', 
      linkedin: 'https://www.linkedin.com/in/griffin-annshual-97b615232/' 
    },
    { 
      name: 'Muruga Perumal', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/muruga_perumal_r.png', 
      linkedin: 'https://www.linkedin.com/in/murugaperumalr/' 
    },
    { 
      name: 'Pk Cibiyanna', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/cibiyanna_p.jpg', 
      linkedin: 'https://www.linkedin.com/in/cibiyanna/' 
    },
    { 
      name: ' Aswath ', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/aswath_c_m.jpg', 
      linkedin: 'https://www.linkedin.com/in/aswathcm/' 
    },
    { 
      name: 'Shri Harini', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/shri_harini.jpg', 
      linkedin: 'https://www.linkedin.com/in/contributor5/' 
    },
    { 
      name: 'Sudha', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/sudha_j.jpg', 
      linkedin: 'https://www.linkedin.com/in/sudha-j14/' 
    },
    { 
      name: 'Pavithra', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/pavithra_b_AfiPmSL.jpg', 
      linkedin: 'https://www.linkedin.com/in/pavithra-b-8a032928a/' 
    },
    { 
      name: 'Prisha', 
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/prisha_santhosh_ZwpDgtE.jpg', 
      linkedin: 'https://www.linkedin.com/in/prisha-santhosh-554273278/' 
    },
  ];

  return (
    <div className="contributors-container">
      {contributors.map((contributor, index) => (
        <div className="organizer-box" key={index}>
          <img
            src={contributor.img}
            alt={contributor.name}
            className="organizer-img"
          />
          <div className="organizer-name">{contributor.name}</div>
          <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="linkedin-icon">
              <FaLinkedin />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contributors;