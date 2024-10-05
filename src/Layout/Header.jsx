import React, { useState, useEffect, useRef } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiLock, CiSaveUp2 } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

function Header({ setLayoutStyle, proShow, onRun }) {
  const [showlayout, setShowlayout] = useState(false);
  const layoutRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (layoutRef.current && !layoutRef.current.contains(event.target)) {
        setShowlayout(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [layoutRef]);

  return (
    <div className="">
      <div className="h-[10%] w-[80%]  bg-[#1e1f1f] border-l 	border-b  absolute top-0 right-0 flex justify-between  items-center  p-4 ">
        <div className=" flex gap-x-6 items-center">
          <CiLock className="text-xl text-white" />

          <input
            className="border-b bg-transparent focus:outline-none caret-white"
            type="text"
            placeholder="Untitled fiddle"
          />
        </div>
        <div className="flex items-center">
          <div className="flex gap-x-6 items-center">
            <button
              onClick={onRun}
              className="bg-yellow-500 text-white text-sm font-normal px-5 rounded-sm py-2"
            >
              Run
            </button>
            <CiSaveUp2
              className="text-xl text-white cursor-pointer"
              onClick={() => {
                proShow(true);
              }}
            />
            <RiTeamLine
              className="text-xl text-white cursor-pointer"
              onClick={() => {
                proShow(true);
              }}
            />
          </div>
          <hr className="w-8 rotate-90" />

          <div className="flex  gap-x-4 items-center justify-center">
            <FiLayout
              className="text-xl font-bold text-white cursor-pointer"
              onClick={() => setShowlayout(!showlayout)}
            />
            {showlayout && (
              <div
                ref={layoutRef}
                className="absolute top-[80%] right-24 w-64 h-48 bg-white text-black p-2"
              >
                <IoMdArrowDropup className="absolute top-[-10%] text-4xl text-white right-[40%]" />
                <span className="text-yellow-600">
                  Layouts are not customizable
                </span>
                {/* Add layout options to switch between layouts */}
                <div className="mt-4">
                  <button
                    className="block w-full text-left"
                    onClick={() => setLayoutStyle(0)}
                  >
                    Layout 1 (2x2 Grid)
                  </button>

                  <button
                    className="block w-full text-left mt-2"
                    onClick={() => setLayoutStyle(2)}
                  >
                    Layout 2 (2*2 inlarge)
                  </button>
                  <button
                    className="block w-full text-left mt-2"
                    onClick={() => setLayoutStyle(3)}
                  >
                    Layout 3 (1*3 grid)
                  </button>
                </div>
              </div>
            )}
            <MdOutlineDarkMode className="text-xl font-bold text-white" />
            <hr className="w-8 rotate-90" />

            <button
              className="bg-transparent border-[1px] px-2 py-1  flex items-center  border-yellow-200  text-yellow-500 rounded-sm"
              onClick={() => {
                proShow(true);
              }}
            >
              <AiFillThunderbolt className="text-xl text-white" />
              Go PRO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
