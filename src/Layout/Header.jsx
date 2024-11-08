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
    <div className="relative">
      <div className="h-[10%] w-[90%] md:w-[80%] bg-[#1e1f1f] border-l border-b fixed top-0 right-0 flex justify-between items-center  p-4 flex-wrap ">
        <div className="flex gap-x-4  items-center">
          <CiLock className="text-lg md:text-xl text-white" />

          <input
            className="border-b bg-transparent focus:outline-none caret-white text-sm md:text-base"
            type="text"
            placeholder="Untitled fiddle"
          />
        </div>
        <div className="flex items-center">
          <div className="flex gap-x-4 md:gap-x-6 items-center">
            <button
              onClick={onRun}
              className="bg-yellow-500 text-white text-xs md:text-sm font-normal px-3 py-1 md:px-5 md:py-2 rounded-sm"
            >
              Run
            </button>
            <CiSaveUp2
              className="text-lg md:text-xl text-white cursor-pointer"
              onClick={() => {
                proShow(true);
              }}
            />
            <RiTeamLine
              className="text-lg md:text-xl text-white cursor-pointer"
              onClick={() => {
                proShow(true);
              }}
            />
          </div>
          <hr className="w-6 md:w-8 rotate-90" />

          <div className="flex gap-x-2 md:gap-x-4 items-center justify-center">
            <FiLayout
              className="text-lg md:text-xl font-bold text-white cursor-pointer"
              onClick={() => setShowlayout(!showlayout)}
            />
            {showlayout && (
              <div
                ref={layoutRef}
                className="absolute top-[80%] right-8 md:right-24 w-40 md:w-64 h-auto bg-white text-black p-2 rounded shadow-lg"
              >
                <IoMdArrowDropup className="absolute top-[-10%] text-3xl md:text-4xl text-white right-[40%]" />
                <span className="text-yellow-600">
                  Layouts are not customizable
                </span>
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
                    Layout 2 (2*2 enlarged)
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
            <MdOutlineDarkMode className="text-lg md:text-xl font-bold text-white" />
            <hr className="w-6 md:w-8 rotate-90" />

            <button
              className="bg-transparent border-[1px] px-1 py-1 md:px-2 md:py-1 flex items-center border-yellow-200 text-yellow-500 rounded-sm text-xs md:text-sm"
              onClick={() => {
                proShow(true);
              }}
            >
              <AiFillThunderbolt className="text-lg md:text-xl text-white" />
              Go PRO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
