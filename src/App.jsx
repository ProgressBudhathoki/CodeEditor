import { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import Html from "./Components/Html";
import Css from "./Components/Css";
import Javascript from "./Components/Javascript";
import Result from "./Components/Result";
import { CiFlag1, CiStar } from "react-icons/ci";
import {
  FaAirbnb,
  FaAmazon,
  FaApple,
  FaBox,
  FaDropbox,
  FaEye,
  FaGithub,
  FaMicrosoft,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";
import { TbBrandElectronicArts } from "react-icons/tb";
import { SiIntel, SiUber } from "react-icons/si";
import { VscDebugConsole } from "react-icons/vsc";
import { BsNvidia } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function App() {
  const [htmlCode, setHtmlCode] = useState(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`);
  const [cssCode, setCssCode] = useState("h1 { color: red; }");
  const [jsCode, setJsCode] = useState("console.log('Hello World!');");
  const [output, setOutput] = useState("");

  const [proShow, setProShow] = useState(false);

  const layoutStyles = [
    "grid grid-rows-2 grid-cols-2",
    "flex flex-col",
    "grid grid-row-3 grid-cols-2",
  ];
  const [activeLayoutIndex, setActiveLayoutIndex] = useState(0);

  const handleRun = () => {
    const finalOutput = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `;
    setOutput(finalOutput);
  };
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    window.addEventListener("resize", handleResize);

    // Set the initial screen size check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="flex justify-center items-center h-screen text-center">
          <h1 className="text-2xl font-bold">
            We are in the development phase, soon we will be in small devices.
          </h1>
        </div>
      ) : (
        <Layout
          setLayoutStyle={setActiveLayoutIndex}
          setProShow={setProShow}
          onRun={handleRun}
        >
          <div
            className={`absolute right-0 bottom-0 w-[80%] h-[90%]  ${layoutStyles[activeLayoutIndex]}`}
          >
            <Html
              value={htmlCode}
              onChange={(value) => setHtmlCode(value)}
              setLayoutStyle={activeLayoutIndex}
            />
            <Result
              output={output}
              onRun={handleRun}
              setLayoutStyle={activeLayoutIndex}
            />
            <Css
              value={cssCode}
              onChange={(value) => setCssCode(value)}
              setLayoutStyle={activeLayoutIndex}
            />
            <Javascript
              value={jsCode}
              onChange={(value) => setJsCode(value)}
              setLayoutStyle={activeLayoutIndex}
            />
          </div>

          {proShow && (
            <div className="bg-white w-[75%] h-[80%] z-10 absolute  top-0  left-[12%] right-[12%] top-[8%] rounded-xl flex p-6 justify-between ">
              <IoClose
                className="absolute text-3xl top-2 right-5 cursor-pointer"
                onClick={() => setProShow(false)}
              />
              <div className="w-[65%] flex flex-col item-center justify-center overflow-auto">
                <h1 className="text-[30px] font-bold ">
                  Join the 4+ million users, and keep the JSFiddle dream alive.
                </h1>
                <ul className="flex flex-col gap-y-2">
                  <li className="flex items-center gap-x-4">
                    <CiStar className=" bg-yellow-200 text-yellow-600 font-extrabold text-md rounded-md w-12 h-12  p-1" />
                    <div className="flex flex-col items-start">
                      <h2 className="text-[17px]  font-bold">Ad-free</h2>
                      <p className="text-gray-600">
                        All ads in the editor and listing pages are turned
                        completely off.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-x-4">
                    <CiFlag1 className=" bg-blue-200 text-blue-600 font-extrabold text-md rounded-md w-12 h-12  p-2" />
                    <div className="flex flex-col items-start">
                      <h2 className="text-[17px]  font-bold">
                        Use pre-released features
                      </h2>
                      <p className="text-gray-600">
                        You get to try and use features (like the Palette Color
                        Generator) months before everyone else.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-x-4">
                    <FaBox className=" bg-pink-200 text-pink-600 font-extrabold  rounded-md w-12 h-12  p-3" />
                    <div className="flex flex-col items-start">
                      <h2 className="text-[17px]  font-bold">
                        Fiddle collections
                      </h2>
                      <p className="text-gray-600">
                        Sort and categorize your Fiddles into multiple
                        collections.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-x-4">
                    <FaEye className=" bg-green-200 text-green-600 font-extrabold  rounded-md w-12 h-12  p-3" />
                    <div className="flex flex-col items-start">
                      <h2 className="text-[17px]  font-bold">
                        Private collections and fiddles
                      </h2>
                      <p className="text-gray-600">
                        You can make as many Private Fiddles, and Private
                        Collections as you wish!
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-x-4">
                    <VscDebugConsole className=" bg-purple-200 text-purple-600 font-extrabold  rounded-md w-12 h-12  p-2" />
                    <div className="flex flex-col items-start">
                      <h2 className="text-[17px]  font-bold">Console</h2>
                      <p className="text-gray-600">
                        Debug your Fiddle with a minimal built-in JavaScript
                        console.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-[35%] flex flex-col p-4 gap-y-8">
                <p className="text-md font-md text-gray-600">
                  JSFiddle is used by you and 4+ million other developers, in
                  many companies ...
                </p>
                <div className="grid grid-cols-6 grid-rows-2 text-4xl item-center gap-2">
                  <FaGithub />
                  <FaDropbox />
                  <FaMeta />
                  <RiNetflixFill />
                  <FaAirbnb />
                  <TbBrandElectronicArts />
                  <FaApple />
                  <FaMicrosoft />
                  <SiUber />
                  <FaAmazon />
                  <BsNvidia />
                  <SiIntel />
                </div>
                <p>... and top educational institutions:</p>
                <div className="grid grid-cols-2 grid-rows-2 items-center gap-6 justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1280px-Harvard_University_logo.svg.png"
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <img
                    src="https://logodownload.org/wp-content/uploads/2021/04/stanford-university-logo.png"
                    alt=""
                  />
                  <img
                    src="https://www.prs.uk.com/api/clients/logo?clientId=2611"
                    alt=""
                  />
                </div>
                <button className="bg-yellow-500 p-3 rounded-md text-white text-md font-bold">
                  JOIN AS A PRO
                </button>
              </div>
            </div>
          )}
        </Layout>
      )}
    </>
  );
}

export default App;
