import React from "react";
import { useState } from "react";

const Projects = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="h-screen projects flex items-center place-content-center">
      <div className="grid gap-4">
        <div className="text-part flex text-5xl font-bold gap-3">
          <p className="">My recent</p>
          <p className="text-nischal">works</p>
        </div>
        <div className="">
          <div className="container">
            <div className="bloc-tabs gap-3">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Web Applications
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                User Interface
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                UX
              </button>
            </div>

            <div className="content-tabs my-2 hidden md:block">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div className="flex flex-wrap justify-center items-center gap-20">
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby">
                 <img className="" src="./ui.png" alt="" />
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby">
                  <img src="./2ndUi.png" alt="" />
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby">
                  <img src="./3rdUi.png" alt="" />
                </div>

                </div>
                
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div className="flex flex-wrap justify-center items-center gap-20">
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <div className="flex flex-wrap justify-center items-center gap-20">
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                <div className="h-52 w-80 rounded-2xl flex justify-center items-center bg-baby opacity-50">
                  Hey
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
