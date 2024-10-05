import React, { useReducer } from "react";
import { FaJsfiddle } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { FiLayout } from "react-icons/fi";
import { LuFileStack } from "react-icons/lu";
import { GrResources } from "react-icons/gr";
import { FaSync } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

export default function Sidebar({ proShow }) {
  const Reducer = (state, action) => {
    switch (action.type) {
      case "COLLECTIONS":
        return {
          ...state,
          Collections: !state.Collections,
          Resources: false,
          Async: false,
        };
      case "RESOURCES":
        return {
          ...state,
          Resources: !state.Resources,
          Async: false,
          Collections: false,
        };
      case "ASYNC":
        return {
          ...state,
          Async: !state.Async,
          Collections: false,
          Resources: false,
        };
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    Collections: false,
    Resources: false,
    Async: false,
  });

  return (
    <div>
      <div className="h-[100%] w-[20%] bg-zinc-900	 fixed left-0 top-0  ">
        <div className=" flex justify-between items-center border-b p-[7.2px] ">
          <FaJsfiddle className=" text-5xl font-bolder text-yellow-500" />
          <FiLayout
            className="text-2xl font-bold text-white cursor-pointer "
            onClick={() => {
              proShow(true);
            }}
          />
        </div>

        <div className="">
          <ul className="flex flex-col items-start gap-6 p-6 font-semibold ">
            <li className="flex gap-x-4 text-[#EDEDED] items-center  ">
              <LuFiles className="text-red-600 " />
              <button
                onClick={() => {
                  dispatch({ type: "COLLECTIONS" });
                }}
              >
                Collections
              </button>
            </li>
            {state.Collections && (
              <div className="">
                <span className="text-gray-600 text-[12px]">
                  SELLECT COLLECTION:
                </span>
                <button
                  className="text-white text-sm font-normal mt-2 cursor-pointer "
                  onClick={() => {
                    proShow(true);
                  }}
                >
                  + New Collection
                </button>
              </div>
            )}
            <li className="flex gap-x-4 items-center text-[#EDEDED] ">
              <GrResources className="text-purple-700" />
              <button
                onClick={() => {
                  dispatch({ type: "RESOURCES" });
                }}
              >
                Resources
              </button>
            </li>
            {state.Resources && (
              <div className=" flex flex-col items-center text-sm ">
                <div className="flex border-[1px] p-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="JavaScript/CSS URL"
                    className=" bg-transparent  caret-white focus:outline-none font-normal "
                  />
                  <button
                    className="text-yellow-300 cursor-pointer"
                    onClick={() => {
                      proShow(true);
                    }}
                  >
                    +ADD
                  </button>
                </div>
                <ul className="text-gray-600 text-[12px] list-disc mt-2 ml-4">
                  <li>Paste a direct CSS/JS URL</li>
                  <li>Type a library name to fetch from CDNJS</li>
                </ul>
              </div>
            )}

            <li className="flex gap-x-4 items-center text-[#EDEDED]  ">
              <FaSync className="text-yellow-500" />
              <button
                onClick={() => {
                  dispatch({
                    type: "ASYNC",
                  });
                }}
              >
                Async requests
              </button>
            </li>
            {state.Async && (
              <div className="flex flex-col items-start">
                <span className="text-gray-600 text-[16px]">
                  Simulting async requests:
                </span>
                <ul className="list-disc text-[14px]   ml-4 text-gray-400">
                  <li>JSON</li>
                  <li>JSONP</li>
                  <li>HTML</li>
                  <li>XML</li>
                </ul>
                <span className="text-gray-600 text-[12px]">
                  See docs for more info
                </span>
                <span className="text-gray-600 text-[12px]">
                  You Need{" "}
                  <span className="text-[16px] text-yellow-600">Pro</span>{" "}
                  Version
                </span>
              </div>
            )}

            <li className="flex gap-x-4 text-[#EDEDED] items-center  ">
              <FaFileAlt className="text-green-600" />
              Changelog
            </li>
          </ul>
        </div>

        <div className="mt-4 ml-4">
          <h1 className="  text-sm text-[#CCCCCC]">JSFIDDLE APPS</h1>

          <ul className="text-md cursor-pointer">
            <li className="flex items-center gap-2  mt-2 text-white">
              <IoIosColorPalette className="text-red-600" />
              Color Palette Generator
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
