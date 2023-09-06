import React from "react";
import { MdOutlineConstruction } from "react-icons/md";
import "./construction.scss";

function Construction() {
  return (
    <section className="content-background flex h-screen">
      <div className="m-auto">
        <MdOutlineConstruction
          className="construction-icon mx-auto"
          color="#00285B"
        />
        <p className="font-light text-black sm:text-xl text-xl dark:text-gray-400 font-normal text-center">
          This page is currently under construction!
        </p>
      </div>
    </section>
  );
}

export default Construction;
