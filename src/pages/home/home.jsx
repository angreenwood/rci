import React from "react";
import "./home.scss";

const home = () => {
  return (
    <section className="content-background dark:bg-gray-900 h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:px-6">
        <div className="mx-auto max-w-screen-sm text-left lg:mb-16 mb-8">
          <img src="./pictures/rci-blue.svg" alt="Main-Logo" className="logo" />
          <p className="font-light text-black sm:text-xl text-xl dark:text-gray-400 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mx-auto max-w-screen-sm text-left lg:mb-16 mb-8">
          <p className="font-light text-black sm:text-xl text-xl dark:text-gray-400 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default home;
