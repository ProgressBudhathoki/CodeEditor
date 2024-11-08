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
            Thank you for your cooperation. We will reach you soon.
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
            <div className="bg-white w-[75%] h-[80%] z-10 absolute  top-0  left-[12%] right-[12%] top-[8%] rounded-xl flex p-6 justify-between  overflow-hidden">
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
                    src="https://www.u-tokyo.ac.jp/content/400244322.svg"
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
