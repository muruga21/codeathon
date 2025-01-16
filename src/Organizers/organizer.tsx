// import React from "react";
import "./style.css";

const Organizers = () => {
  return (
    <div className="page-container">
      <section id="organizers" className="organizers-section p-4 m-8 rounded-lg flex flex-col items-center">
        <h1 className="text-4xl font-bold">ORGANIZERS</h1>
        <div className="md:w-[60%] flex justify-around flex-wrap organizers-images">
          <img src="/gdg.png" alt="Organizer 1" className="organizer-img" />
          <img src="/organizer2.png" alt="Organizer 2" className="organizer-img" />
          <img src="/organizer3.png" alt="Organizer 3" className="organizer-img" />
        </div>
      </section>
    </div>
  );
};

export default Organizers;
