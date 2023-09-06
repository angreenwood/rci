import React from "react";
import "./home.scss";

const home = () => {
  return (
    <section className="home-background">
      <div className="py-8 px-4 max-w-screen-xl  lg:px-6">
        <div className="mx-auto max-w-screen-sm text-left lg:mb-16 mb-8">
          <p className="font-light text-white sm:text-xl text-xl font-semibold">
            RCI STRUCTURAL ENGINEERING
          </p>
          <p className="font-light text-white sm:text-xl text-xl font-normal">
            is a full-service structural engineering company. Our expertise is
            structural design, special inspections and windstorm certification.
            We work with Developers, Architects, and Florida residents to
            provide complete and comprehensive structural engineering services.
            We provide structural engineering and drawings for Residential,
            Commercial & Industrual Projects.
          </p>
        </div>
        <div className="mx-auto max-w-screen-sm text-left lg:mb-16 mb-8">
          <p className="font-light text-white sm:text-xl text-xl font-semibold">
            SERVING SOUTHWEST FLORIDA & BEYOND
          </p>
        </div>
      </div>
    </section>
  );
};

export default home;
